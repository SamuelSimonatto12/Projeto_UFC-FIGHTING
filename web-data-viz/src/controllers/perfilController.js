var perfilModel = require("../models/perfilModel");

function favorito(req, res) {

    var idUsuario = req.params.idUsuario;

    perfilModel.buscarFavorito(idUsuario)
        .then(function(resultado){

            res.json(resultado);

        })
        .catch(function(erro){

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });
}

function nomeData(req, res){
    var idUsuario = req.params.idUsuario;

    perfilModel.buscarNomeData(idUsuario)
        .then(function(resultado){

            res.json(resultado);

        })
        .catch(function(erro){

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });

}

function porcentagem(req, res){
    var idUsuario = req.params.idUsuario;

    perfilModel.buscarPorcentagem(idUsuario)
        .then(function(resultado){

            res.json(resultado);

        })
        .catch(function(erro){

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });

}

function vitorias(req, res){

    perfilModel.buscarVitorias()
        .then(function(resultado){

            res.json(resultado);

        })
        .catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}

module.exports = {
    favorito,
    nomeData,
    porcentagem,
    vitorias
}