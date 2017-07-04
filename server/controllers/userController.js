'use strict';

const RepoFactory = require('../repoFactory.js');

class userController {
    constructor() {
        this.getList = this.getList.bind(this);
        this.model = RepoFactory.loadModel('user');
    }
 
    getList(req, res) {
        this.model.list().then(users => {
            res.send(users);
        }).catch(err => {
            console.log(err);
        });
    }

    //Pattern function for para: $para1$para2
    get$id(req, res) {
        res.send("get user" );
    }

    postAdd(req, res) {

    }
}
module.exports = userController;

