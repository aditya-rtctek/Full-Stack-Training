const add = (a, b) => a + b;
console.log("arrow func", add(5, 7));

const person = { name: "aditya", age: 25, city: "bbsr" };
const { name, age } = person;
console.log("destruct", name, age);

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log("spread", newNums);

function sum(...values) {
    return values.reduce((acc, val) => acc + val, 0);
}
console.log("rest op", sum(1, 2, 3, 4, 5));

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/hello") {
        res.write("hello world");
        res.end();
    } else if (req.url === "/time") {
        res.write(new Date().toString());
        res.end();
    } else {
        res.write("not found");
        res.end();
    }
});

server.listen(5000);
console.log("5000 server");