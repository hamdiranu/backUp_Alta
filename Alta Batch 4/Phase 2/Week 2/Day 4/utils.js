// Explisit
const myFunction = () => {
    console.log("belajar module export")
}

const myVariable = 3

module.exports = {myFunction,myVariable};

// Implisit
const myFunction2 = () => {
    console.log("belajar module export explisit")
}

const myVariable1 = 'alta'
module.exports = {myFunction2,myVariable1}
