import {coroutine as co} from 'bluebird';

logTitle('Title')
/* coding examples */

/* IMPORTANT: GENERATORS sao gerenciadores de chamadas recursivas e Asyncronas
*   utilizando Promises feitas em outras APIs,
*   fazendo com que o codigo fique muito mais facil de compreender*/
const getData = function* () {
    yield 1;
    yield "hello";
    yield true;
    yield {name: "Alex"};
    return "Im done"
}

const numbersGen = getData();

log(numbersGen.next().value)
log(numbersGen.next().value)
log(numbersGen.next().value)
log(JSON.stringify(numbersGen.next().value))
log(numbersGen.next().value)

const getNumbers = function* (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        yield numbers[i];
    }
}
const getNumbersGen = getNumbers([1,2,3,4,5]);

const interval = setInterval(() => {
    const next = getNumbersGen.next();

    if (next.done) {
        log("This generator is done");
        clearInterval(interval);
    }else {
        const number = next.value;
        log(number);
    }
}, 1000)


/*const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => {
            log(JSON.stringify(randomUsers.results.length));
            randomUsers.results.forEach(user => {
                const {gender, email} = user;
                log(`${gender} - ${email}`);
            });
        })
    });
}

getRandomUsers(5);*/


const getRandomUsersGenerator = co(function* (n) {
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
})