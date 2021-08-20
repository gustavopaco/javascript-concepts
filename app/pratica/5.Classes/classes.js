
/* IMPORTANT: Criando Classe no javascript */
import {log} from "../../js/logger";

class Animal {
    constructor(name, age, color) {
        log(`${name} is an animal and was created`);
        this.name = name
        this.age = age;
        this.color = color;
    }

    static iAmStaticMethod() {
        log("I'm a static method inside of an Animal Class");
    }

    eat() {
        log(`${this.name} is eating`);
    }

    sleep() {
        log(`${this.name} is sleeping!`);
    }

    wakeUp() {
        log(`${this.name} is waking up!`)
    }

    walk() {
        log(`${this.name} can walk`);
    }

    logAge() {
        log(`${this.name} has ${this.age} years old`);
    }

    logColor() {
        log(`${this.name} has ${this.color} skin`)
    }
}

/* IMPORTANT: Heranca do javascript */
class Dog extends Animal {
    constructor(name,age,color,raca) {
        super(name,age,color);
        this.raca = raca;
    }

    logRaca() {
        log(`${this.name} is a ${this.raca}`)
    }
}

/* Heranca de Gato*/
class Cat extends Animal {
    constructor(name,age,color) {
        super(name,age,color);
    }
}

Animal.iAmStaticMethod();

const bob = new Animal("bob", 4, "black");
bob.logAge();
bob.logColor();
bob.eat();
bob.sleep();
bob.wakeUp();
bob.walk();

const marshall = new Animal("marshal", 2, "yellow");
marshall.logAge();
marshall.logColor();
marshall.eat();
marshall.sleep();
marshall.wakeUp();
marshall.walk();

const pitucho = new Dog("Pitucho",3, "Black","Rottweiler");
pitucho.logRaca();
pitucho.logAge();
pitucho.logColor();
pitucho.eat();
pitucho.sleep();
pitucho.wakeUp();
pitucho.walk();

const josh = new Cat("Josh", 1, "White");
josh.logAge();
josh.logColor();
josh.eat();
josh.sleep();
josh.wakeUp();
josh.walk();