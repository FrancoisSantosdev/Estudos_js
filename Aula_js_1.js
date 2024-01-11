
let nome = 'Rafael'; //string literal
let idade = 25; // number literal
let estaAprovado = true; // boolean
let sobrenome = undefined; // Undefined
let corSelecionado = null // Redefinir um valor

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de souza',
};

console.log(pessoa)

// arrays

let familia = [26,45,50,17];
console.log(familia.length);

console.log(familia[2]);
let nomeDoColega = ['Hermes',28,'programador pleno','costa','pardo','casado','filho' ];
console.log(nomeDoColega)
console.log(nomeDoColega[3])


// Funcion
//nomear função verbo+substantivo 
//--Ex. resetarCor

let corSite = "azul";

function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade;
};

console.log(corSite);
resetaCor("vermelho"," claro");
console.log(corSite);

// função realizar uma tarefa, não entrega nada
function dizerNome(){
    console.log('Francois');
}
dizerNome();

//faz um calculo ou operação e retorna algo

function MultiplicarPorDois(valor){
    return valor* 2;
}

//console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);

console.log(resultado)


//operadores aritimeticos
let salario = 100;
//+,-,*,/,**

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);
    
//++--

let idade1 = 18;
console.log(idade--)
console.log(idade);

// operadores de atribuição

let valorTecladoGamer = 100
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
// valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer);

//operadores de igualdade
//igaldade estrita
console.log( 1 === 1);
console.log('1' === 1);

//igualdade solta
console.log ( 1==1 );
console.log ('1' == 1);

//
//operador ternario 
// @@@@@@@@@@@@ MICRO PROJETO @@@@@@@@@@@@
//tem um cliente, 100 premium, comum
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// operador logicos
// and , or , not
//
//operador logico e (&&)
// Retorna TRUE se os dois operadores forem true

//console.log(true && false)

// let mairoDeIdade = false
// let possui_carteira_de_trabalho = true;
// let podeAplicar = mairoDeIdade && possui_carteira_de_trabalho;

// console.log(podeAplicar);

// // operador logico ou (||)
// // Retornar true se um dos operandos forem true


let mairoDeIdade = false
let possui_carteira_de_trabalho = false;
let podeAplicar = mairoDeIdade || possui_carteira_de_trabalho;

console.log('pode aplicar: ',podeAplicar);

// Operador Lógico Not (!)
let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado' ,candidatoRecusado);

// Valores não boleanos
// Falsy e Truthy
// estão em Falsy 
// undefined
//null
// 0
// false
// ''
// NaN - not a Number

//Truthy

let corPersonalizada = '';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrão;

console.log(corPerfil);

