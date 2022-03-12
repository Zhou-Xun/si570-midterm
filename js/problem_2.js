/**
 * Helps us pluralize word formatting.
 *
 * Provides an 's' when needed.
 * For example, we should say '1 car' but '5 cars',
 *
 * @param {number} num
 *   The number of items.
 * @returns {string}
 *   An empty string if num is 1, otherwise an 's'.
 */
function pluralize(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

const thingsInput = document.querySelector('#thing-num-input');
const thingsCountOutput = document.querySelector('#thing-count');

let num = thingsInput.valueAsNumber;
thingsCountOutput.textContent = `You added ${num} things`

// write your code here
thingsInput.addEventListener('input', e => {
    num = thingsInput.valueAsNumber;
    if (isNaN(num)) {
        num = "";
    }
    let plural =  pluralize(num);
    thingsCountOutput.textContent = `You added ${num} thing${plural}`
})