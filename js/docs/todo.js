'use strict';

import * as request from "/requests/todoRequest.js";
import { ToDo } from "/types.js";

listTodo(); 

    const urlParams = new URLSearchParams(window.location.search);
    const userID = urlParams.get('userId');

export async function listTodo(){
    const todo = await request.getTodoByUserId(userID);
    if(todo && todo.length > 0){
        todo.forEach(todos => addTodo(todos));
    }
}

async function addTodo(todo){
    const todoBody = document.getElementById('bodyTodo');
    const row = document.createElement('tr');
    //row.dataset.id = todo.id;

    let titleCell = document.createElement('td');
    titleCell.textContent = todo.title;
    row.appendChild(titleCell);

    let completedCell = document.createElement('td');
    completedCell.textContent = todo.completed ? 'Yes' : 'No'; ;
    row.appendChild(completedCell);

    const editButton = document.createElement('button');
    editButton.textContent = 'Update';
    row.appendChild(editButton);/* make function to update  -  POST or PATCH? BOTH?
    editButton.addEventListener('click', async () => {

    });*/
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    row.appendChild(deleteButton);
    deleteButton.addEventListener('click', async (event) => {
        event.preventDefault;
        await request.deleteTodo(todo.id);
        row.remove();
    });

    todoBody.appendChild(row);
}
/*finish this - autogenerative id or get the last id and make ++?
form.addEventListener('submit', async function(event){
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    if(taskName){
        selectOption.disabled = false;
        const taskState = document.getElementById('taskType').value;
    }
    await request.postTodo(new ToDo(userID, ))
})*/ 