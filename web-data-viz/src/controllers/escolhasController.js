var escolhasModel = require("../models/escolhasModel");

function cadastrar(req, res) {

    var usuario = req.body.usuarioServer;
    var lutador1 = req.body.lutador1Server;
    var lutador2 = req.body.lutador2Server;
    var vencedor = req.body.vencedorServer;
    var pontos1 = req.body.pontos1Server;
    var pontos2 = req.body.pontos2Server;

    if (usuario == undefined) {
        res.status(400).send("Usuário undefined");
    } else if (lutador1 == undefined) {
        res.status(400).send("Lutador 1 undefined");
    } else if (lutador2 == undefined) {
        res.status(400).send("Lutador 2 undefined");
    } else {

        escolhasModel.cadastrar(usuario, lutador1, lutador2, vencedor, pontos1, pontos2)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });

    }
}

module.exports = {
    cadastrar
}