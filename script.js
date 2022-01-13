const btnAdd = document.getElementById('add');

btnAdd.addEventListener('click', () => {
    addNote();
});

function addNote() {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML =
        `
    <div class="notes">
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden">
        </div>

        <textarea></textarea>
    </div>
    `;

    const btnEdit = note.querySelector('.edit');
    const btnDelete = note.querySelector('.delete');

    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    btnEdit.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    btnDelete.addEventListener('click', () => {
        note.remove();
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked.parse(value);
    });

    document.body.appendChild(note);
}