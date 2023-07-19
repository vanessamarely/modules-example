import { sum } from "./function.js";

const sumar = sum(1,4);
const name = 'John';

function sayHello(name) {
    console.log('Hello ' + name);
}

console.log("esto es una suma ", sumar);
console.log('Hello World');

export { name, sayHello }