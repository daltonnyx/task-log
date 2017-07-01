'strict mode';

const RepoFactory = require('../repoFactory.js');

class taskController {
    constructor() {
        this.getList = this.getList.bind(this);
        this.model = RepoFactory.load('task');
    }
 
    getList(req, res) {
        console.log(this.model);
        res.send("Get list of task");
    }

    //Pattern function for para: $para1$para2
    get$id(req, res) {
        res.send("get task " + req.params.id);
    }

    postAdd(req, res) {

    }
}
module.exports = taskController;
