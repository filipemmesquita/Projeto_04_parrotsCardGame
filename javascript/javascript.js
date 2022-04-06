let cardAmount =0;
const cards=[];
let turnedCards =0;
let moves=0;
let confirmedCards=0;
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
        newCard.setAttribute("onclick","turnCard(this)" )
        //o span contendo cards[i] serve para armazenar qual imagem contida pelo card de forma facil de acesso
        newCard.innerHTML=`<div class="front-face face"><img src="img/front.png" /></div>
        <span>${cards[i]}</span>
        <div class="back-face face"><img src="img/${cards[i]}.gif" /></div>`;
        document.querySelector(".content").appendChild(newCard);


    }
}

function turnCard(selectedCard){
    //turned vira as cartas e as marca para serem comparadas
    if(selectedCard.classList.contains("turned")==false){
    selectedCard.classList.add("turned");
    turnedCards++;
    moves++;
    }

    //este if compara as duas cartas marcadas
    if(turnedCards>=2){
        //selected pair é as duas cartas atualmente selecionadas
        let selectedPair= document.querySelectorAll(".turned");

        //checa se as duas cartas são iguais
        cardIDs=document.querySelectorAll(".turned span");
        if(cardIDs[0].innerHTML==cardIDs[1].innerHTML){
            selectedPair.forEach(confirmCard);
        }
        else{
             setTimeout(function() {selectedPair.forEach(unturn)}, 1000);
        }
        turnedCards=0;
    }



}
function unturn(card){
    card.classList.remove("turned");
}

//esta função é chamada quando duas cartas são iguais, as faz permanecer viradas para cima e checa se o jogo acabou
function confirmCard(card){
    card.classList.add("confirmed");
    card.classList.remove("turned");
    card.removeAttribute("onclick");
    confirmedCards++;

    if(confirmedCards==cardAmount){
        setTimeout(function() { alert(`Você ganhou em ${moves} jogadas!`)}, 500);
    }

}