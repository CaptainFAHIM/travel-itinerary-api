const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Local imports
const __res_ = require('../utils/helpers/send-response');
const UserModel = require('../models/user.model');


module.exports = {
    createUser: async function (req, res) {
        try {
            const password = req.body.password;
            const newPassword = bcrypt.hashSync(password, 10);
    
            const userInfo = await UserModel.findOne({ email: req.body.email });
            if (userInfo) {
                return __res_.out(req, res, {
                    status: "error",
                    statusCode: 400,
                    message: "This User Already Exists!!",
                });
            } else {
                const userData = {
                    email: req.body.email,
                    password: newPassword,
                };
    
                const data = await new UserModel(userData).save();
    
                if (data) {
                    const payload = {
                        _id: data._id,
                        email: data.email,
                    };
    
                    const token = jwt.sign(payload, process.env.JWT_SECRET, {
                        expiresIn: "10m"
                    });
    
                    return __res_.out(req, res, {
                        status: true,
                        statusCode: 201,
                        message: "Successfully created account!",
                        data: token,
                    });
                }
            }
        } catch (e) {
            return __res_.out(req, res, {
                status: true,
                statusCode: 500,
                message: "Internal server error!!!",
                data: e
            });
        }
    },
    userLogin: async function(req, res){
        try {
            const userInfo = await UserModel.findOne({ email: req.body.email });
    
            if (!userInfo) {
                return __res_.out(req, res, {
                    status: "error",
                    statusCode: 404,
                    message: "User Does Not Exist!!",
                    data: null
                });
            }
            if (req.body.email === userInfo.email && bcrypt.compareSync(req.body.password, userInfo.password)) {
                const payload = {
                    _id: userInfo._id,
                    email: userInfo.email,
                };
                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: "10m"
                });
    
                const token1 = `${token}`;
                return __res_.out(req, res, {
                    status: true,
                    statusCode: 200,
                    message: "Login Successfully!!",
                    data: token1,
                });
            } else {
                return __res_.out(req, res, {
                    status: "error",
                    statusCode: 401,
                    message: "Invalid Credentials"
                });
            }
        } catch (err) {
            return __res_.out(req, res, {
                status: "error",
                statusCode: 500,
                data: err
            });
        }
    }
}