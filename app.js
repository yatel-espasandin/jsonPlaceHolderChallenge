/* Imports, inicializacion de la aplicacion y demas
Se espera que la logica este separada en distintos modulos
*/
'use strict';


import { listUsers } from "./js/docs/user.js";
import { checkPopulate } from "./requests/usersRequest.js";

document.addEventListener('DOMContentLoaded', async () =>{
    await checkPopulate(); 
    listUsers(); 
})
