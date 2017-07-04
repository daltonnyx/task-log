'use strict';
const RepoFactory = require('../repoFactory.js');
const UserSchema = require('./userSchema.js');

class User {
    
    constructor(data) {
        console.log('init user model');
        if(data) {
            for (var prop in data) {
               this[prop] = data[prop];
            }
        }
        this.users = RepoFactory.initModel(this, UserSchema);
        console.log(this.users);
    }

    list(fields, filter) {
        var filter = filter || {};
        return this.users.find({}).select(fields).exec();
    }

    complete() {
        console.log("completing");
        if(!this.dateEnd) {
            this.dateEnd = new Date();
        }
    }
}

module.exports = User;
