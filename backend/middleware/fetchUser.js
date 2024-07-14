var jwt = require('jsonwebtoken');

const JWT_SECRET = "HeyItsaSecret"

const fetchUser = (req,res,next)=>{
    // get the user for jwt token and add id to req object
    const token = req.header("auth-token")
    if(!token){
        res.status(401).send({ error:"please authenticate using a valid token"}) //access denies - 401

    }

    try {
        const data = jwt.verify(token,JWT_SECRET)
        req.user = data.user;
        console.log(req.user)
    next()
    } catch (error) {
        res.status(401).send({ error:"please authenticate using a valid token"}) //access denies - 401
    }
        

}

module.exports = fetchUser