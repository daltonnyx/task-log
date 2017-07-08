'use strict';
const RepoFactory = require('../repoFactory.js');
const RewardSchema = require('./rewardSchema.js');

class Reward {
    
    constructor(data) {
        if(data) {
            for (var prop in data) {
               this[prop] = data[prop];
            }
        }
        this.rewards = RepoFactory.initModel(this, RewardSchema);
    }

    list(filter) {
        var filter = filter || {};
        return this.rewards.find(filter).sort({score: -1}).exec();
    }

}

module.exports = Reward;
