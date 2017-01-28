$(document).ready(function() {

	// var publicApikey = '1ae4458fe72be61b3aeffff4d1ef11a9';

	// var priveteApikey = '79b838d7a635e27b7ccba7b4006d6189540086c3';

	$.ajax({
		type: 'GET',
		url: 'http://www.omdbapi.com/?t=SAW&y=&plot=short&r=json'
	}).done(function(data){
		console.log(data);
		
	$('.imdbbutton').on('click', function(){
		$('.imdbhtml').remove();
		$(".imdbinfo").append("<p class = 'imdbhtml'> " + data.Plot + "</p>" + "<p class = 'imdbhtml'>" + 'IMDB Rating: ' + data.imdbRating +"</p>");
		$(".imdbinfo").append("<img class = 'imdbhtml pics' src="+ data.Poster +">");
	});

});

	$.ajax({
		type: 'GET',
		url: 'http://www.omdbapi.com/?t=suspiria&y=&plot=short&r=json'
	}).done(function(data){
		console.log(data);
	$('.imdbbutton2').on('click', function(){
			$('.imdbhtml').remove();	
			$(".imdbinfo").append("<p class='imdbhtml'> " + data.Plot + "</p>" + "<p class='imdbhtml'>" + 'IMDB Rating: ' + data.imdbRating +"</p>");
			$(".imdbinfo").append("<img class='imdbhtml pics' src=" + data.Poster + ">");
	});

});
	
//http://ia.media-imdb.com/images/M/MV5BMjI5NTA4NzI1OF5BMl5BanBnXkFtZTgwNzczMDY5MDE@._V1_SX300.jpg'
//http://ia.media-imdb.com/images/M/MV5BMjAyNTcxNzYwMV5BMl5BanBnXkFtZTgwMzQzNzM5MjE@._V1_SX300.jpg'
	// $.ajax({
	
	// dataType: 'jsonp',
	// jsonp: 'json_callback',
	// url:'http://gateway.marvel.com/v1/public/comics?ts=1442805425apikey=' + publicApikey+ '&hash=' + '54d826cf7e190b167fda219da63d137b',

	// }).done(function(data){
	// 	console.log(data);
	// });

	
});