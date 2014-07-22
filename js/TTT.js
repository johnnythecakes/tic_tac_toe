var tttApp = angular.module('TicTacToe', []);
tttApp.controller('tttController', function($scope) {

/* establish first click is player1 */

/*mark user click with "x" */

/*$scope.markClick = function (tile) {
	if (tile )
}*/



/* sets player choice*/

/*$scope.playerChoice = function(tile) {
	if (pl)
}*/


/* builds game board */

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

	/* name array to grab player picture from */

	$scope.imageList = [
    {
      name: 'Zach Johnson',
      url: 3032,
    },
    {
      name: 'Steve',
      url: 7521,
    }
  ];
  $scope.playerSelect = $scope.imageList[1];
});	
	