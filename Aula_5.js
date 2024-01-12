// Mini-Projeto 7
// Mutiplos de 3 e 5
//Criar função de soma que retorna a 
// soma de todos os mutiplos de 3 a 5

//mutiplos de 3 em 10
//3,6,9
// mutiplos de 5
//5,10

//Somando os multiplos
// armazenar os multiplos de 3
//armazenar os multiplos de 5
// somar os dois

// const multiplos_3 = [3,6,9]
// const multiplos_5 = [5,10]

// somar(10);
// function somar(limite) {
//     console.log(multiplos_3 + multiplos_5);


// } errado


somar(10);
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (i = 0; i <= limite; i++){
            if(i % 3 === 0)
            multiplosDe3 += i;
            if(i % 5 === 0)
            multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}

//////////////////////////////////

// Mini-Projeto 8
//Média de Nota Escolar

//Exercício Nota Escolar
// Obter a média a partir de uma array

//0-59 : F
//60-69 : D
//70-79 : C
//80-89 : B
//90-100 : A
// const array = [70,70,80];

// console.log(mediaDoAluno(array));

// function mediaDoAluno(notas) {
//     let soma = 0;
//     for (let nota of notas){
//             soma += nota;
//     }
//     const media = soma/(notas.length);

//     if (media < 59) return 'F';
//     if (media < 69) return 'D';
//     if (media < 79) return 'C';
//     if (media < 89) return 'B';
//     return 'A';

// }

// mais simplificado

const array = [85,70,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas)
    
    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';

}
function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
            soma += valor;
    }
    return soma/(array.length);

}

