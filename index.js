var fs       = require('fs');
var cssparse = require('./lib/processCss');

if ( !process.argv[2] ) {
	console.error( 'No file argument.' );
	return;
}

fs.readFile(process.argv[2], 'utf8', function (err,data) {
	console.log( cssparse(data) );
});
