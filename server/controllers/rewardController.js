'use strict';

const RepoFactory = require('../repoFactory.js');

class rewardController {
    constructor() {
        this.getList = this.getList.bind(this);
        this.model = RepoFactory.loadModel('reward');
    }
 
    getList(req, res) {
        this.model.list().then(rewards => {
            res.send(rewards);
        }).catch(err => {
            console.log(err);
        });
    }

    //Pattern function for para: $para1$para2
    get$id(req, res) {
        res.send("get reward " + req.params.id);
    }

    postAdd(req, res) {

    }
}
module.exports = rewardController;
