var cleancss = require('clean-css');
var postcss  = require('postcss');
var list     = require('postcss/lib/list');
var beautify = require('js-beautify').css;

module.exports = function ( css ) {

	var parsedCss = postcss.parse(css);

	parsedCss.eachDecl(function(decl,i){
		if ( /background/.test(decl.prop) ) {

			var spacedValuesList = list.space(decl.value);

			spacedValuesList.forEach(function (value, index, arr) {
				if ( /url/.test(value) ) {
					arr.splice(index,1);
				}
			});

			decl.value = spacedValuesList.join(' ');

		}
	});

	// return beautify( new cleancss().minify( parsedCss.toString() ) );
	return new cleancss().minify( parsedCss.toString() );

};
