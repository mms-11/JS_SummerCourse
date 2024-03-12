

exports.middlewareGlobal = (req,res,next) =>{

    if(req.body){
        console.log(`o nome do cliente  eh ${req.body.name}`);
    }
    console.log();
    console.log('passei no meu middleware global')
    console.log();
    next();
};