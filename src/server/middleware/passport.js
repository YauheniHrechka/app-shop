const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/User');
const keys = require('../config/keys');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(
        new Strategy(options, async (payload, done) => {
            try {
                const user = await User.findById({ _id: payload.userId }).select('email id');
                if (user) {
                    done(null, user);
                } else {
                    done(null, false)
                }
            } catch (e) {
                console.log('error -> ', e);
            }
        })
    );
}