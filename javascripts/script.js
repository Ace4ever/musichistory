
define(
	["jquery", "populate-songs", "get-more-songs"],
	function($, populate, getMore) {
		
		$("#addMusic").hide();
		
		var mainWindow = $("#listMusic");
		
		var getSongInfo = function (songInfo) {
			var songs = songInfo.songs;
			for (var i = 0; i < songs.length; i++) {
		    	mainWindow.append("<div id='song-container'><h2>" + songs[i].title + "</h2><ul class='song-info'><li>" + songs[i].artist + " </li><li class='song-info-border'>" + songs[i].album + "</li></ul><button class='deleteButton'>Delete</button></div>");
		    }
		};

		populate.getJsonData(getSongInfo);


	// $.ajax({url: "data/songs.json"}).done(getSongInfo); 
//*****************ADD MORE SONGS WITH MORE BUTTON***************************
	$("#addMore").click(function(){
		getMore.getJsonData(getSongInfo);
	});
//***************DISPLAY AND HIDE LIST MUSIC AND ADD MUSIC********************
	$("#listLink").click(function(){
		$("#mainWindow").show();
		$("#filterNav").show();	
		$("#addMusic").hide();
	console.log("list music works");
	});

	$("#addLink").click(function() {
		$("#mainWindow").hide();
		$("#filterNav").hide();	
		$("#addMusic").show();
	console.log("add music works");
	});

//*************DECLARE VARIABLES******************************
// var titles = [],
// 	artists = [],
// 	albums = [];

//******************ADD MUSIC************************
	// $("#add").click(function() {
	// 	console.log("add button works");
	// 	titles.push($("#song-title").val());
	// 	artists.push($("#song-artist").val());
	// 	albums.push($("#song-album").val());
	// 	console.log(titles);
	// 	console.log(artists);
	// 	console.log(albums);
	// 	mainWindow.append("<div id='song-container'><h2>" + titles[titles.length - 1] + "</h2><ul class='song-info'><li>" + artists[artists.length - 1] + " </li><li class='song-info-border'>" + albums[albums.length - 1] + "</li></ul><button class='delete-button'>Delete</button></div>");
	// 	$("#mainWindow").show();
	// 	$("#side-nav").show();
	// 	$("#enter-song-info").hide();
	// 	$("#song-title").val("");
	// 	$("#song-artist").val("");
	// 	$("#song-album").val("");
	// });

/****************DELETE ROW OF SONGS*********************/
	$(document).on("click", ".deleteButton", function(event){
		console.log("delete button works", event);	
		event.target.parentElement.remove();
	});
	//*********RETURN DOM VARIABLES
	return {
		mainWindow: mainWindow
	};

});