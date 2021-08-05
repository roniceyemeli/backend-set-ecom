const Users = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken') ;


const userCtrl = {
    register: async (req,res) =>{
        try {
            const {name,email,password} = req.body;

            const user = await Users.findOne({email});
            if (user) return res.status(400).json({msg:"the email already exist"});

            if(password.length < 6){
                return res.status(400).json({msg:'password should be at least 6 charaters long'})
            }
            
            //password encryption
            const passwordHash = await bcrypt.hash(password,10)
            const newUser =  new Users({
                name, email, password:passwordHash
            })

            //save to mongoDB
            await newUser.save()

            // then create jsonwebtoken to authentification
            const accesstoken = createAccessToken({id: newUser._id})
            const refreshtoken = createRefreshToken({id: newUser._id})

            res.cookie("refreshtoken", refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })
            
            res.json({accesstoken})

        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    
    login: async(req,res) => {
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg:"this user doesn't exist"})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg:"bad credentials"})
            
            //login success, we create access token and refresh token
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})

            res.cookie("refreshtoken", refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.json({accesstoken,
            role:user.role
            })

        } catch (error) {
            res.status(400).json({msg:error.message})
        }
    },
    getUser: async(req,res) =>{
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg:"User doesn't exist"})

            res.json(user)
        } catch (error) {
            res.status(500).json({msg:error.message})
        }
    }
}

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.TOKEN_ACCESS, {expiresIn:'7d'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN, {expiresIn:'7d'})
}

module.exports = userCtrl;
