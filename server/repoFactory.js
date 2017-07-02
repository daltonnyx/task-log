'use strict';

const ENV = require('../env.js');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class RepoFactory {
    constructor() {
        this.connection = 'mongodb://127.0.0.1:27017/taskBuilder';
        mongoose.connect(this.connection);
        this.models = [];   
    }

    loadModel(model, params) {
        params = params || {};
        if(!this.models[model]) {
            const modelClass = require(ENV.modelPath + `/${model}`);
            this.models[model] = new modelClass(params); 
        }
        return this.models[model];
    }

    initModel(model, schema) {
        var modelName = model.constructor.name; 
        return mongoose.model(modelName, new Schema(schema));
    }
}


module.exports = new RepoFactory;
