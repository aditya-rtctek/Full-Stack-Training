let userAge = 25
const userName = "aditya"
var isMale = true

let scores = [80, 90, 70]

let person = {
    firstName: userName,
    age: userAge,
    gender: isMale ? "male" : "female",
    scores: scores
}

let passedSubs = 2
let totalSubs = 3
let percentage = (passedSubs / totalSubs) * 100

function greet(user) {
    return `Hello, ${user.firstName} you are ${user.age} years old.`
}

const calculateAvg = (marks) => {
    let total = 0
    for (let mark of marks) {
        total += mark
    }
    return total / marks.length
}

console.log(greet(person))
console.log("gender", person.gender)
console.log("percentage of subs passed", percentage + "%")
console.log("ave score", calculateAvg(person.scores))