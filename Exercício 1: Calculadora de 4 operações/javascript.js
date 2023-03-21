let x = prompt("Informe o primeiro número: ")
let y = prompt("Informe o segundo número: ")

const entrada = parseFloat(x)
const entrada2 = parseFloat(y)

const soma = x + y
const subtracao = x - y
const multi = x * y
const divi = x / y

alert(
    "Resultados\n" +
    "\nSome: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multi +
    "\nDivisão: " + divi
)
