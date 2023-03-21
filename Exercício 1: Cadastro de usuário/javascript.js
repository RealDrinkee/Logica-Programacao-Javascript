let name = window.prompt("Qual seu nome?")
let lastName = window.prompt("Qual seu sobrenome? ")
let study = window.prompt("Campo de estudo?")
let year = window.prompt("Ano de nascimento?")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + name + " " + lastName +
    "\nCampo de estudo: " + study +
    "\nIdade: " + (2023 - year)
)
