var songs = ["Happy", "Photograph", "Afire Love", "Flowers", "One Hell of an Amen"];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "When the Sand Runs Out by Rascal Flatts";


var phrase = "Legs > by Z*ZTop on the album Eliminator";
var newPhrase = phrase.replace(">", "-");
console.log(newPhrase);

var phrase = "The Logical Song > by Supertr@amp on the album Breakfast in America";
var newPhrase = phrase.replace(">", "-");
console.log(newPhrase);

var phrase = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
var newPhrase = phrase.replace(">", "-");
console.log(newPhrase);

var phrase = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
var newPhrase = phrase.replace(">", "-");
console.log(newPhrase);

var phrase = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
var newPhrase = phrase.replace(">", "-");
console.log(newPhrase);