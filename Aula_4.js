// Mini-Projeto 4
// Medidor de Velocidade
// 
// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Match.Floor()
// caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(140);

function verificarVelocidade(velocidade) {
    const velocidadeMáxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMáxima )
        console.log('ok');
    else{
        const pontos = Math.floor((velocidade - velocidadeMáxima) / kmPorPonto );
        if( pontos >= 12)
            console.log('Carteira Sustensa!');
        else 
            console.log('Pontos',pontos);
    }
}

///////////////////////////////
// Mini-Projeto 5
// Par ou Impar

// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar

// exibirTipo(10);
// function exibirTipo(limite) {
//     if (limite% 2===0)
//         console.log( 'Par',exibirTipo);
//     else
//         console.log ('Impar',exibirTipo);

// } errado

exibirTipo(5);
function exibirTipo(limite){
    for (let i = 0; i <= limite; i++){
        if ( i % 2===0)
        console.log( i,'Par');
     else
        console.log (i,'Impar');
    }
}

////////////////////////////
// Mini-Projeto 6
// Encontre o string
//
// Criar um método para ler propriedades de um objeto e 
// exibir somente as propriedades do tipo string que estão nesse objeto


const filme = {
    Titulo : 'Vingadores',
    Ano : 2018,
    Diretor : 'Robim',
    Personagem : 'Thor'
}

// exibirPropriedades(filme);
// function exibirPropriedades(obj){
//    for(let chave in filme){
//     if (filme = String)
//         console.log()
//    }
// }   errado


exibirPropriedades(filme);
function exibirPropriedades(obj){
   for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
   }




