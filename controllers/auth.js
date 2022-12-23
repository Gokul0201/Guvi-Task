var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const saltRound = 10

const hashPassword = async (password)=>{
    var salt = await bcrypt.genSalt(saltRound);
    return await bcrypt.hash(password,salt) 
}

const hashCompare = async (password,hashedPassword)=>{
    return await bcrypt.compare(password,hashedPassword)
}


const createToken = async ({email,mobile})=>{
    // console.log(process.env.expiresIn)
    let token = await jwt.sign({email,mobile},process.env.JWTSECRETKEY)
    return token   
}

const decodeToken = async(token)=>{
    let data = await jwt.decode(token)
    return data
}

module.exports={hashCompare,hashPassword,createToken,decodeToken}