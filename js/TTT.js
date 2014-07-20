var tttApp = angular.module('TicTacToe', []);
tttApp.controller('tttController', function($scope) {

	$scope.createBoard = function(size) {
		if (size === null) {
			size = 3;
		}

		$scope.board = [];
		for (var i =0; i< size; ++i){
			var temp = [];
			for(var j = 0; j< size; ++j) {
				temp.push('♢');//set field
			}
			if (temp.length !==0) {
				$scope.board.push(temp);
			}
		}

			$scope.boardCreated = true;
	};
});