var tttApp = angular.module('TicTacToe', []);
tttApp.controller('tttController', function($scope) {

/* turn counter */

$scope.turnCount = 0;
console.log($scope.turnCount);

/*mark user click with "x" */

$scope.playerOne = "X";
$scope.playerTwo = "O";

	$scope.markClick = function (field) {
	if ((field =='') && ($scope.turnCount ===0)) {
		field = $scope.playerOne;
		$scope.turnCount++;
		}
		console.log(field);
	};

/*condition to initialize game*/

$scope.gameStart = false;



/* builds game board */

	$scope.createBoard = function(size, symbol) {

	if (size === null) {
		size = 3;
	}

	if (size === null) {
		symbol = ' ';
	}

	$scope.board = [];

		for (var i =0; i< size; ++i){
			var temp = [];
			for(var j = 0; j< size; ++j) {
				temp.push(''); //set field
			}
			$scope.board.push(temp);
		}
		console.log($scope.board);	
		


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
	