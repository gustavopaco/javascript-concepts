/* IMPORTANT: Async await*/
async function logName(name) {
    log(name)
    // 1. we can yield promises using await
    const transformName = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(name.toUpperCase()), 2000);
        setTimeout(() => reject("Error"), 5000)
    })
    // 2. return a promise
    return await transformName;
}

logName("Gustavo").then(result => {
    log("result from async function = " + result)
});


/*const getRandomUsersGenerator = co(function* (n) {
    const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`)
    return fetchRandomUsers.json();
});

getRandomUsersGenerator(10).then(response => {
    response.results.forEach(users => {
        const {gender, email} = users;
        log(`${gender} - ${email}`);
    })
}).catch(error => {
    log(error);
})*/


async function buscarUsuarios(numeroUsuarios) {

    try{
    const resultado = await fetch(`https://randomuser.me/api/?results=${numeroUsuarios}`);
    const resultadoPromise = resultado.json()
    resultadoPromise.then(response => {
        response.results.forEach(users => {
            const {gender, name: {first, last}, email} = users;
            log(`Nome: ${first} ${last}, Sexo: ${gender}, Email: ${email}`);
        })
    })
    }catch (error) {
        log(error)
    }
}

buscarUsuarios(2);

buscarUsuarios(10).then(response => {
    const {results} = response;
    results.forEach(user => {
        const {gender, name: {first,last}, email} = user;
        log(`Nome: ${first} ${last}, Sexo: ${gender}, Email: ${email}`);
    })
}).catch(error => {
    log(error);
})

const usuarios = async (n) => {
    const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${n}`)
    return fetchRandomUsers.json();

};
usuarios(10).then(response => {
    response.results.forEach(user => {
        const {gender, name: {first,last}, email} = user;
        log(`Nome: ${first} ${last}, Sexo: ${gender}, ${email}`)
    })
})