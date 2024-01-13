//Mini-Projeto 9
// Contador de Asterísticos
//
// Cirar função que exibe a quantidade de *
// que aquela linh possue

// exibirAsteristicos(5);

// function exibirAsteristicos(linhas) {
//     for(let i = 1; i <= linhas; i++ ) {
//         let asteristicos = '*'. repeat(i);
//         console.log(asteristicos);
//     }

// }  //maneira 1


// exibirAsteristicos(5);

// function exibirAsteristicos(linhas) {
//     for (let i = 1; i <= linhas; i++) {
//         let linhaAsteristicos = '';
//         for (let j = 1; j <= i; j++) {
//             linhaAsteristicos += '*';
//         }
//         console.log(linhaAsteristicos);
//     }
// } // maneira 2 



 exibirAsteristicos(5);

function exibirAsteristicos(linhas) {
    // let padrão = '';
    // for(let linha = 1; linha <= linhas; linha++){
    //     padrão += '*';
    //     console.log(padrão);
    // }
    for(let linha = 1; linha <= linhas; linha++) {
        let padrão = '';
        for(let i = 0; i < linha; i++) {
            padrão += '*';
        }
            console.log(padrão);
        

    }
}


/////////////
// Mini-Projeto 10
// Números Prímos

// Criar função para mostrar os números prímos

// Primos 
// Compostos

// Ex: 10,11
// exibirNumerosPrimos(15);

// function exibirNumerosPrimos(limite){
//     for(let numero = 2; numero <= limite; numero++){
//         let ehPrimo = true;

//         for (let divisor = 2; divisor < numero; divisor++){
//             if(numero % divisor === 0) {
//                 ehPrimo = false;
//                 break;
//             }
    
//         }
//             if( ehPrimo) console.log(numero);

//     }
// }



exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
       if(NumeroPrimo(numero)) console.log(numero);    
    }
}

function NumeroPrimo(numero) {
for (let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0) {
                return false;
                
            }
    
        }
        return true;
}

//____________________________________________________

// Factory Funcitions
// Javascript Aula 34 - Factory functions (Função de Fábrica)
const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria: 5000,
    ligar : function() {
            console.log("Fazendo ligação...")
    }
}

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone',5.5,5000);
console.log(celular1);

// Constructor Function

function Celular(marcaCelular,tamanhoTela,capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo Ligação...");
    }
}

const celular2 = new Celular('asus',5.5,5000);
console.log(celular);