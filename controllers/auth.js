const {response, request}=require('express');




const crearUsuario=(req=request,res= response)=>{

    console.log(req.body);
    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });
}
const loginUsuario=(req=request,res= response)=>{
    
    
    return res.json({
        ok: true,
        msg: 'Login usuarios /'
    });
}
const renewToken=(req=request,res= response)=>{

    return res.json({
        ok: true,
        msg: 'Renew'
    });
}
module.exports={
    crearUsuario,
    loginUsuario,
    renewToken
}