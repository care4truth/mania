'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope) {
  	var movieList = [{
  		title : 'Bahubhali : The Beginning',
  		image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODAwMDc0NzA3Ml5BMl5BanBnXkFtZTgwMjU4NzgyNzE@._V1_SY1000_CR0,0,707,1000_AL_.jpg',
  		description : 'This movie is 1st part of Bahubhali',
  		category:'Awesome'
  	},
  	{
  		title : 'Bahubhali : The Continuation',
  		image:'https://images-na.ssl-images-amazon.com/images/M/MV5BODAwMDc0NzA3Ml5BMl5BanBnXkFtZTgwMjU4NzgyNzE@._V1_SY1000_CR0,0,707,1000_AL_.jpg',
  		description : 'This movie is 2nd part of Bahubhali',
  		category:'Epic'
  	},
  	{
  		title : 'Bahubhali : The Conclusion',
  		image:'https://images-na.ssl-images-amazon.com/images/M/MV5BODAwMDc0NzA3Ml5BMl5BanBnXkFtZTgwMjU4NzgyNzE@._V1_SY1000_CR0,0,707,1000_AL_.jpg',
  		description : 'This movie is 3rd part of Bahubhali',
  		category:'Awesome'
  	}];

  	$scope.movies = movieList;

    $scope.movie = {
      title : '',
      image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BODAwMDc0NzA3Ml5BMl5BanBnXkFtZTgwMjU4NzgyNzE@._V1_SY1000_CR0,0,707,1000_AL_.jpg'
    };

  	//$scope.newMovieTitle = '';
  	//$scope.newMovieDescription = '';
  	//$scope.newMovieImage='https://images-na.ssl-images-amazon.com/images/M/MV5BODAwMDc0NzA3Ml5BMl5BanBnXkFtZTgwMjU4NzgyNzE@._V1_SY1000_CR0,0,707,1000_AL_.jpg';
 
    $scope.validateTitle = function() {
      if ($scope.movie.title.length > 0 ) {
        console.log($scope.movie.title);
      } else {
        window.alert('title is required');
      }
    };


    $scope.addMovie = function() {
     /* var movie = { 
        title : $scope.newMovieTitle,
        image : $scope.newMovieImage,
        category : $scope.newMovieCategory,
        description : $scope.newMovieDescription,
      };*/

      console.log($scope.movie.title);
      $scope.movies.push(angular.copy($scope.movie));
    };

    $scope.checkCategorySelected = function() {
      if($scope.newMovieCategory === '') {
          window.alert('Category is required');
      }
   };

   $scope.checkDescription = function() {
    if ( $scope.checkDescription === '') {
      console.debug('Description is required');
    }
   };

  })
  .controller('SubCtrl',function($scope){
  	$scope.title = 'Available to watch: '+$scope.movies.length + ' movies';
  });
