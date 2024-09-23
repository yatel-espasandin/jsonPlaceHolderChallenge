'use strict';

const url = 'http://localhost:3000/users';
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export async function getUser(){
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("HTTP request error: " + response.status)
        }
        return await response.json();
    }catch(error){
        if(error instanceof TypeError){
            console.error("Network error");
        }
    }
}

export async function postUser(){
    try{
        const response = await fetch(apiUrl);
        let data = await response.json();
            for(let user of data){
                await fetch(url,{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(user)
                })  
            }
        if(!response.ok){
            throw new Error("HTTP request error: " + response.status)
        }
    }catch(error){
        if(error instanceof TypeError){
            console.error("Network error");
        }  
    }
}

export async function checkPopulate(){
    const response = await fetch(url);
    const data = await response.json();
    
    if(data.length === 0){
        postUser();
    }
} 