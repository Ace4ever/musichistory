define(function (require) {


	return {


		loadSongBox: function () {
			console.log("is this working");
			require(["hbs!../templates/songBox"], function (songsBox) {
				console.log("working");
		        $("#main-content").html(songsBox);
			 });
		},

		loadFilter: function () {
			require(["hbs!../templates/filter"], function (filterBox) {
				$("#main-content").append(filterBox)	
			});
		}
		

		// myAddedMovies: function() {
		// 	console.log("whatever");
		// 	$(this).hide();
		// 	$(this).show();
		// }, 
	};
});

