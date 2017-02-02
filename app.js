$(document).ready(function() {

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
	

	
});
