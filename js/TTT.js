var tttApp = angular.module('TicTacToe', []);
tttApp.controller('tttController', function($scope) {

/* turn counter */

$scope.turnCount = 0;
console.log($scope.turnCount);

/*mark user click as player */

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
      name: 'Ian Goldfarb',
      url: 'images/image00.jpg',
    },
    {
      name: 'Steve',
      url: 'images/image01.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image02.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image03.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image04.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image05.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image06.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image07.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image08.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image09.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image10.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image11.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image12.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image13.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image14.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image15.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image16.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image00.jpg',
    }
  ];
  $scope.playerSelect = $scope.imageList[1];
});	
	