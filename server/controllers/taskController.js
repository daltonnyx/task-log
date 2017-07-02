'strict mode';

const RepoFactory = require('../repoFactory.js');

class taskController {
    constructor() {
        this.getList = this.getList.bind(this);
        this.model = RepoFactory.loadModel('task');
    }
 
    getList(req, res) {
        this.model.tasks.find({}).sort({dateEnd: -1}).exec().then(tasks => {
            res.send(tasks);
        }).catch(err => {
            console.log(err);
        });
    }

    //Pattern function for para: $para1$para2
    get$id(req, res) {
        res.send("get task " + req.params.id);
    }

    postAdd(req, res) {

    }
}
module.exports = taskController;
