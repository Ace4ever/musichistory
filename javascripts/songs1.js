define(["jquery"], function($) {

	$.ajax({
		url: "songs.json"
	}).done(function(data){

// 	var songs = [];
// 	var mySongs = "";
// 	console.log("songs", songs);
// 	console.log("mySongs", mySongs);

// 	songs.push("Legs > by Z*ZTop on the album Eliminator", "The Logical Song > by Supertr@amp on the album Breakfast in America", "Another Brick in the Wall > by Pink Floyd on the album The Wall", "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction", "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill", "When the Sand Runs Out > by Rascal Flatts");


// 	songs.unshift("Photograph - by Ed Sheeran on the album X(Deluxe Edition");
// 	songs.push("Like I'm Gonna Lose You - by Meghan Trainor on the album Title");
// 	console.log(songs);


// 	for (var i = 0; i < songs.length; i++) {
// 		console.log(songs[i]);
// 		songs[i] = songs[i].replace(">", "-");
// 		var changedSongs = songs[i].replace("*", "").replace("!", "").replace("@", "").replace("(", "");
// 		changedSongs.split("");
// 		console.log(changedSongs);

// 		mySongs += "<div class='theseSongs'>" + changedSongs + "</div>";
// 		console.log(mySongs);

// 	}

// 		var songBox = $("#song-list");
// 		songBox.html(mySongs);
// 		console.log(songBox.html);



// 	var hiddenAdd = $("#addMusic");
// 	var hiddenList = $("#listMusic");

// 	console.log(hiddenAdd);
// 	console.log(hiddenList);

	
// 	hiddenAdd.hide();
// 	hiddenList.show();


// 	$("#addLink").click(function() {
// 		hiddenAdd.show();
// 		hiddenList.hide();
// 	});

// 	$("#listLink").click(function() {
// 		hiddenAdd.hide();
// 		hiddenList.show();
// 	});

// 	var song = $("#nameField");
// 	var artist = $("#artistField");
// 	var album = $("#albumField");

// 	$("#addButton").click(function addButton () {


// 		printMessage(songBox);

// 		console.log("printMessage", printMessage);

// 		function printMessage (songBox) {
// 	 	songBox.html("<div class='newSong'>" + song.val() + " - by " +
// 	 	artist.val() + " on the album " + album.val() + "</div>" + songBox.html());
	
// 	 	song.focus();
			
// 		}
// 	  	clearInput();  		

// 	  	function clearInput() {
// 	  		song.val("");
// 	  		artist.val("");
// 	  		album.val("");
// 	  	} 
	  	
// 	});


// 	$("#doneButton").click(function() {
// 		hiddenAdd.hide();
// 		hiddenList.show();
// 	});
	
// 	var songName = $("#songSearch");
// 	var artistName = $("#artistSearch");
// 	var albumName = $("#albumSearch");
// 	// var songList = $(".newSong");


// 	$("#filterButton").click(function (e) {
// 		// var thisSong = songList.val();
// 		// console.log(thisSong);

// 		var searchArtist = artistName.val();
// 		console.log("searchArtist:", searchArtist);

// 		var searchSong = songName.val();
// 		console.log("searchSong:", searchSong);

// 		var searchAlbum = albumName.val();
// 		console.log("searchAlbum:", searchAlbum);

		

// 		// for (var i = 0; i < songBox.html.length; i++) {
// 		// 	if (searchArtist === songBox[i]) {
// 		// 		console.log("songBox:",songBox[i]);

// 		// 		songBox.html("Here are the songs you're looking for" + songBox[]);
				
// 				// printMessage = songBox.html[i];
// 				// songBox.html(songBox[i]);
// 		// 	};
			
// 		// };
// 	});
});






