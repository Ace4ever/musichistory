define(
	["jquery", "script"],
	function($, script) {
		var songs = [],
			artists = [],
			albums = [];
			console.log(script);
		$("#addButton").click(function() {
			console.log("add button works");
			songs.push($("#nameField").val());
			artists.push($("#artistField").val());
			albums.push($("#albumField").val());
			console.log(songs);
			console.log(artists);
			console.log(albums);
			script.mainWindow.append("<div id='song-container'><h2>" + songs[songs.length - 1] + "</h2><ul class='song-info'><li>" + artists[artists.length - 1] + " </li><li class='song-info-border'>" + albums[albums.length - 1] + "</li></ul><button class='deleteButton'>Delete</button></div>");
			$("#mainWindow").show();
			$("#filterNav").show();
			$("#addMusic").hide();
			$("#nameField").val("");
			$("#artistField").val("");
			$("#albumField").val("");
			
	});

});

// "modal-backdrop"