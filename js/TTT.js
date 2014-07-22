var tttApp = angular.module('TicTacToe', []);
tttApp.controller('tttController', function($scope) {

	$scope.createBoard = function(size, symbol) {

	if (size === null) {
		size = 3;
	}

	if (size === null) {
		symbol = "X";
	}

	$scope.board = [];

		for (var i =0; i< size; ++i){
			var temp = [];
			for(var j = 0; j< size; ++j) {
				temp.push(symbol); //set field
			}
			$scope.board.push(temp);
		}
		console.log($scope.board);
		$scope.boardcreated = true;


	};
	window.onload=$scope.createBoard(3);
});	
	