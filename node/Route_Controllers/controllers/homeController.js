exports.paginaInicial = (req,res) =>{
    res.send( ` <form action= "/" method = "POST">
    Nome do Cliente: <input type = "text" name = "qualquercoisa"></input><br></br>
    <button>Ola mundo</button>
    </form>`
    );

  

}

exports.trataPost = (req,res) =>{
    res.send('recebi o form')
};