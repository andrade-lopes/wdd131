const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Corrected selector

button.addEventListener('click', () => {
    if (input.value.trim() === '') return; // prevent adding empty items

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Add delete functionality
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    li.append(deleteButton);
    list.append(li);

    input.value = ''; // clear input
    input.focus(); // return focus to input field
});