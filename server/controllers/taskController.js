'strict mode';
class taskController {
    constructor(props) {
        
    }

    getList(req, res) {
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
