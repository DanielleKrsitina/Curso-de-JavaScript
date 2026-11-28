// // 1 - variáveis
// let nome = "Danielle"
// console.log(nome)

// nome = "Danielle Ferreira"

// console.log(nome)

// const idade = 31;

// console.log(idade)

// idade = 32;

// console.log(typeof nome)
// console.log(typeof idade)

// 2 -  mais sobre variáveis
// let 2teste = "inválido"
// let @teste = "inválido"

// let a = 10, b = 20, c = 30

// console.log(a, b, c)

// const nomecompleto = "Danielle Cristina"

// const nomeCompleto = "Dani Cristina"

// console.log(nomecompleto)
// console.log(nomeCompleto)

// símbolos permitidos para criação de variáveis
// let _teste = "ok"
// let $teste = "okay"

// console.log(_teste, $teste)

// 3 - prompt 
// const age = prompt("Digite a sua idade: ")

// console.log(`Você tem ${age} anos.`)

// 4 - Alert
// alert("testando")

// const z = 10

// alert(`O número é ${z}`)

// 5 -  Math
// console.log(Math.max(5,7,8,12))
// console.log(Math.floor(5.14))
// console.log(Math.ceil(5.15))

// 6 - console
// console.log("teste")
// console.error("Erro!")
// console.warn("Aviso!")

//  7 - if
// const m = 10

// if(m > 5) {
//     console.log("M é maior que 5!")
// }

// const user = "Dani"
// if( user === "Dani") {
//     console.log("Os dois valores são iguais")
// }


// if( user === "Maria") {
//     console.log("Os dois valores são iguais")
// }

// console.log( user === "Dani", user === "Maria")

// 8 - else
// const loggedIn = false

// if(loggedIn) {
//     console.log("Está autenticado")
// } else{
//     console.log("Não está autenticado!")
// }

// const q = 10
// const w = 25

// if(q > 5 && w > 20) {
//     console.log("Números mais altos")
// } else {
//     console.log("Os números não são mais altos")
// }

// 9 - else if 
// if(1 > 2) {
//     console.log("Teste")
// } else if(2 > 3) {
//     console.log("Teste 2")
// } else if(5 > 1) {
//     console.log("Agora sim!")
// }

// const userName = "Danielle"
// const userAge = 28;

// if(userName === "Maria") {
//     console.log("Bem vinda Maria!")
// } else if(userName === "Danielle" && userAge === 28) {
//     console.log("Olá Danielle, você tem 28 anos")
// } else {
//     console.log("Nehuma condição aceita!")
// }

// 10 - while
// let p = 0

// while(p < 5){
//     console.log(`Repetindo ${p}`)
//     p = p + 1
// }

// loop infinito
// let x = 10

// while(x > 5){
//     console.log(`Imprimir ${x}`)
// }

// 11 - do while 
// let o = 10

// do {
//     console.log(`valor de o: ${0}`)
//     o--;
// } while (0 > 1)


// 12 - for 
// for(let t = 0; t < 10; t++) {
//     console.log("Repetindo algo...")
// }

// let r = 0

for(r; r > 0; r = r - 1){
    console.log(`O r está diminuindo ${r}`)
}

// 13 - break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if(g === 12) {
        console.log("O g é 12!")
        break
    }
}