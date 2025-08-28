// love icon js...
const lovesCount = document.getElementById('love-count')
const loves = document.querySelectorAll('.loves');

let count = 0;
for (let love of loves) {
    love.addEventListener('click', function () {
        count = count + 1;
        lovesCount.innerText = count;
    });
};
// Call button js....
const cardButtons = document.getElementsByClassName('card-button');


for (let cardButton of cardButtons) {
    cardButton.addEventListener("click", function () {
        const servesTital = cardButton.parentNode.parentNode.querySelector("h1").innerText;
        const servesNumber = cardButton.parentNode.parentNode.querySelector("h2").innerText;
        let presentDimond = parseInt(document.getElementById('daimond').innerText);

        if (presentDimond < 20) {
            alert("You do not have enough coins. You need 20 coins to make the call.");
            return;
        } else {
            let newDimond = presentDimond - 20;


            if (newDimond < 0) newDimond = 0;

            document.getElementById('daimond').innerText = newDimond;
        }

        alert("...calling..." + servesTital + " " + servesNumber);

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const hour12 = hours % 12 || 12;
        const currentTime = `${hour12}:${minutes}:${seconds} ${ampm}`;
        const asideContainer = document.getElementById('aside-container')
        const newCard = document.createElement('div');
        newCard.innerHTML = `
        <div
            class="flex justify-between items-center bg-slate-50 rounded-lg p-4"
          >
            <div>
              <h1>${servesTital}</h1>
              <p>${servesNumber}</p>
            </div>
            <p>${currentTime}</p>
          </div>`;

        asideContainer.append(newCard);

    })
}

// copy button....
const CopyCount = document.getElementById('Copy-Count')
const CopyBtns = document.querySelectorAll('.Copy-btn');

let sum = 0;
for (let CopyBtn of CopyBtns) {
    CopyBtn.addEventListener('click', async function () {
        const servesNumber = CopyBtn.parentNode.parentNode.querySelector("h2").innerText;

        sum = sum + 1;
        CopyCount.innerText = sum;
        alert("Number copied: " + servesNumber)


        await navigator.clipboard.writeText(servesNumber)



    });

};

// clear button

const clearButton = document.getElementById('clear-btn')
clearButton.addEventListener('click', function(){
    const asideContainer = document.getElementById('aside-container').style.display = 'none'

})

