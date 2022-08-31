
//exercicio A
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log (frase) 

//exercicio B
const frasemotificada = frase.replace ("verde", "rosa") . replace ("azul", "laranja")
console.log (frasemotificada)

//exercicio C
let possuiverde = frasemotificada.includes("verde")
let possuiazul = frasemotificada.includes ("azul")
console.log ( `possui a cor verde? ${possuiverde} \n possui a cor azul? ${possuiazul} `)

///