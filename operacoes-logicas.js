

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