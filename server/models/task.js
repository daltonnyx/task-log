'use strict';
const RepoFactory = require('../repoFactory.js');

const TaskSchema = {
    title: String,
    description: String,
    owner: {
        fullName: String,
        position: String,
        username: String,
        password: String,
        bio: '',
        avatar:'',
        company: {
            title: String,
            address: String
        },
        role: {
            code: String,
            caption: String
        }

    },
    reward: {
        score: Number,
        title: '',
    },
    dateEnd: Date,
    priority: {
        order: Number,
        caption: String
    }
};

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
        this.tasks = RepoFactory.initModel(this, TaskSchema);
        console.log(this.tasks);
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
