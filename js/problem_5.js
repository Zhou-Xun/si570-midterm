const rhymeWithInput = document.querySelector('#rhyme-with-input');
const showRhymeButton = document.querySelector('#show-rhymes-button');
const clearRhymeButton = document.querySelector('#clear-rhymes-button');
const rhymeList = document.querySelector('#rhymes');

/**
 * Gets rhymes from Datamuse and processes the results.
 *
 * @param {string} rel_rhy
 *   The word you want rhymed with
 * @param callback
 *   The function to invoke after the JSON results are returned from Datamuse.
 */
function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here
let query;

const removeChild = (parent) => {
    parent.innerHTML = "";
}

showRhymeButton.addEventListener('click', e => {
    query = rhymeWithInput.value
    removeChild(rhymeList);
    getRhymes(query, data => {
        for (let item in data) {
            const {word} = data[item];
            const li_child = document.createElement('li');
            li_child.classList.add("list-group-item");
            li_child.textContent = word;
            rhymeList.append(li_child);
        }
        if (data.length === 0) {
            rhymeList.innerHTML += " <li class=\"list-group-item\">(no rhymes)</li>"
        }
    })
})

clearRhymeButton.addEventListener('click', e => {
    removeChild(rhymeList);
    rhymeWithInput.value = "";
})