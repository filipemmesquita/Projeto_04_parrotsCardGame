let cardAmount =0;
const cards=[];
function initializeParrots(){
    cardAmount = prompt("Com quantas cartas quer jogar? escolha um número par entre 4 e 14")
    //checagem para ver se o numero é valido
    while((cardAmount%2!=0)||(cardAmount<4)||(cardAmount>14)||(Number.isNaN(cardAmount)))
    {
        cardAmount=prompt("Valor inválido! Por favor escolha um número de cartas par entre 4 e 14!")
    }
    //este contador extra serve para garantir que o array cards estará preenchido com pares de numeros
    let x=0;
    for(let i=0;i<cardAmount;i+=2){
    cards[i]=x;
    cards[i+1]=x;
    x++;
    }
    //agora para randomizar o array cards
    cards.sort(comparador); 


    // Esta função randomiza um array
    function comparador() { 
	return Math.random() - 0.5; 
    }

    for(i=0;i<cardAmount;i++){
    newCard =document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML=`<div class="front-face face"><img src="img/front.png" /></div><div class="back-face face><img src="${cards[i]}.gif" /></div>`;
        document.querySelector(".content").appendChild(newCard);
        console.log(i);
        console.log(newCard);

    }
}