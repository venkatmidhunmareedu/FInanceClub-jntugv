const jwt = require("jsonwebtoken");

exports.verifyAuth = (token) => {
    if (!token) {
        return {
            success : false
        }
    }
    else {
        jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
            if (err) {
                return { success: false }
            }
            return { success: true, user_name: result.user_name }
        })
    }
}