
//Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById('calculateButt');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    gatherInputData();
});

// indsamling af data fra dom (model code fra MVC)
function gatherInputData(){
    //VALUTARATER
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;
    //DANSKE KRONER
    const myDanishAmount = document.getElementById('danishAmount').value;

    //KALDER makeExchange
    makeExchange(myEuroRate,myDollarRate,myDanishAmount);
}

// håndterer data behandling  (controller code fra MVC)
function makeExchange(myEuroRate,myDollarRate,myDanishAmount){
    let myEuro = calculateExchange(myEuroRate, myDanishAmount);
    let myDollar = calculateExchange(myDollarRate, myDanishAmount);

    showResult(myEuro, myDollar, myDanishAmount);
}


// sub funktion der udfører en opgave og returnerer et resultat.  stadig controller code i MVC
function calculateExchange(rate, myDanishAmount){
    Resultatet = rate * myDanishAmount;
    return Resultatet;
}



// viser resultatet  (view code fra MVC) (bare kopiret ind)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}







