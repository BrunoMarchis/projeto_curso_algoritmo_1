/*
passou := falso
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a nota 01 do aluno: ")
   leia(nota01)
   escreval("Digite a nota 02 do aluno: ")
   leia(nota02)
   media := (nota01 + nota02) / 2
   escreva(media)

   se media >= 5 entao
      passou := verdadeiro

   se ( passou ) && ( media >=5 || media <= 7) entao
     escreval(" Aprovado!", nome)
   senao
     escreval(" Reprovado!", nome)
   fimse
   */

var nome, nota01, nota02, nota03, nota04, nota05, media, passou;

passou = false;

nome = prompt("Digite o nome do Aluno: ")
nota01 = prompt("Digite a nota 01 do Aluno: ")
nota02 = prompt("Digite a nota 02 do Aluno: ")
nota03 = prompt("Digite a nota 03 do Aluno: ")
nota04 = prompt("Digite a nota 04 do Aluno: ")
nota05 = prompt("Digite a nota 05 do Aluno: ")

media = (parseInt(nota01) + parseInt(nota02) + parseInt(nota03) + parseInt(nota04) + parseInt(nota05)) / 5;
alert((parseFloat(media) + " Media"))


if(media >= 5)
    passou = true;

if(passou && (media >= 7 && media <=9))
    alert("Aprovado!: " + nome)
else
    alert("Reprovado!: " + nome)