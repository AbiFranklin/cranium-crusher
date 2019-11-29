const User = require('../../models/User');
const UserSession = require('../../models/UserSession'); 


module.exports = (app) => {
    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const { username, password } = body;

        if (!username) {
            return res.send({
                success: false,
                message: 'Error: Missing UserName'
            })}

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Missing password'
            })}

        console.log('here')

        const newUser = new User;
        newUser.username = username;
        newUser.password = newUser.generateHash(password)
        
        User.find({
            username: username
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error looking up username'
                })}
            if (users.length > 0) {
                return res.send({
                    success: false,
                    message: 'Username already exists'
                })
            } else {
                newUser.save((err, user) => {
                    if (err) {
                        return res.send({
                            success: false,
                            message: 'Could not add user'
                        })
                    } else {
                        return res.send({
                            success: true,
                            message: 'Signed Up'
                        })
                    }
                })
            }
        })
    })

    app.post('/api/account/signin', (req, res, next) => {
        const { body } = req;
        const { username, password } = body;

        if (!username) {
            return res.send({
                success: false,
                message: 'Error: Missing UserName'
            })}

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Missing password'
            })}

        User.find({
            username: username
        }, (err, users) => {
            if(err){
                res.send({
                    success: false,
                    message: 'Error: Server Error looking up username'
                })
            }

            if(users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Multiple users with same username'
                })
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid Password'
                })
            } else {
                const userSession = new UserSession();
                userSession.userId = user._id

                userSession.save((err, doc) => {
                    if(err){
                        console.log(err)
                        return res.send({
                            success: false,
                            message: 'Error: Server error saving user session'
                        })
                    }

                    console.log(doc._id)

                    return res.send({
                        success: true,
                        message: 'Valid sign in',
                        token: doc._id
                    })
                })
            }
        })
    })

    app.get('/api/account/verify', (req, res, next) => {
        const { body } = req;
        const { token } = body;

        console.log(token)

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, session) => {
            if(err){
                return res.send({
                    success: false,
                    message: "Error: Server error finding token"
                })
            }

            if (session.length != 1){
                return res.send({
                    success: false,
                    message: 'Error: Multiple sessions with same token'
                })
            } else {
                return res.send({
                    success: true,
                    message: 'Valid, Active Token'
                })
            }
        })
    })

    app.get('/api/account/logout', (req, res, next) => {
        const { body } = req;
        const { token } = body;

        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false}, 
        {$set: {isDeleted: true}}, 
        null, 
        (err, session) => {
            if(err){
                return res.send({
                    success: false,
                    message: "Error: Server error logging out"
                })
            }

            return res.send({
                success: true,
                message: 'Successfully Logged Out'
            })
        })
    })
};