function validarNome(nome) {
    return nome != '';
}

function validarEmail(email) {

    let posArroba = email.indexOf('@');
    let posCom = email.indexOf('.com');

    if (
        posArroba <= 0 ||
        posCom <= posArroba + 1 ||
        posCom != email.length - 4
    ) {
        return false;
    } else {
        return true;
    }
}

function validarSenha(senha) {

    if (senha == '' || senha.length < 6) {
        return false;
    } else {
        return true;
    }
}