let cardAmount =0;
const cards=[];
function initializeParrots(){
    cardAmount = prompt("Com quantas cartas quer jogar? escolha um número par entre 4 e 14")
    //checagem para ver se o numero é valido
    while((cardAmount%2!=0)||(cardAmount<4)||(cardAmount>14)||(Number.isNaN(cardAmount)))
    {
        cardAmount=prompt("Valor inválido! Por favor escolha um número de cartas par entre 4 e 14!")
    }

    for(let i=0;i<cardAmount;i++){
    newCard =document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML=`<div class="front-face face">aaaaa</div><div class="back-face face></div>`;
        document.querySelector(".content").appendChild(newCard);
        console.log(i);
        console.log(newCard);

    }
}