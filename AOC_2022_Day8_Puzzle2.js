const { Console, count } = require('console');

fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day8/input.txt', 'utf8');
let inputArray = input.split("\n");

const colSize = 99;
const rowSize = 99;
let xPos = 0;
let yPos = 0;


let forestGrid = createArray(rowSize,colSize);
    for(i=0; i<rowSize; i++){
        let row = inputArray[i];
        for(j=0;j<colSize; j++)
            forestGrid[j][i] = {"height" : Number(row.charAt(j)) , "up": 0, "down": 0, "left":0, "right": 0};
    }




    let maxScenicScore = 0;
    for(x=0;x<rowSize;x++){
        for(y=0;y<colSize;y++){
            xPos = x;
            yPos = y;
            score = determineScenicScore(forestGrid,xPos,yPos);
            if(maxScenicScore < score)
                maxScenicScore = score;
        }
    }


   console.log(maxScenicScore);

//Create an N dimensional array ie: googled it...
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function determineScenicScore(array,xPos,yPos){
    score = 0;
    let a = xPos;
    let b = yPos;
    let treeHeight = array[xPos][yPos].height;

    //check up  / down / left and right

    checkUp(array,a,b,treeHeight);
    checkDown(array,a,b,treeHeight);
    checkLeft(array,a,b,treeHeight);
    checkRight(array,a,b,treeHeight);

    

    score = array[xPos][yPos].up * array[xPos][yPos].down * array[xPos][yPos].left * array[xPos][yPos].right;
    console.log("X=" + a + " Y=" + b + " height=" + treeHeight);
    console.log(array[xPos][yPos].up + " " + array[xPos][yPos].down + " " + array[xPos][yPos].left + " " + array[xPos][yPos].right + "=" + score)
    //console.log(score);


    return score;
}

function checkUp(array,a,b,treeHeight){
    let edge=0;
    if(b !== edge){
        for(k=b;k>0;k--){
            if(treeHeight > array[a][k-1].height)
               array[a][b] =  {"height" : array[a][b].height, "up": array[a][b].up+1, "down": array[a][b].down, "left": array[a][b].left, "right": array[a][b].right};
            else{
                array[a][b] =  {"height" : array[a][b].height, "up": array[a][b].up+1, "down": array[a][b].down, "left": array[a][b].left, "right": array[a][b].right};
                break;
            }
        }     
    }
}

function checkDown(array,a,b,treeHeight){
    let edge=98;

    if(b !== edge){
        for(k=b;k<edge;k++){
            if(treeHeight > array[a][k+1].height)
               array[a][b] =  {"height" : array[a][b].height, "up": array[a][b].up, "down": array[a][b].down+1, "left": array[a][b].left, "right": array[a][b].right};
            else{
                array[a][b] =  {"height" : array[a][b].height, "up": array[a][b].up, "down": array[a][b].down+1, "left": array[a][b].left, "right": array[a][b].right};
                break;
            }
        }     
    }
}


function checkLeft(array,a,b,treeHeight){
    let edge=0;
    if(a !== edge){
        for(k=a;k>0;k--){
            if(treeHeight > array[k-1][b].height)
               array[a][b] =  {"height" : array[a][b].height, "up": array[a][b].up, "down": array[a][b].down, "left": array[a][b].left+1, "right": array[a][b].right};
            else{
                array[a][b] =  {"height" : array[a][b].height, "up": array[a][b].up, "down": array[a][b].down, "left": array[a][b].left+1, "right": array[a][b].right};
                break;
            }
        }     
    }
}
function checkRight(array,a,b,treeHeight){
    let edge=98;

    if(a !== edge){
        for(k=a;k<edge;k++){
            if(treeHeight > array[k+1][b].height)
               array[a][b] =  {"height" : array[a][b].height, "up": array[a][b].up, "down": array[a][b].down, "left": array[a][b].left, "right": array[a][b].right+1};
            else{
                array[a][b] =  {"height" : array[a][b].height, "up": array[a][b].up, "down": array[a][b].down, "left": array[a][b].left, "right": array[a][b].right+1};
                break;
            }
        }     
    }
}
//5762400 tooooooo high....