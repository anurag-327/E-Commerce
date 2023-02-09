const jwt =require("jsonwebtoken");


const VerifyToken =(req,res,next) =>
{
    const authHeader= req.headers.token;
    console.log("token",authHeader)
    if(authHeader)
    { 
       jwt.verify(authHeader, process.env.JWT_SEC,(err,user) =>
       {
        if(err) res.status(403).json("Invalid Token");
        req.user=user;
        next()
       })
    }
    else{
        return res.status(401).json("You are not authenticated");
    }
}

const VerifyTokenAndAuthorization= (req,res,next) =>
{
    VerifyToken(req,res,() =>
    {
        if(req.user.id===req.params.id || req.user.isAdmin)
        {
            next();
        }
        else
        {
            res.status(403).status("You are not allowed to do that !");
        }
    })
}
const VerifyTokenAndAdmin= (req,res,next) =>
{
    VerifyToken(req,res,() =>
    {
        if(req.user.isAdmin)
        {
            next();
        }
        else
        {
            res.status(403).status("You are not allowed to do that !");
        }
    })
}

module.exports={VerifyToken,
    VerifyTokenAndAuthorization,
    VerifyTokenAndAdmin
};