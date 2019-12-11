const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
// const Buffer = require('buffer/').Buffer
const Dog = require('../models/dog.js')
const User = require('../models/user.js')
const multer = require('multer');
const interval = require('interval-promise')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        console.log(file)
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const imageFilter = function(req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error("Only image files are accepted!"), false);
    }
    cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter });


//@route GET /dogs/
//@description GET TOKEN from PetFinder API 
//@access public 
// router.get('/', async (req, res, next) => {
//     console.log("I'm hitting the route");
//     const url = "https://api.petfinder.com/v2/oauth2/token";
//     const response = await fetch(url, {
//         body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret=${process.env.SECRET}`,
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         method: "POST"
//     })

//     const json = await response.json();
//     res.send(json['access_token']);
//     console.log(json['access_token']);

// })

let token = async (req, res, next) => {
    const url = "https://api.petfinder.com/v2/oauth2/token";
    const response = await fetch(url, {
        body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret=${process.env.SECRET}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    })
    const json = await response.json();
    tk.push(json['access_token'])
    // console.log(json['access_token']);
    return json['access_token'];
}

let tk = []
token();

interval(async () => {
    await token()
}, 3600000)


// router.use("/shelter", token)
//@route GET /dogs/shelter
//@description Shelter Dogs Index - using PetFinder API
//@access public
router.get('/shelter', async (req, res, next) => {
    try {
        // console.log("I'm hitting the shelter route.");
        const url = `https://api.petfinder.com/v2/animals?type=dog&location=60611&status=adoptable`;
        const response = await fetch(url, {
            headers: {
                authorization: `${process.env.TOKEN_TYPE} ${tk[tk.length-1]}`
            },
            method: "GET"
        })
        const json = await response.json();
        res.send(json)
    } catch (err) {
        next(err)
    }
})

//@route GET /dogs/shelter/:id
//@description Shelter Dog Show Page - using PetFinder API
//@access public
// GET https://api.petfinder.com/v2/animals/{id}
router.get('/shelter/:id', async (req, res, next) => {
    try {
        // console.log("I'm hitting the shelter id route.");
        const url = `https://api.petfinder.com/v2/animals/${req.params.id}`;
        const response = await fetch(url, {
            headers: {
                authorization: `${process.env.TOKEN_TYPE} ${tk[tk.length-1]}`
            },
            method: "GET"
        })
        const json = await response.json();
        res.send(json)
    } catch (err) {
        next(err)
    }
})



//@route GET /dogs/rehome
//@description Home to Rehome Dogs Index
//@access public
router.get('/rehome', async (req, res, next) => {
    try {
        const foundDogs = await Dog.find({})
        res.json(foundDogs)
    } catch (err) {
        next(err)
    }
})

//@route GET /dogs/rehome/:id
//@description Home to Rehome Dog Show Page
//@access public
router.get('/rehome/:id', async (req, res, next) => {
    try {
        const foundDog = await Dog.findById(req.params.id)
        res.json(foundDog)
    } catch (err) {
        next(err)
    }
})

// Middleware - All routes below will now require Auth
const requireAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        req.session.message = 'You must be logged in to do that'
        res.json({ message: 'User must log in - Auth is required', status: 401 })
    } else {
        next()
    }
}

// All routes below will now requireAuth
router.use(requireAuth)

//@route GET /dogs/new
//@description User Looking to Rehome their dog Routes - This route will show a form of dog criteria for the user to fill out in order to create a profile for their dog to be inserted into the rehoming section
// router.get('/new', (req, res) => {
//  res.json('new')
// })

//@route POST /dogs
//@description User Looking to adopt dog, the form
//@access restricted
router.post('/adopt', async (req, res, next) => {
    // console.log('Hitting the adopt route - this should return matches');
    // console.log(tk[tk.length - 1]);
    try {
        if (req.body.good_with_children === 'on') {
            req.body.good_with_children = true;
        } else {
            req.body.good_with_children = false;
        }
        if (req.body.good_with_dogs === 'on') {
            req.body.good_with_dogs = true;
        } else {
            req.body.good_with_dogs = false;
        }
        if (req.body.good_with_cats === 'on') {
            req.body.good_with_cats = true;
        } else {
            req.body.good_with_cats = false;
        }
        // if (req.body.adopted === 'on') {
        //     req.body.adopted = true;
        // } else {
        //     req.body.adopted = false;
        // }
        if (req.session.loggedIn === true) {
            const url = `https://api.petfinder.com/v2/animals?type=dog&breed=${req.body.breed}&size=${req.body.size}&age=${req.body.age}&coat=${req.body.coat}&good_with_children=${req.body.good_with_children}&good_with_dogs=${req.body.good_with_dogs}&good_with_cats=${req.body.good_with_cats}&location=${req.body.zip_code}&status=adoptable&distance=500`;
            const response = await fetch(url, {
                headers: {
                    authorization: `${process.env.TOKEN_TYPE} ${tk[tk.length-1]}`
                },
                method: "GET"
            })

            // save the url on user db
            const user = await User.findById(req.session.userId)
            user.url = url
            await user.save()

            const json = await response.json();

            res.json({ dogs: json, status: 200 })
            // res.redirect('/dogs/:id')
        } else {
            req.session.logOutMsg = 'You need to create an account';
            res.json({ message: 'Not authorized to do that', status: 401 })
            // res.redirect('/users/login')
        }
    } catch (err) {
        res.status(400).json('Error' + err)
        next(err)
    }
})


