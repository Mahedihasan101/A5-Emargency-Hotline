
const lovesCount = document.getElementById('love-count')
const loves = document.querySelectorAll('.loves');

let count = 0;
loves.forEach(function(love) {
    love.addEventListener('click', function () {
        count = count + 1;
        lovesCount.innerText = count;
    });
});