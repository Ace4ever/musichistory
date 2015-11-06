requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min"
  }
});

require (
	["jquery", "songs1"], function($, songs1){

});


