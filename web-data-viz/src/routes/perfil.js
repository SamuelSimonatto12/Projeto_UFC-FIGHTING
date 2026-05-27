var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/favorito/:idUsuario", function (req, res) {

    perfilController.favorito(req, res);
    
});

router.get("/nomeData/:idUsuario", function (req, res) {

    perfilController.nomeData(req, res);
    
});

router.get("/porcentagem/:idUsuario", function (req, res) {

    perfilController.porcentagem(req, res);
    
});

router.get("/vitorias", function(req, res){
    perfilController.vitorias(req, res);
});


module.exports = router;