var tttApp = angular.module('TicTacToe', ["firebase"]);
tttApp.controller('tttController', function($scope, $firebase) {

/* turn counter */

$scope.turnCount = 0;
console.log($scope.turnCount);

/*mark user click as player */
$scope.playerOne = "X";
$scope.playerTwo = "O";
$scope.playerOneWon = false;
$scope.playerTwoWon = false;

  $scope.markClick = function(field, row, col) {
    /*if (field.owner=='') { */
     if ($scope.turnCount % 2 === 0) {
        field.owner = $scope.playerOne;
        field.icon = false;
        // $scope.board[field]=field.owner;
      }
        else {
          field.owner = $scope.playerTwo;
          field.icon = false;
          // $scope.board[field]=field.owner;
      }
      $scope.turnCount++;

      if ($scope.turnCount >=5) {
        $scope.winCheck();
      }
      console.log($scope.turnCount);
  }
  /*};*/


/* builds game board */

  $scope.createBoard = function(size) {

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
        var maybe = {icon:true, owner:""};
        temp.push(maybe); //set field
      }
      $scope.board.push(temp);
    }
    console.log($scope.board);  
    


  };
  window.onload=$scope.createBoard(3);

  /*win check*/
  $scope.winCheck=function() {
    for (var i = 0; i< $scope.board.length; i++) {
      var xHoriz= 0,
        oHoriz = 0,
        xVert = 0,
        oVert = 0;
        for(var j = 0; j<$scope.board.length; j++) {
          if ($scope.board[i][j].owner == $scope.playerOne) {
            if(++xHoriz == $scope.board.length)
              $scope.playerOneWon = true;
              document.getElementById('message').style.background = "rgba(0,128,0,0.4)";;
          }
          if ($scope.board[i][j].owner == $scope.playerTwo) {
            if(++oHoriz == $scope.board.length)
              $scope.playerTwoWon = true;
              document.getElementById('message').style.background = "rgba(0,128,0,0.4)";
          }
          if ($scope.board[j][i].owner == $scope.playerOne) {
            if(++xVert == $scope.board.length)
              $scope.playerOneWon = true;
              document.getElementById('message').style.background = "rgba(0,128,0,0.4)";
          }
          if ($scope.board[j][i].owner == $scope.playerTwo) {
            if(++oVert == $scope.board.length)
              $scope.playerTwoWon = true;
              document.getElementById('message').style.background = "rgba(0,128,0,0.4)";
          }
          console.log(xHoriz, oHoriz, xVert, oVert);
        }
    }
};


  /* name array to grab player picture from */
  $scope.imageList = [
    {
      name: 'Ian Goldfarb',
      url: 'images/image00.jpg',
    },
    {
      name: 'Nhi Tran',
      url: 'images/image01.jpg',
    },
    {
      name: 'Torey Mundkowsky',
      url: 'images/image02.jpg',
    },
    {
      name: 'Jared Cowan',
      url: 'images/image03.jpg',
    },
    {
      name: 'Dohee Kim',
      url: 'images/image04.jpg',
    },
    {
      name: 'John McDonald',
      url: 'images/image05.jpg',
    },
    {
      name: 'Khoa Ngo',
      url: 'images/image06.jpg',
    },
    {
      name: 'Justin Curatolo',
      url: 'images/image07.jpg',
    },
    {
      name: 'Chadd Chambers',
      url: 'images/image08.jpg',
    },
    {
      name: 'Mavis Zeng',
      url: 'images/image09.jpg',
    },
    {
      name: 'Nick Nish',
      url: 'images/image10.jpg',
    },
    {
      name: 'Xiayi Palmer',
      url: 'images/image11.jpg',
    },
    {
      name: 'Dalton Buckingham',
      url: 'images/image12.jpg',
    },
    {
      name: 'Brandon Kwong',
      url: 'images/image13.jpg',
    },
    {
      name: 'Avi Johnson',
      url: 'images/image14.jpg',
    },
    {
      name: 'Aaron Goldsmith',
      url: 'images/image15.jpg',
    },
    {
      name: 'Shawn Rodriguez',
      url: 'images/image16.jpg',
    },
    {
      name: 'Jeremy Zander',
      url: 'images/image17.jpg',
    },
    {
      name: 'Adam Schuld',
      url: 'images/image18.jpg',
    },
    {
      name: 'Jeremi Dudu',
      url: 'images/image19.jpg',
    },
    {
      name: 'Brant Barger',
      url: 'images/image20.jpg',
    },
    {
      name: 'Hamilton Karl',
      url: 'images/image21.jpg',
    },
    {
      name: 'Carolyn Nguyen',
      url: 'images/image22.jpg',
    },
    {
      name: 'Blaise Thomas',
      url: 'images/image23.jpg',
    },
    {
      name: 'Quincy Babin',
      url: 'images/image24.jpg',
    },
    {
      name: 'Anabel Cuevas',
      url: 'images/image25.jpg',
    },
    {
      name: 'Jared Alexander',
      url: 'images/image26.jpg',
    },
    {
      name: 'Brian Purcell',
      url: 'images/image27.jpg',
    },
    {
      name: 'Tony Le',
      url: 'images/image28.jpg',
    },
    {
      name: 'Levani Maisouradze',
      url: 'images/image29.jpg',
    },
    {
      name: 'Criselda Valderrama',
      url: 'images/image30.jpg',
    },
    {
      name: 'Peter Egan',
      url: 'images/image31.jpg',
    },
    {
      name: 'Benjamin Aragon',
      url: 'images/image32.jpg',
    },
    {
      name: 'Jordan Hardy',
      url: 'images/image33.jpg',
    },
    {
      name: 'Alexis Gormley',
      url: 'images/image34.jpg',
    },
    {
      name: 'Nick Mrozowski',
      url: 'images/image35.jpg',
    },
    {
      name: 'Kyle Riach',
      url: 'images/image36.jpg',
    },
    {
      name: 'Zach Johnson',
      url: 'images/image37.jpg',
    },
    {
      name: 'Kaitlin Jaffe',
      url: 'images/image38.jpg',
    },
    {
      name: 'Mark Arciaga',
      url: 'images/image37.jpg',
    }
  ];
  $scope.playerSelect = $scope.imageList;
}); 
  
