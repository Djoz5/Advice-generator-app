const diceBtn = document.querySelector('.btn-div')
const adviceNum = document.querySelector('h2')
const adviceText = document.querySelector('h1');


window.onload = showQuote;


diceBtn.addEventListener("click", function(){
    showQuote();
});


function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = "ADVICE #" + data.id;
        adviceText.innerHTML = `"${data.advice}"`
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}