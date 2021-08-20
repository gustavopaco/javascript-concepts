/*IMPORTANT: Promises eh um objeto usado para realizar chamada Asyncrona
*  Status das Promises:
*   Pending = Estado inicial, nao foi completada e nem negada
*   Fulfilled = Significa que a resposta da operacao foi Sucesso(200)
*   Rejected = Resposta da operacao foi negada por algum motivo(500,404,403)*/
import {log} from "../../js/logger";

const promise = new Promise(((resolve, reject) => {
    setTimeout(() =>{
        resolve("dados vindo do servidor");
    },3000);

    setTimeout(() =>{
        reject("nenhum dado vindo do servidor, ouve um erro");
    },5000)
}));

promise.then(response => {
    log(response);
}).catch(error => {
    log(error);
})

/*IMPORTANT: Promise.all Chamada Asyncrona em conjunto*/
const namesPromise = new Promise(((resolve, reject) => {
    setTimeout(() =>{
        resolve(["Anna", "John", "Ali", "Gustavo"]);
    },3000);

    setTimeout(() =>{
        reject("nenhum dado vindo do servidor, ouve um erro");
    },5000)
}));

const surnamesPromise = new Promise(((resolve, reject) => {
    setTimeout(() =>{
        resolve(["Williams", "Travolta", "Baba", "Paco"]);
    },3000);

    setTimeout(() =>{
        reject("nenhum dado vindo do servidor, ouve um erro");
    },5000)
}));

Promise.all([namesPromise , surnamesPromise]).then(response => {
    const [names, surname] = response;
    for (let i = 0; i < names.length; i++) {
        log(`${names[i]}  ${surname[i]}`);
    }
}).catch(error => {
    log(error);
});

/* IMPORTANT: Consumo de API REST que gera usuarios randomicos utilizando tenicas de:
*   Fetch para buscar os dados na internet,
*   Promise para fazer a chamada de forma Asyncrona
*   Desconstrucao de Array de Objectos e objetos de objetos*/
const getRandomUsers = (n) => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUsers.then(response => {
        response.json().then(data => {
            const {results} = data;
            results.forEach((user) => {
                const {gender, name:{first, last}, email} = user
                log(`Nome: ${first}, Sobrenome: ${last}, Sexo: ${gender}, Email ${email}`)

            })
        }).catch(error => {
            log(error);
        })
    }).catch(error => {
        log(error);
    })
    log(fetchRandomUsers);
}
getRandomUsers(10);