const User = require('./User');

module.exports =  class UserDAO{
    constructor(  ){
        this.users = [];
    }

    add(user){
        this.users[user.id] = user;
    }

    get(id){
        return this.users[id];
    }

    remove(id){
        this.users.splice(id,1);
    }

    update(user){
        this.users[user.id] = user;
    }

    all(){
        return this.users;

    }

    getNextID(){

        return this.users.length;
    }

}