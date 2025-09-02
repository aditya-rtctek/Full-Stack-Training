let globalVar = "global";

function scopeEg() {
    let funcVar = "scoped func";
    if (true) {
        let blockVar = "scoped block";
        console.log("block Scope:", blockVar);
    }
    console.log("function Scope:", funcVar);
    console.log("global Scope:", globalVar);
}
scopeEg();

function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        return counter;
    };
}
const increment = outer();
console.log("closure eg:", increment());
console.log("closure eg:", increment());

let arr = [10, 20, 30];
arr.push(40);
arr.shift();
let doubled = arr.map(x => x * 2);
console.log("original array:", arr);
console.log("doubled array:", doubled);

let person = {
    name: "aditya",
    age: 25,
    greet() {
        return `hello, my name is ${this.name}`;
    }
};
console.log(person.greet());

setTimeout(() => console.log("setTimeout (macro task)"), 0);
