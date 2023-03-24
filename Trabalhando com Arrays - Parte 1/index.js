const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// ADICIONAR ELEMENTOS PUSH

arr.push("Boromir")

// ADICIONAR ELEMENTOS NO COMEÇO DO ARRAY
arr.unshift("Boromir2")

// REMOVER ELEMENTOS ARRAY ULTIMO ELEMENTO
arr.pop()

// REMOVER ELEMENTOS DO COMEÇO DO ARRAY
arr.shift()

// indexOf
const indice = arr.indexOf('Gandalf')

// PESQUISAR POR UM ELEMENTO INCLUDES
arr.includes("Gandalf")

// CORTAR E CONCATENAR
const hobbits = arr.slice(0, 2)
const outros = arr.slice(-4)

// CONCAT
const sociedade = hobbits.concat(outros, "Boromir")

// SUBSTITUIÇÂO DOS ELEMENTOS
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")

// Interar sobre os Elementos
for (let indice = 0;  indice < sociedade.length; indice++) {
    const element = sociedade[indice]
    console.log(element + " Se encontra na posição " + indice)
}
