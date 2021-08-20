
/* IMPORTANT: Formas melhoradas de usar propriedades de objetos */
// const pricePropName = "PRICE"
//
// const calculator = (name, price) => {
//     return {
//         /* Setar uma propriedade do objeto usando lambda porem existe outro modo
//         * de se fazer a mesma coisa. Se o nome da propriedade do objeto for o
//         * mesmo que vem do parametro, entao nao eh preciso especificar por exemplo
//         * name : name */
//         // marca: name
//         name,
//         add: (n1, n2) => {
//             return n1 + n2;
//         },
//         addUpgrade(n1, n2) {
//             return n1 + n2;
//         },
//         [pricePropName.toLowerCase()] : price
//     }
// }
//
// const calc = calculator("Casio", 19.99);
// log(calc.name);
// log(calc.add(5,9));
// log(calc.addUpgrade(10,40));
// log(calc.price);

/* IMPORTANT: Desconstrucao de Arrays */
// const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];
// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

/* Exemplos de como descontruir um array */

// const [anna, mariam, joe] = names;
// log(`${anna} ${mariam} ${joe}`);

// const [anna, , joe] = names;
// log(`${anna} ${joe}`);

// const [anna, , joe, ...restOfNames] = names;
// log(`${anna} ${joe} ${restOfNames}`);


// let imprime = "";
// names.every((valor, index) => {
//     if (index === 3) {
//         return false;
//     }
//     imprime += `${valor}, `;
//     return true;
// })
//
// log(imprime);

/* IMPORTANT: Desconstrucao de Objetos */
import {log} from "../../js/logger";

const getUser = () => {
    return {
        name: 'John',
        surname: 'Doe',
        gender: 'male',
        address: {
            country: 'United States',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
                doorNumber: 22,
                street: 'LA st'
            }
        },
        age: 29
    }
};

const user = getUser();

const name = user.name;
const age = user.age;
const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

/* Desconstruindo um objeto em outro, pegando somente propriedades desejadas
* devo me referenciar ao atributo do objeto pelo nome EXATO OU criar um novo
* nome de atributo para esse novo objeto, por exemplo:
* name: theName para referenciar agora devo chamar somente theName
* ou city, mesma propriedades do objeto, devo me referenciar city*/
const {name : theName, age : theAge, address : {country : theCountry, city, postCode}} = user
const {address : {fullAddress : {doorNumber : nporta}}} = user

log(theName);
log(theAge);
log(city);
log(theCountry);
log(postCode);
log(doorNumber);
log(nporta);

/* IMPORTANT: Funcoes com parametros padronizados,
*   Como eh o mesmo nome do parametro que pretendo retornar, nao eh necessario
*   utilizar o Return E por ser somente um parametro nao precisa colocar {}.
*   Tambem eh possivel definir um VALOR PADRAO simplemente adicionando um
*   = no parametro do metodo. Por exemplo (salario, bonus = 0)*/
const calculatePay = (yearSalary, bonus = 0) => yearSalary + bonus;

/* Exemplo funcao recebendo salario + objeto com valor padrao de bonus */
const pagamento = (salario, bonus = {
    bonusTime: 0,
    bonusEmpregado: 0
}) => {
    return salario + bonus.bonusEmpregado + bonus.bonusTime;
};

log(calculatePay(13000,2000))

log(pagamento(35000,{bonusEmpregado: 4500, bonusTime: 6200}));