//@route POST /dogs
//@description User Looking to Rehome their dog Routes - This route will show a form of dog criteria for the user to fill out in order to create a profile for their dog to be inserted into the rehoming section
//@access restricted
router.post('/new', upload.single('image'), async (req, res, next) => {
    // console.log("req.body in dog create")
    // console.log(req.body);
    try {
        if (req.body.good_with_children === 'on') {
            req.body.good_with_children = true;
        } else {
            req.body.good_with_children = false;
        }
        if (req.body.good_with_dogs === 'on') {
            req.body.good_with_dogs = true;
        } else {
            req.body.good_with_dogs = false;
        }
        if (req.body.good_with_cats === 'on') {
            req.body.good_with_cats = true;
        } else {
            req.body.good_with_cats = false;
        }
        if (req.body.adopted === 'on') {
            req.body.adopted = true;
        } else {
            req.body.adopted = false;
        }
        if (req.session.loggedIn === true) {
            const dog = {
                user: req.session.userId,
                email: req.session.email,
                name: req.body.name,
                description: req.body.description,
                breed: req.body.breed,
                adopted: req.body.adopted,
                size: req.body.size,
                age: req.body.age,
                coat: req.body.coat,
                good_with_children: req.body.good_with_children,
                good_with_dogs: req.body.good_with_dogs,
                good_with_cats: req.body.good_with_cats,
                image: req.file
            }
            const savedDog = await Dog.create(dog)
            res.json({ dog: savedDog, status: 201 })
            // res.redirect('/users/:id')
        } else {
            req.session.logOutMsg = 'You need to create an account';
            res.json({ status: 401 })
            // res.redirect('/users/login')
        }
    } catch (err) {
        res.json({ status: 400, error: err })
        // res.sendStatus(400).json('Error' + err)
        next(err)
    }
})

//@route GET /dogs/:id
//@description This route will allow Users to see their dogs’ profile page
router.get('/:id', async (req, res, next) => {
    console.log('Hitting get/dogs/:id route');
    try {
        const dogs = await Dog.find({ user: req.session.userId });
        res.json({
            dog: dogs,
            userId: req.session.userId,
            email: req.session.email,
            status: 200
        })
    } catch (err) {
        res.json({ status: 400, error: err })
        next(err)
    }
})

//@route GET /dogs/:id/edit
//@description This route will allow Users to edit their dogs’ profile page -- require auth’d user to be that dogs owner
router.get('/:id/edit', async (req, res, next) => {
    try {
        const oneDog = await Dog.findById(req.params.id);
        res.json({
            dog: oneDog
        })
    } catch (err) {
        res.json({ status: 400, error: err })
        // res.status(400).json('Error' + err)
        next(err)
    }
})

//@route PUT /dogs/:id
//@description This route will allow Users to edit their dogs’ profile page -- require auth’d user to be that dogs owner
//@access restricted
router.put('/:id', async (req, res, next) => {
    // console.log("req.params in dog edit")
    // console.log(req.params)
    // console.log("req.body")
    // console.log(req.body)
    try {
        if (req.body.good_with_children === 'on') {
            req.body.good_with_children = true;
        } else {
            req.body.good_with_children = false;
        }
        if (req.body.good_with_dogs === 'on') {
            req.body.good_with_dogs = true;
        } else {
            req.body.good_with_dogs = false;
        }
        if (req.body.good_with_cats === 'on') {
            req.body.good_with_cats = true;
        } else {
            req.body.good_with_cats = false;
        }
        if (req.body.adopted === 'on') {
            req.body.adopted = true;
        } else {
            req.body.adopted = false;
        }
        const updatedDogInfo = {
            user: req.session.userId,
            name: req.body.name,
            breed: req.body.breed,
            description: req.body.description,
            adopted: req.body.adopted,
            size: req.body.size,
            age: req.body.age,
            coat: req.body.coat,
            good_with_children: req.body.good_with_children,
            good_with_dogs: req.body.good_with_dogs,
            good_with_cats: req.body.good_with_cats,
            image: req.file
        }
        const dog = await Dog.findByIdAndUpdate(req.params.id, updatedDogInfo, { new: true })
        // console.log("this is the updated Dog")
        // console.log(dog)
        // res.redirect('/dogs/:id')
        res.json({ dog: dog, status: 200 })
    } catch (err) {
        res.json({ status: 400, error: err })
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    // console.log('This is the delete in the dogController');
    // console.log('Here is req.params from dogController---->>', req.params);
    try {
        // console.log('You above the findByIdAndRemove!');
        const dog = await Dog.findByIdAndRemove(req.params.id)
        // console.log('This is from dogController under the await ========= ', dog);
        if (dog) {
            // console.log('YOU ARE HERE IN THE IF!!!', dog)
            res.json({ message: 'Deleted', status: 200 })
        }
    } catch (err) {
        // console.log('you got an error');
        res.json({ error: err })
        next(err)
    }
})





module.exports = router