const fs = require('fs');
const Bootstrap = function() {
    var controllers = [];
    const defaultDir = '/controllers';
    var autoload = function(dir) {
        var dir = dir || __dirname + defaultDir;
        var files = fs.readdirSync(dir);
        files.forEach(file => {
            if( !file.endsWith('.js') ) return;
            var controller = require(dir + '/' + file);
            controllers.push(new controller());
        });
        console.log(controllers);
    }

    var dispatch = function( app ) {
       autoload();
        controllers.forEach( controller => {
            var actions = Object.getOwnPropertyNames(controller.__proto__)
                            .filter( action => action.startsWith('get') || action.startsWith('post') );
            for (const action of actions) {
                let routeObj = buildRoutePath(controller, action);            
                app[routeObj.method](routeObj.route, controller[action]);
            }
        } );
    }
    var buildRoutePath = function(controller, action) {
        var actionName, method;
        if( action.startsWith('get') ) {
            actionName = action.toLowerCase().replace("get","");
            method = 'get';
        }
        else {
            actionName = action.toLowerCase().replace("post","");
            method = 'post';
        }
        actionName = actionName.replace('$', '/:').replace(/^\//, '');
        let route = '/';
        route += controller.constructor.name.toLowerCase().replace("controller","");
        route += `/${actionName}`;
        return { method: method, route: route };
    }
    return {
        dispatch: dispatch
    };
};

module.exports = new Bootstrap();
