'use strict';
const RepoFactory = require('../repoFactory.js');
const TaskSchema = require('./taskSchema.js');

class Task {
    
    constructor(data) {
        console.log('init task model');
        if(data) {
            for (var prop in data) {
               this[prop] = data[prop];
            }
        }
        this.tasks = RepoFactory.initModel(this, TaskSchema);
        console.log(this.tasks);
    }

    list(filter) {
        var filter = filter || {};
        return this.tasks.find(filter).sort({dateEnd: -1}).exec();
    }

    complete() {
        console.log("completing");
        if(!this.dateEnd) {
            this.dateEnd = new Date();
        }
    }
}

module.exports = Task;
