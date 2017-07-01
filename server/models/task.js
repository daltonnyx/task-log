'use strict';
const RepoFactory = require('../repoFactory.js');

class Task {
    
    constructor(data) {
        console.log('init task model');
        if(data) {
            this._id = data._id;
            this.title = data.title;
            this.description = data.description;
            this.owner = data.owner;
            this.reward = data.reward;
            this.dateEnd = data.dateEnd;
            this.priority = data.priority;
        }
        this.tasks = RepoFactory.init(this, {
            title: String,
            description: String,
            owner: {
                fullName: String
            },

        });
    }

    list(filter) {
        var filter = filter || {};
        
    }

    complete() {
        console.log("completing");
        if(!this.dateEnd) {
            this.dateEnd = new Date();
        }
    }
}

module.exports = Task;
