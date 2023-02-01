
// GET ELEMENTS **********
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// ADD EVENT LISTENZER FOR ADD BUTTON **********

button.addEventListener('click', () => {
    if (input.value !== '') {
        let chapter = input.value;

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
      
        li.textContent = chapter;
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener('click', () => {
            list.removeChild(li);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
    input.value = '';
    input.focus(); // Focus on the input value
});
