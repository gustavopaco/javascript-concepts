/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {log, logTitle} from 'logger';
/* your imports */
logTitle('Title')
/* coding examples */

/* IMPORTANT: Variaveis */
var name = "Maria Jones";

var age = 18;

var hasDriverLicense = true;

var empty = undefined; /* Nao existe nenhum valor dentro dessa variavel */

log(name + " type = " + typeof name);
log(age + " type = " + typeof age);
log(hasDriverLicense + " type = " + typeof hasDriverLicense);
log(empty + " type = " + typeof empty);

/* IMPORTANT: Objetos */
var person = {
    name: "Johnny Dep",
    age: 21,
    hasDriverLicense: false,
    dateOfBirth: "01/01/2000",
    address: {
        firstLine: "Rua X",
        postCode: "30590253",
        country: "Brazil"
    }
};

/* IMPORTANT: .JsonObject() values */
log(JSON.stringify(person));
log(person.name);
log(person.age);
log(person.hasDriverLicense);

    /*IMPORTANT: toString(), imprime um Array de String */
log(Object.values(person));
log(JSON.stringify(person));
log(Object.values(person));

/* IMPORTANT: Arrays */
var name = "Alex";
var names = ["Alex", "Maria", "John", "Gustavo"];
log(names);
log(names[2]);
log(names.length);

/* IMPORTANT: Loops(Repeticoes) */
for (var n of names) {
    log(n);
}

names.forEach(x => {
    log(x);
})

var count = 0
names.forEach(x => {
    log(count + " - " + x);
    count++;
})

names.forEach(function (n, index) {
    log(index + " - " + n);
})

/* ======================================== */

var persons = [
    {name: "Alex", age: 22}, {name: "Maria", age: 30}
];

for (var i = 0; i < persons.length; i++) {
    log(Object.values(persons[i]));
    log(JSON.stringify(persons[i]));
}

var number = 0;
while (number < 5) {
    number++;
    if (number < 5) {
        continue;
    }
    log("Position - " + number + ": while is running");
}

var i = 0;
do {
  log(i);
  i++;
}while (i < 7);

/* IMPORTANT: Operacoes Aritmetica */
var adicao = 2 + 2;
var subtracao = 3 - 90;
var divisao = 10 / 5;
var multiplicacao = 3 * 30;
var mod = 7 % 2;

log(adicao);
log(subtracao);
log(divisao);
log(multiplicacao);
log(mod);

/* IMPORTANT: Funcoes(Metodos) */
function calcularMedia(n1, n2) {
    log("addNumbers");
    log((n1 + n2) / 2);
}

calcularMedia(2,6);

function somar(n1, n2) {
    return n1 + n2;
}

log(somar(10,25));

    /* ======================================== */
var person = {name: "Gustavo", age: 20}
log(Object.keys(person));
log(Object.values(person));

log("James Bond".toLowerCase());
log("James Bond".toUpperCase());
log("James Bond".startsWith("James"));
log("James Bond".endsWith("Bond"));

    /* IMPORTANT: IF */
var person = {
    name: "Ana",
    age: 30
}

if (person.age >= 18) {
    log(person.name + " is an adult");
} else if (person.age === 17){
    log(person.name + " is about to be an adult");
}else {
    log(person.name + " is not an adult");
}

    /* IMPORTANT: SWITCH Case */
switch (true) {
    case (person.age === 17):
        log(person.name + " is about to be an adult");
        break;
    case (person.age >= 18):
        log(person.name + " is an adult");
        break;
    default:
        log(person.name + " is not an adult");
        break;
}

switch (new Date().getDay()) {
    case 4 :
        log("Thursday: " + new Date().getDate());
        break;
    default:
        log("we dont know" + new Date().getDate());
}

    /* IMPORTANT: Comparacao e Operadores Logicos */
log("Operadores comparacao");
log(10 === 10);
log(10 < 10);
log(10 <= 10);
log(10 > 10);
log(10 >= 10);
log(10 !== 10);
log(10 !== 11);

log("Operadores Logicos");
log("Operador AND");
log(10 === 10 && 20 === 20 && 100 === 100);
log(10 === 10 && 20 !== 20);

log("Operador OR")
log(10 === 10 || 20 === 30);
log(10 === 10 || 20 !== 20);

log("Operador NOT");
log(!(10 === 10));
log(!(10 === 20));

if (!(10 === 20)) {
    log("If statement was executed");
}

    /* IMPORTANT: Coercao( === ou == ) deve se utilizar (===).
        Nao faz diferenca ('' ou "") e (colocar ; ou nao colocar) */
log("Tipo de Coercao");
log("");
log(">>>>> With Type Coercion <<<<<");
log(typeof 0 + " " + typeof false);
log(0 == false);

log(typeof "0" + " " + typeof false);
log(0 == false);

log(typeof 1 + " " + typeof "1");
log(1 == "1");

log(">>>>> Without Type Coercion <<<<<<");
log(typeof 0 + " " + typeof false);
log(0 === false);

log(typeof "0" + " " + typeof false);
log(0 === false);

log(typeof 1 + " " + typeof "1");
log(1 === "1");

    /* IMPORTANT: Map | Filter | Reduce, usado pelo Frameworks JS */
log("[].map");
log("Map - Percorre o array e para cada posicao do array " +
    "pode transformar o valor da posicao N em um novo valor");

var map = [1,2,3,4,5].map(function (n) {
    return n * 2;
});

log(map);

log("");
log("[].filter");
log("Filter - Percorre o array filtrando cada posicao N retornando" +
    "elementos onde alguma condicao feita seja atendida");

var filter = [1,2,3,4,5].filter(function (n) {
    return n % 2 === 0;
});

log(filter);

log("");
log("[].reduce");
log("Reduce - Percorre o array guardando o valor do resultado no" +
    "accumulator nesse caso soma todos elementos do array")
var reduce = [1,2,3,4,5].reduce(function (accumulator, current) {
    log("Accumulator: " + accumulator);
    log("Current: " + current);
    log("");
    return accumulator + current;
});

log(reduce);

    /* IMPORTANT: Callback eh um metodo que eh passado no parametro de
    *   outro metodo e eh executado em algum momento quando ele for chamado
    *   ele retorna para o metodo principal fazendo alguma coisa */
function callbackExample(name, callback) { /* 2,II- recebendo nome, funcao callback*/
    log(callback(name)); /* 3,III- retornando = Ola Mundo Gustavo*/
}

var callback = function (name) { /* 4- Passando parametro 'Gustavo Paco' aqui*/
    return "Hello " + name; /* 5- retornando =  Hello Gustavo Paco*/
}

callbackExample("Gustavo Paco", callback); /* 1- Chamado aqui */

callbackExample("Gustavo", function (name) { /* I,IV- Novo jeito */
    return "Ola Mundo: " + name;
});