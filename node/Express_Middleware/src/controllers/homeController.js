exports.paginaInicial = (req,res,next) =>{
    res.render('index'); //termina a requisição

  console.log(`(pagina inicial)olha o que tem na req.session.nome ${req.session.nome}`)
   next();

}

exports.trataPost = (req,res) =>{
    
    res.send(req.body)
};