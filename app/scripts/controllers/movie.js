'use strict';
angular.module('movieManiaApp').controller('MovieCtrl',function($scope,$routeParams){
	console.log($routeParams.id);
	console.log($routeParams.slug);

	var id = parseInt($routeParams.id,10);

	var movieList = [{
		id:9,
  		title : 'Udyoga Parva',
  		image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODAwMDc0NzA3Ml5BMl5BanBnXkFtZTgwMjU4NzgyNzE@._V1_SY1000_CR0,0,707,1000_AL_.jpg',
  		description : 'Master the diplomacy',
  		category:'Awesome'
  	},
  	{
  		id:11,
  		title : 'Drona Parva',
  		image:'https://images-na.ssl-images-amazon.com/images/M/MV5BODAwMDc0NzA3Ml5BMl5BanBnXkFtZTgwMjU4NzgyNzE@._V1_SY1000_CR0,0,707,1000_AL_.jpg',
  		description : 'Dronas Show' ,
  		category:'Epic'
  	},
  	{	id:12,
  		title : 'Bheeshma Parva',
  		image:'https://images-na.ssl-images-amazon.com/images/M/MV5BODAwMDc0NzA3Ml5BMl5BanBnXkFtZTgwMjU4NzgyNzE@._V1_SY1000_CR0,0,707,1000_AL_.jpg',
  		description : 'Those 10 days',
  		category:'Awesome'
  	}];

  	for(var index in movieList) {
  		var movie = movieList[index];
  		if(movie.id == id) {
  			$scope.movie = movie;
  			break;
  		}
  	}
});