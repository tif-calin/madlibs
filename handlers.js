const shrek = document.getElementById('shrek');
const inputsDiv = document.getElementById('inputs');
const warningText = document.getElementById('warning');
export const storySelect = document.getElementById('story-select');
export const storyDivs = document.querySelectorAll('.story');
export const btnSubmit = document.getElementById('button-submit');

const getSelectedRadio = () => {
    return document.querySelector('input[type="radio"]:checked').value;
};

export const populateInputs = () => {
    inputsDiv.innerHTML = '';

    // get the spans from the correct story div
    const spans = document.getElementById('story-' + getSelectedRadio()).querySelectorAll('span');

    //create buttons
    for (let i = 0; i < spans.length; i++) {
        const newIn = document.createElement('input');
        newIn.type = 'text';
        newIn.placeholder = spans[i].textContent;

        inputsDiv.appendChild(newIn);
    }
};

export const clickButton = () => {
    let story = document.getElementById('story-' + getSelectedRadio());
    let story2 = null;
    let empty = false;

    const spans = story.querySelectorAll('span');

    // loop through buttons and populate the spans
    const inputs = inputsDiv.querySelectorAll('input');
    for (let i = 0; i < spans.length; i++) {
        if (!inputs[i].value) {
            inputs[i].classList.add('empty-input');
            empty = true;
        } else {
            spans[i].textContent = inputs[i].value.toLowerCase();
        }
    }

    if (!empty) {
        if (btnSubmit.textContent === 'Submit') {
            // change button text
            btnSubmit.textContent = 'Play Again!';

            // set all story div classes to hidden
            for (let i = 0; i < storyDivs.length; i++) storyDivs[i].classList.add('hidden');

            // reveal story
            story.classList.remove('hidden');
        } else {
            // change button text
            btnSubmit.textContent = 'Submit';

            // set all story div classes to hidden
            for (let i = 0; i < storyDivs.length; i++) storyDivs[i].classList.add('hidden');

            // reset all input values
            for (let i = 0; i < spans.length; i++) inputs[i].value = '';
        }

        // hide yo stuff
        inputsDiv.classList.toggle('hidden');
        shrek.classList.toggle('hidden');
        storySelect.classList.toggle('hidden');
        warningText.classList.add('hidden');
    } else {
        // rshow warning text
        warningText.classList.remove('hidden');
    }
};