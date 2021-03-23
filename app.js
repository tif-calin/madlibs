// import functions and grab DOM elements
import { clickButton, btnSubmit, populateInputs, storyDivs, storySelect } from './handlers.js';

// add event handlers
btnSubmit.addEventListener('click', clickButton);

// initialize stuff
window.onload = () => {
    storySelect.innerHTML = '';
    for (let i = 0; i < storyDivs.length; i++) {
        const radElem = document.createElement('input');
        const labElem = document.createElement('label');

        radElem.name = 'story-select';
        radElem.type = 'radio';
        radElem.value = '' + (i+1);
        radElem.onclick = populateInputs;

        labElem.for = radElem.value;
        labElem.textContent = 'story ' + (i+1);

        storySelect.appendChild(radElem);
        storySelect.appendChild(labElem);
    }
    storySelect.firstChild.checked = true;

    populateInputs();
}