import { shuffle } from './util.js';

function getBoxValues () {
    let grid = document.getElementById('grid');
    return [...grid.children].map((box) => box.textContent);
}

function setBoxValues (data) {
    let grid = document.getElementById('grid');
    [...grid.children].forEach((box, i) => {
        box.textContent = data[i];
    });
}

function onShuffle () {
    let values = getBoxValues();
    let shuffledData = shuffle(values);
    setBoxValues(shuffledData);
}


function onSort () {
    let values = getBoxValues();
    values.sort();
    setBoxValues(values);
}

document.querySelector('#shuffle').addEventListener('click', onShuffle);
document.querySelector('#sort').addEventListener('click', onSort);