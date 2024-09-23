'use strict';

import { getUser } from "/requests/usersRequest.js";

export async function listUsers(){
    const users = await getUser();
    if (users && users.length > 0) {
        users.forEach(user => addUser(user));
    }
}

export function addUser(user){
    const userBody = document.getElementById("userBody");

    const row = document.createElement('tr');   
    row.dataset.id = user.id;

    let nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    let userNameCell = document.createElement('td');
    userNameCell.textContent = user.username;
    row.appendChild(userNameCell);

    let emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    userBody.appendChild(row);
}

document.getElementById("userBody").addEventListener('click', function(event){
    const row = event.target.closest('tr')
    if(row){
        document.querySelectorAll('#userBody tr').forEach(r => r.classList.remove('selected'));
        row.classList.add('selected');
        const userID = row.dataset.id;

        toDo.disabled = false;

        const todoHref = document.getElementById('todohref');
        todoHref.href += `?userId=${userID}`;
    }
});


