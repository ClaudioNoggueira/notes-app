const elNote = document.querySelector('.notes');
const btnEdit = document.querySelector('.edit');
const btnDelete = document.querySelector('.delete');

const main = elNote.querySelector('.main');
const textArea = elNote.querySelector('textarea');

btnEdit.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});

textArea.addEventListener('input', (e) => {
    const { value } = e.target;

    main.innerHTML = marked.parse(value);
});