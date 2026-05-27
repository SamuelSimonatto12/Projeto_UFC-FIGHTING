var database = require("../database/config");

function buscarFavorito(idUsuario) {

    var instrucaoSql = `
            select 
        l.nome,
        count(*) as escolhas
    from comparacoes_lutadores cl
    join lutadores l
        on cl.id_lutador = l.id
    where cl.fk_usuario = ${idUsuario}
    group by l.nome
    order by escolhas desc
    limit 1;
        `;

    return database.executar(instrucaoSql);
}

function buscarNomeData(idUsuario) {

    var instrucaoSql = `
            select 
        nome,
        DATEDIFF(NOW(), dataCadastro) as diasAtivo
    from usuario
    where id_usuario = ${idUsuario};
            `;

    return database.executar(instrucaoSql);
}

function buscarPorcentagem(idUsuario){

    var instrucaoSql = `
    
        SELECT 
        ROUND(
        (
            SELECT COUNT(*)
            FROM (
                SELECT fk_usuario, COUNT(*) AS total
                FROM comparacoes
                GROUP BY fk_usuario
            ) ranking
            WHERE total < (
                SELECT COUNT(*)
                FROM comparacoes
                WHERE fk_usuario = ${idUsuario}
            )
        )
        /
        (
            SELECT COUNT(*) FROM usuario
        )
        * 100
        ) AS porcentagem;
    
    `;

    return database.executar(instrucaoSql);
}

function buscarVitorias(){

    var instrucaoSql = `
    
        SELECT
            vencedor,
            COUNT(*) AS vitorias
        FROM comparacoes
        WHERE vencedor != 'Empate'
        GROUP BY vencedor
        ORDER BY vitorias DESC;
    
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarFavorito,
    buscarNomeData,
    buscarPorcentagem,
    buscarVitorias
}