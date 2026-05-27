var database = require("../database/config");

function cadastrar(
    usuario,
    lutador1,
    lutador2,
    vencedor,
    pontos1,
    pontos2
) {

    var instrucaoSql = `
    INSERT INTO comparacoes
    (
        fk_usuario,
        id_lutador1,
        id_lutador2,
        vencedor,
        pontosLutador1,
        pontosLutador2
    )
    VALUES
    (
        ${usuario},
        ${lutador1},
        ${lutador2},
        '${vencedor}',
        ${pontos1},
        ${pontos2}
    );
`;

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}