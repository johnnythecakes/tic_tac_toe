var tttApp = angular.module('TicTacToe', []);
tttApp.controller('tttController', function($scope) {

	// Initializations
	$scope.size = 3;
	$scope.board = [];

	var init = function(size) {
		for (var i =0; i< size; ++i){
			for(var j = 0; j< size; ++j) {
				$scope.board.push(' '); //set field
			}
		}
	};	
	
	init($scope.size);
	console.log($scope.board);
	
	
});