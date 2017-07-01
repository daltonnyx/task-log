'strict mode';

const path = require('path');

const env = require('../../env.js');

export default class appController {
    getModel(modeName) {
       this[modeName] = require(env.modelPath + `/${modelName}`);
    }
}
