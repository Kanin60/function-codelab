//knap i html
const knap = document.getElementById('calculateButt');
//addEventListener på knap
knap.addEventListener("click", (e) => {
    e.preventDefault();
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    gatherInputData();
});

//gatherInputData
function gatherInputData(){
    let euroRate = document.getElementById('euroRate').value;
    let dollarRate = document.getElementById('dollarRate').value;

    let danishAmount = document.getElementById('danishAmount').value;

    makeExchange(euroRate,dollarRate,danishAmount);
}
//makeExchange -en funktion der hedder makeExchange der kalder en funktion 2 gange med forskellige veksel rater fra modtaget data.
function makeExchange(euroRate,dollarRate,danishAmount){
    let myEuroRate = calculateExchange(euroRate,danishAmount);
    let myDollarRate = calculateExchange(dollarRate,danishAmount)

    showResult(myEuroRate,myDollarRate, danishAmount);
}
//calculateExchange
function calculateExchange(myRate,danishAmount){
 let myResult = myRate * danishAmount;

 return myResult;
}
//showResult
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}








