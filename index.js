// love icon js...
const lovesCount = document.getElementById('love-count')
const loves = document.querySelectorAll('.loves');

let count = 0;
loves.forEach(function (love) {
    love.addEventListener('click', function () {
        count = count + 1;
        lovesCount.innerText = count;
    });
});
// Call button js....
const cardButtons = document.getElementsByClassName('card-button');
console.log(cardButtons)

for (let cardButton of cardButtons) {
    cardButton.addEventListener("click", function () {
        const servesTital = cardButton.parentNode.parentNode.childNodes[3];
        const servesNumber = cardButton.parentNode.parentNode.childNodes[7];
        let presentDimond = parseInt(document.getElementById('daimond').innerText);

        if (presentDimond < 20) {
            alert("You do not have enough coins. You need 20 coins to make the call.");
            return;
        } else {
            let newDimond = presentDimond - 20;


            if (newDimond < 0) newDimond = 0;

            document.getElementById('daimond').innerText = newDimond;
        }

        alert("...calling..." + servesTital.innerText + " " + servesNumber.innerText);


    })
}