import service from "./service";

function Autenticar (email, senha){
    return new Promise((resolve,reject) => {
        service.post('/login', {email, senha})
        .then(response => resolve(response))
        .catch(erro => reject(erro))

    })
}
export default{
    Autenticar
}