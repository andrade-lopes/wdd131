// Get references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Add click event listener to the Add Chapter button
button.addEventListener('click', function () {
    const chapter = input.value.trim(); // Clean up user input

    if (chapter !== '') {
        // Create a list item
        const li = document.createElement('li');
        li.textContent = chapter;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Add event listener to delete the list item
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Return focus to input field
        });

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the list
        list.append(li);

        // Clear the input field and focus again
        input.value = '';
        input.focus();
    } else {
        // Optional: alert or just focus
        input.focus();
    }
});