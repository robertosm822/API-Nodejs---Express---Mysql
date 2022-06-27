const rateLimit = require('express-rate-limit');
const limitReq = 10;

const TaxaLimitada = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, //o tamanho da janela (24 horas em nosso caso) em milissegundos
    max: limitReq, //representa o número de solicitações permitidas por janela por usuário da API
    message: `Você ultrapassou o limite de ${limitReq} solicitações em 24 horas!`, //mensagem
    standardHeaders: true, //especifica se os cabeçalhos apropriados devem ser adicionados à resposta que mostra o limite aplicado (), uso atual () e tempo para esperar antes de tentar novamente () quando o limite é atingidoX-RateLimit-LimitX-RateLimit-RemainingRetry-After
    legacyHeaders: false, //
});
module.exports = TaxaLimitada;