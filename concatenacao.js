/*
// Seção de Declarações das variáveis 
nome: caractere
numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite o Nome: ")
leia(nome)
escreval("Digite o Número: ")
leia(numero)

escreval(nome, " : ", numero)
*/
var nome, numero;
nome = prompt("DIGITE O SEU NOME: ")
numero = prompt("DIGITE O SEU NÚMERO: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero