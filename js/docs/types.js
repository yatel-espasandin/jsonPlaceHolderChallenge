/**
 * @typedef {Object} User
 * @prop {number} id its own unique identifier
 * @prop {string} name full name
 * @prop {string} username a unique name in the system
 * @property {{
* street: string,
* suite: string,
* city: string,
* zipcode: string,
* geo: {
* lat: string,
* lng: string}}} address
* @prop {string} phone
* @prop {string} website
* @prop {{
* name: string,
* catchPhrase: string,
* bs: string}} company
*/

/**
* @typedef {Object} ToDo
* @prop {number} userId references a User
* @prop {number} id its own unique identifier
* @prop {string} title
* @prop {boolean} completed
*/

export class ToDo{
    constructor(userId, id, title, completed){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    getUserId(){
        return this.userId;
    };

    getId(){
        return this.Id;
    };

    getTitle(){
        return this.title;
    };

    getCompleted(){
        return this.completed;
    };
}

/**
* @typedef {Object} Post
* @prop {number} userId references a User
* @prop {number} id its own unique identifier
* @prop {string} title 
* @prop {string} body
*/

/**
* @typedef {Object} Comment
* @prop {number} postId references a Post
* @prop {number} id its own unique identifier
* @prop {string} name
* @prop {string} email
* @prop {string} body
*/

/**
* @typedef {Object} Album
* @prop {number} userId references a User
* @prop {number} id its own unique identifier
* @prop {string} title
*/

/**
* @typedef {Object} Photo
* @prop {number} albumId references an Album
* @prop {number} id its own unique identifier
* @prop {string} title
* @prop {string} url
* @prop {string} thumbnailUrl
*/
