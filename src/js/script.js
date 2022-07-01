let ShowNoteBtn = document.querySelector(".add-note-btn");
let EditNoteContainer = document.querySelector(".edit-note");
let note_title_input = document.querySelector(".note-title-input");
let note_desc_input = document.querySelector(".note-body-input");
let noteBox = document.querySelector(".note-box");
let closeIcon = document.querySelector(".fa-arrow-left");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Getting Local Storage Notes

const allNotes = JSON.parse(localStorage.getItem("allNotes") || "[]");
let isUpdate = false, updateId;

note_title_input.addEventListener('keyup' , function(e) {
    this.style.height = '45px';
    let height = e.target.scrollHeight;
    note_title_input.style.height = `${height}px`;
});

closeIcon.addEventListener('click', () => {
    EditNoteContainer.style.left = "-100%";
});

ShowNoteBtn.addEventListener('click', () => {
    EditNoteContainer.style.left = "50%";
    note_title_input.value = "";
    note_desc_input.value = "";
});

function showNotes() {
    let NoteAdd = '';
    document.querySelectorAll(".note").forEach(note => note.remove());
    allNotes.forEach((note, index) => {
    let filtDesc = note.description.replaceAll("\n", "<br/>");
        NoteAdd += `  <div class="note">
                <h3 class="note-title">${note.title}</h3>
                    <p class="note-body">${note.description}</p>
                    <hr>
                    <p class="date">${note.date}</p>
                    <i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
                    <div class="settings">
                        <div class="menu">
                            <span class="edit-btn" onclick="editNote(${index}, '${note.title}', '${filtDesc}')"><i class="fa-solid fa-pen"></i>Edit</span>
                            <span class="delete-btn" onclick="deleteNote(${index})"><i class="fa-solid fa-trash"></i>Delete</span>
                        </div>
                    </div>
                    </div>
        `;
    });
    noteBox.innerHTML = NoteAdd || `
    <span><i class="fa-solid fa-note-sticky"></i></span>
    <span class="no-notes-message">No Notes here yet</span>`
}

showNotes();