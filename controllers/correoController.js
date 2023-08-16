const{ response } = require('express');
const nodeMailer =  require('nodemailer');

const envioCorreo = (req=request,resp=response) =>{
    let body = req.body;

    let config = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        post: 587,
        auth:{
            user:'mario@85media.mx',
            pass: 'dtoodyxgvfgnaowd'
        }
    });

    const opciones = {
        from: body.correo,
        subject: body.name + '  le ha enviado un correo',
        to:  'mario@85media.mx',
        text: 
          'Nombre: ' + body.name + `\n` 
        + 'Correo: ' + body.correo + `\n` 
        + 'Empresa: ' + body.empresa + `\n` 
        + 'Mensaje: ' + body.message, 
    };

    config.sendMail(opciones,function(error,result){

        if (error) return resp.json({ok:false,msg:error});

        return resp.json(
            {ok: true,
            msg:result,
        })
    })
}

module.exports = {
    envioCorreo
}