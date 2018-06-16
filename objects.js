var movie = [
	{title: "In Bruges",
	hasWatched: true,
	rating: 5}
	{title: "Les Misarables",
	hasWatched: false,
	rating: 3.5}
	{title: "Sharknado",
	hasWatched: true,
	rating: 2}	
]

movies.forEach(function(movie){
	var result = "You Have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.Rating + " stars";
	console.log(result)
})
function buildString(movie){
		var result = "You Have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.Rating + " stars";
	return result;
}