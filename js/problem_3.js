const clickCounterButton = document.querySelector('#click-count');

// write your code here
function pluralize(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

let count = 0
let plural

clickCounterButton.addEventListener('click', e => {
    count++;
    plural = pluralize(count);
    clickCounterButton.textContent = `You clicked the button ${count} time${plural}`;
})