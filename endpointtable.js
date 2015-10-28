module.exports =  function (routes, src) {
	
var Table = require('cli-table');
var table = new Table({ head: ["", "Name", "Path"] });
 
console.log('\t\tEXPRESS ENDPOINTS');
for (var key in routes) {
	if (routes.hasOwnProperty(key)) {
		var val = routes[key];
		if(val.route)
		{
			val = val.route;
			var _o = {};
    		_o[val.stack[0].method]  = [val.path, val.path ]; 	
    		table.push(_o);
		}		
	}
}

console.log(table.toString());
 
return table;
};