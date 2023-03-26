function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}
dobro(x)

function dizerOla(nome = "") {
    alert("Olá, " + nome + "!")
}
dizerOla("Isaac")
dizerOla()

function soma(a, b) {
    alert("Resultado da soma: " + (a + b))
}
soma(7,6)
soma(1, 1)

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome,
        email,
        senha,
        tipo,
    }
    console.log(usuario)
}
criarUsuario("Gabriel Santos", "gabriel@gmail.com", "teste123", )
