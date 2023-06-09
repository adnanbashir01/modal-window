'use strict';

// Select all the classes we want to iterate and save them in variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// Close the Modal and Open the Modal Functions
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Open Modal and show overlay on clicking Show Modal button
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
}

// Close the modal on clicking the Close Modal Button or on the Overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        console.log("Escape is pressed");
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})