function addTask(){
    const input = document.getElementById("tf-input");
    const inputValue = input.value;

    const task = document.createElement('li');
    task.classList.add('list-item');
    task.id = 
        new Date().valueOf().toString() + 
        Math.random().toString(36).substring(2, 7);

    const textSpan = document.createElement('span');
    textSpan.textContent = inputValue;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        deleteTask(task.id)
    })

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', function() {
        editTask(task.id)
    })

    task.appendChild(textSpan);
    task.appendChild(editButton);
    task.appendChild(deleteButton);

    const taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(task);
    input.value = '';
}

function deleteTask(id) {
    const task = document.getElementById(id);
    task.remove();
}

function editTask(id){
    const task = document.getElementById(id);
    
    const textSpan = task.querySelector('span');
    const currentText = textSpan.textContent;

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = currentText;
    inputField.classList.add('edit-input');

    const saveButton = document.createElement('button');
    saveButton.textContent = "Save";
    saveButton.classList.add('save-button');
    saveButton.addEventListener('click', function () {
        textSpan.textContent = inputField.value;
        task.replaceChild(textSpan, inputField);
        task.replaceChild(editButton, saveButton);
    });

    const editButton = task.querySelector('.edit-button');

    task.replaceChild(inputField, textSpan);
    task.replaceChild(saveButton, editButton);
}