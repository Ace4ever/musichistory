requirejs.config({
	baseUrl: "./javascripts",
	paths:{
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
		'q': '../bower_components/q/q'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		}
	}
});

require(
	["bootstrap", "script", "addmusic"],
	function(bootstrap, script, addMusic) {

	}
);
