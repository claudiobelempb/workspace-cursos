"use strict";
function enviarEmail(para, assunto, remetente) {
    if (assunto === void 0) { assunto = "Sem assunto"; }
    console.log({
        para: para,
        assunto: assunto,
        remetente: remetente
    });
}
enviarEmail("joao@hcode.com.br");
