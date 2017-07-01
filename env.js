const path = require('path');

var ENV = function(){
    var dateStartInMonth = 15;
    var modelPath = path.resolve(__dirname, './server/models');
    return {
        dateStartInMonth: dateStartInMonth,
        modelPath : modelPath
    }
}

module.exports = new ENV;
