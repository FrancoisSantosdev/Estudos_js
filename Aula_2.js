// // Micro_Projeto_Trocando_Variaveis

// let a = "Azul"
// let b = "vermelho"

// let c = a
// a = b
// b = c


// console.log(a)
// console.log(b)

// // Operadosres condicionais if/else

// // Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// // Se estiver entre 12:00 até 18:00 : BOa tarde!
// // Caso contrário : Boa noite!

// let hora = 10

// if (hora > 6 && hora < 12) {
//     console.log("Bom dia!");
// }
// else if (hora > 12 && hora < 18) {
//     console.log("Boa tarde!")
// }
// else {
//     console.log("Boa noite!")
// }

// /////
// //Switch Case
// let permissao; // comum, gerente, diretor

// permissao = 'comum';

// switch (permissao) {
//     case 'comum':
//     console.log('usuário comum');
//     break;

//     case 'gerente':
//     console.log('usuário gerente');
//     break;

//     case 'diretor':
//     console.log('usuário diretor');
//     break;
    
//     default:
//     console.log('Usuário não reconhecido!');
// }

// /////
// // Laços/Loop For

// // console.log('Estou aprendendo!');
// // console.log('Estou aprendendo!');
// // console.log('Estou aprendendo!');
// // console.log('Estou aprendendo!');
// // console.log('Estou aprendendo!');

// // 1.For
// // 2.while 
// // 3.Do..while
// // 4.For..In
// // 5.For..of

// // for(let i = 0; i < 5; i++) {
// //     console.log('Estou aprendendo!',i);
// // }


// // for(let i = 1; i <= 5; i++) {
// //     console.log(i);
// // }

// // for(let i = 5; i >= 1; i--) {
// //     console.log(i);
// // }


// // for(let i = 1; i <= 5; i++) {
// //     if(i % 2 !== 0) { // modulos
// //         console.log(i);
// //     }
// // }


// // for(let i = 5; i >= 1; i--) {
// //     if(i % 2 !== 0) { // modulos
// //         console.log(i);
// //     }
// // }


// // While loop
// // let i = 5;

// // while ( i >= 1) {
// //     if( 1 % 2 !== 0){
// //         console.log(i);
// //     }
// //     i--;
// // }

// //Laço Do..While

// // let i = 0;
// // do {
// //     console.log('Digitando!',i);
// //     i++;
// // } while (i < 10)

// // //  For..in

// const pessoa1 = {
//     nome: 'François' ,
//     idade: 28
// };
// // key-value

// for(let chave in pessoa1) {
//     console.log(chave,pessoa1[chave]);
// }

// const cores = [ 'Vermelho','Azul','Verde'];

// for (let indice in cores) {
//     console.log(indice,cores[indice])
// }