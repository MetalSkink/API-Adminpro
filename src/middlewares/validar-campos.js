import { response } from "express";
import { validationResult } from "express-validator";

const validarCampos = (req,res = response,next) =>{
    const errors = validationResult(req);
    //console.log(errors);
    if (!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors: errors.mapped()
        })
    }

    next();
}

module.exports = {
    validarCampos
}