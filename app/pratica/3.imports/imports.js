/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {log, logTitle} from 'logger';
/* your imports */
/*IMPORTANT: Importando Classes do projeto ou somente alguns metodos*/
// import * as Math from './Math';
// import {add,division, PI} from "./Math";
// import Animal from "./Animal";
logTitle('Title')
/* coding examples */

/* IMPORTANT: Named Export e Import var,class,function.
*   From another Javascript File.
*   Permite importar e exportar multiplos valores com classes ou metodos */
log("Utilizando classe Math com seus metodos");
log(Math.add(2,2));
log(Math.subtract(5,6));
log(Math.division(30,5));
log(Math.multiply(3,4));
log(Math.PI);

log("");
log("Utlizando diretamente metodos da classe Math")
log(add(5,9));
log(division(90,3));
log(PI);

/* IMPORTANT: Default Export e Import var,class, function.
*   Permite importar e exportar uma unica classe, metodo ou variaveis,
*   em seu escopo. NORMALMENTE utilizdo para importar Classes e Objetos*/
const animal = new Animal();
log(animal.getClassType());