/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {log, logTitle} from 'logger';
/* your imports */
/*IMPORTANT: Importando Classes do projeto ou somente alguns metodos*/
logTitle('Title')
/* coding examples */

/* IMPORTANT: Escopo de variaveis
*   var = existe em qualquer lugar do projeto, inclusive dentro e fora de um for(var i = 0)
*   let = so existe no escopo do bloco especifico, so existe dentro de um for(let i = 0)
*   const = variavel do tipo estatica, nao eh possivel alterar seu valor ao longo do codigo */
// for (var i = 0; i < 10; i++) {
//     log(i);
// }
//
// log(i); /* Funcao funcionando, variavel existe mesmo fora do for, sem sentido */
//
// for (let i = 0; i < 10; i++) {
//     log(i);
// }
//
// log(i); /* <- Erro ao chamar funcao, variavel i nao existe */

// const person = {};
// /* Setando valor direto no objeto, 2 formas de criar atributo e valor */
// person["name"] = "Maria";
// person.idade = 20;
//
// log(Object.keys(person));
// log(Object.values(person));
//
// const array = [];
// array.push("Estou na posicao 0", "Estou na posicao 1");
// log(array);

/* IMPORTANT: Templates literais */
// const nome = "Anna";
// const pais = "Canada";
// const idade = "24";
//
// log("Nome: " + nome + ", Pais: " + pais + ", Idade = " + idade);
// log(`Nome: ${nome}, Pais: ${pais} e Idade: ${idade}`);
// log(`Nome: ${nome.length}, Pais: ${pais.toUpperCase()} e Idade: ${idade.bold()}`);

/* IMPORTANT: Operadores de concatenacao e divisao de Arrays */
// const arrayOne = ["Maria", "Ana", "Alex"];
// const arrayTwo = ["Gustavo", "Augusto", "Raquel"];
//
// const concatArray = [...arrayOne, ...arrayTwo];
// log(concatArray);

// concatArray.forEach(function (name) {
//     log(name);
// })

// concatArray.forEach(name => {
//     log(name);
// })

// const name = "Marian";
// const nameToArray = [...name]; /* Adicionando a cada posicao do Array M-A-R-I-A-N */
// nameToArray.push("Gustavo"); /* Adicionando a ultima posicao do Array Gustavo */
//
// nameToArray.forEach((n, i) => {  /* For each eh possivel passar objeto(n) + index(i) */
//     log(n);
// })
//
// const addNumbers = function (n1, n2, n3) {
//     return n1 + n2 + n3;
// }
//
// const numbers = [1,5,9];
//
// // const addition = addNumbers(numbers[0], numbers[1], numbers[2]); /*Codigo ruim*/
// const  addition = addNumbers(...numbers);
//
// log(addition);

/* IMPORTANT: Operadores de concatenacao e divisao de Arrays entre OBJETOS */
// const endereco = {cidade: "LA" , pais: "USA", cep: "LA40"};
// const pessoa = {nome: "Gustavo", sobrenome: "Paco"};
//
// const person = { /* Nao eh eficiente*/
//     cidade: endereco.cidade,
//     pais: endereco.pais
// }
//
// const person1 = {...nome, ...endereco};
// log(JSON.stringify(person1, null, 1));

/* IMPORTANT: Funcoes com Lambda */
// /*const hello = function() {
//     const es6 = 'ES6';
//     return `Hello ${es6}`;
// };*/
//     /* 1 - Lamba */
// const hello = () => {
//     const es6 = 'ES6';
//     return `Hello ${es6}`;
// };
//
// // /*const powers = [1,2,3,4,5].map(function(number, index) {
// //     return Math.pow(number, index);
// //  });*/
//
//     /* 2 - Lambda*/
// const powers = [1,2,3,4,5].map((number, index) => {
//     return Math.pow(number, index);
// })
//
// // /*const add = function(n1, n2) {
// //     return n1 + n2;
// //  };*/
//
//     /* 3 - Lambda */
// const add = ((n1, n2) => {
//     return n1 + n2;
// })
//
// // /*const milesToKm = function(miles) {
// //     return miles * 1.60934;
// //  };*/
//
//     /* 4 - Lambda */
// const milesToKm = ((miles => {
//     return miles * 1.60934;
// }))
//
// log(hello());
// log(powers);
// log(add(100,100));
// log(milesToKm(100));

/* IMPORTANT: Referencia a objeto e suas propriedades usando This */
// const pessoa = {
//     nome: "Gustavo",
//     cars: ["Ferrari", "Lambo"],
//     toString: function () {
//         // log(`${this.nome} has ${this.cars}`);
//         this.cars.forEach(carro => {
//             log(`${this.nome} has ${carro}`);
//         })
//     }
// }
//
// pessoa.toString();