// Operador For..of
const cores = [ 'Vermelho','Azul','Verde'];

for(let cor of cores){
    console.log(cor);
}

// 
// Exercicio :
//  Escreva uma função que usa 2 números e retorna o maior entre eles

let valorMaior = max(5,9)
console.log(valorMaior);

// function max(numero1,numero2) {
//     if(numero1 > numero2)
//        return numero1;
//     else return numero2;
// }


function max(numero1,numero2) {
    return numero1 > numero2 ? numero1: numero2 ;
}

//  fizz buzz compara valores e tem um retorno no valor de entrada
// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada
// Não é um número => 'Não é um número'
const resultado = fizzBuzz(30);
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'Não é um número'
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;
               
}