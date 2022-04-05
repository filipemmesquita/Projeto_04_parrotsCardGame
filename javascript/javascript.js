let cardAmount =0;
function initializeParrots(){
    cardAmount = prompt("Com quantas cartas quer jogar? escolha um número par entre 4 e 14")
    while((cardAmount%2!=0)||(cardAmount<4)||(cardAmount>14)||(Number.isNaN(cardAmount)))
    {
        cardAmount=prompt("Valor inválido! Por favor escolha um número de cartas par entre 4 e 14!")
    }
    console.log(cardAmount);
}