'use strict';

const ENV = require('../env.js');

class RepoFactory {
    
    constructor() {
        this.models = [];   
    }

    load(model, params) {
        params = params || {};
        if(!this.models[model]) {
            const modelClass = require(ENV.modelPath + `/${model}`);
            this.models[model] = new modelClass(params); 
        }
        return this.models[model];
    }

    init(model) {
        
    }
}


module.exports = new RepoFactory;
