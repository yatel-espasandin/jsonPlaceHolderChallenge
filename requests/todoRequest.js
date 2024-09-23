'use strict';

const url = 'http://localhost:3000/todos';

export async function getTodo(id = ''){
    try{
        const response = await fetch(`${url}/${id}`);
        
        if(!response.ok){
            throw new Error('HTTP request error' + response.status)
        }
        return await response.json();
    }catch(error){
        if(error instanceof TypeError){
            console.error('Network error');
        }
    }
}

export async function getTodoByUserId(userId = ''){
    try{
        const response = await fetch(`${url}?userId=${userId}`);
        
        if(!response.ok){
            throw new Error('HTTP request error' + response.status)
        }
        return await response.json();
    }catch(error){
        if(error instanceof TypeError){
            console.error('Network error');
        }
    }
}

export async function postTodo(todo){
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(todo)
        });
        if(!response.ok){
            console.log('HTTP request failed' + response.ok);
        }
    } catch(error){
        if(error instanceof TypeError){
            console.error('Network error')
        }
    }
}

export async function putTodo(id, todo){
    try{
        const response = await fetch(`${url}/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(todo)
        });
        
        if(!response.ok){
            throw new Error('HTTP request error' + response.status)
        }
        return await response.json();
    }catch(error){
        if(error instanceof TypeError){
            console.error('Network error');
        }
    }
}

export async function deleteTodo(id){
    try{
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        })        

        if(!response.ok){
            throw new Error('HTTP request error' + response.status)
        }

    }catch(error){
        if(error instanceof TypeError){
            console.error('Network error');
        }else {
            console.error('Request failed: ', error.message);
        }
    }
}
