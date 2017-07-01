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
    }



    complete() {
        console.log("completing");
        if(!this.dateEnd) {
            this.dateEnd = new Date();
        }
    }
}

module.exports = Task;
