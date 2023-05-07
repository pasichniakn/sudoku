var board1=[
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

  var board2=[
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]

  

function validSolution(board){
        function checkBoard(arr){
        var tmp = Object.assign([], arr);
        tmp.sort();
        for(var i=1;i<=9;i++){
            if(tmp[i-1]!=i){
                return -1;
            }
        }
        return 1
          
    }

    function crateSquare(x,y,board){
        var arr=[]
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                arr.push(board[i+x][j+y])
            }
        }
        if(checkBoard(arr) === -1){
            return -1
        }
    }

    function createArrColum(board){
        var arr=[]
        for(var j = 0;j<9;j++){
            for(var i=0;i<9;i++){
                arr[i]=board[i][j]
            }
            if(checkBoard(arr) === -1){
                return -1
            }
        }  
    }

    function createArrRow(board){
        
        for(var i = 0;i<9;i++){
            var arr=[]
            for(var j=0;j<9;j++){
                arr.push(board[i][j])
            }
            if(checkBoard(arr) === -1){
                return -1
            }
            
        }  
    }

    function createArrSquare(board){
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
                if((i%3==0)&&(j%3==0)){
                    if(crateSquare(i,j, board)==false){
                        return false
                    }
                }
            }
        }
    }
    if(createArrRow(board)===-1){
        return false
    }
    if(createArrColum(board)==false){
        return false
    }
   if (createArrSquare(board)==false){
        return false
   }
    return true
}


console.log(validSolution(board1))
console.log(validSolution(board2))
  