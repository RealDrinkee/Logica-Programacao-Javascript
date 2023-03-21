const idade = prompt("Informe sua idade: ")

if (idade > 18){
    console.log("Você e maior de idade!")
}else {
    alert("Você é menor de idade!")

    if (idade < 12) {
        alert("Você é criança!")
    }
}

if (6 !== 6) {
    console.log("Verdadeiro")
}else {
    console.error("FALSO")
}


const resultado = (6 === 6) ? "Verdadeiro" : "Falso"
