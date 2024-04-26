const todoList = document.getElementById('todoList');

function add() {
    const todoInput = document.getElementById('todoInput');
    if (todoInput.value.trim() !== '') {
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        deleteButton.textContent = '삭제';
        deleteButton.classList.add('delete-btn');

        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        li.textContent = todoInput.value.trim();
        li.appendChild(deleteButton);
        li.style.wordWrap = "break-word";
        
        todoList.appendChild(li);
        todoInput.value = '';
    } else {
        alert('할일을 적어주세요.');
    }
}
