'use strict';

const firstTitle = document.getElementById('first');
const one = document.getElementById('one');
console.log(firstTitle);

firstTitle.addEventListener('change', () => {
    const firstTitleEl = firstTitle.checked; // Use the `checked` property for checkboxes
    console.log(firstTitleEl);

    if (firstTitleEl) {
        one.classList.add('strike');
    } else {
        one.classList.remove('strike');
    }
});


