import service from "./service";
import usuarioSerivce from "./usuario-serivce";

function obter(){

    return new Promise((resolve, reject) => {
        service.get('/clientes', {
            headers: {
                'Authorization': usuarioSerivce.obterToken()
            }
        })
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

export default {
    obter
}