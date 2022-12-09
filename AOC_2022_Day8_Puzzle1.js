const { Console, count } = require('console');

fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day8/input.txt', 'utf8');
let inputArray = input.split("\n");
let visibleCount = 0; // How many visible trees....
const colSize = 99;
const rowSize = 99;


let forestGrid = createArray(rowSize,colSize);
    for(i=0; i<rowSize; i++){
        let row = inputArray[i];
        for(j=0;j<colSize; j++)
            forestGrid[j][i] = {"height" : Number(row.charAt(j)) , "visible": false};
    }

    markOutSideVisible(forestGrid);
    checkTopDown(forestGrid);
    checkBottomUp(forestGrid);
    checkLeftRight(forestGrid);
    checkRightLeft(forestGrid);

    for(a=0;a<rowSize;a++){
        for(b=0;b<colSize;b++){
            if(forestGrid[a][b].visible === true)
                visibleCount += 1;
        }
    }

   //console.log(forestGrid[99][98]);
   console.log(visibleCount);

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

function markOutSideVisible(grid){
    let copyHeight = 0;
    //let count = 0;

    for(x=0;x<rowSize;x++){
        for(y=0;y<colSize;y++){
        
            if((x == 0)||(y==0)||(x==98)||(y==98)){
            copyHeight = forestGrid[x][y].height;
            //console.log("X=" + x + " Y=" +y);
            //console.log(forestGrid[x][y].height);
            forestGrid[x][y] = {"height": copyHeight, "visible": true};
            //count ++;
            }
        }  
    }  
            //return count;
}

function checkTopDown(array){
    let curMaxHeight = 0;

    for(x=1;x<colSize-1;x++){
        for(y=1;y<rowSize;y++){
            
            if(curMaxHeight < array[x][y-1].height)
                curMaxHeight = array[x][y-1].height;

            //console.log("X=" + x + " Y=" +y);
            //console.log("CurrentMax= "  + curMaxHeight);   
            if(curMaxHeight < array[x][y].height)
                array[x][y] = {"height": array[x][y].height, "visible": true};

            if(curMaxHeight == 9)
                break;
                
                //console.log("x=" + x + ":" + array[x][y].height + " y=" + y +":" + array[x][y].visible);
        }
        //Reset for new column....
    curMaxHeight = 0;
    
   /*
        console.log("X=" + x + " Y=" +y);
        console.log("height=" + forestGrid[x][y].height + " visible=" + forestGrid[x][y].visible);
    */
    }
}
function checkBottomUp(array){
    let curMaxHeight = 0;

    for(x=97;x>0;x--){
        for(y=97;y>0;y--){
            
            if(curMaxHeight < array[x][y+1].height)
                curMaxHeight = array[x][y+1].height;

            //console.log("X=" + x + " Y=" +y);
            //console.log("CurrentMax= "  + curMaxHeight);   
            if(curMaxHeight < array[x][y].height)
                array[x][y] = {"height": array[x][y].height, "visible": true};

            if(curMaxHeight == 9)
                break;
                
                //console.log("x=" + x + ":" + array[x][y].height + " y=" + y +":" + array[x][y].visible);
                //console.log("X=" + x + " Y=" +y);
                //console.log("height=" + forestGrid[x][y].height + " visible=" + forestGrid[x][y].visible);
        }
        //Reset for new column....
    curMaxHeight = 0;
    }
}
function checkLeftRight(array){
    let curMaxHeight = 0;

    for(x=1;x<colSize-1;x++){
        for(y=1;y<rowSize-1;y++){
            
            if(curMaxHeight < array[y-1][x].height)
                curMaxHeight = array[y-1][x].height;

            //console.log("X=" + x + " Y=" +y);
            //console.log("CurrentMax= "  + curMaxHeight);   
            if(curMaxHeight < array[y][x].height)
                array[y][x] = {"height": array[y][x].height, "visible": true};

            if(curMaxHeight == 9)
                break;
                
                //console.log("x=" + y + " height:" + array[y][x].height + " y=" + x +":" + array[y][x].visible);
        }
        //Reset for new column....
    curMaxHeight = 0;
    
   
       // console.log("X=" + x + " Y=" +y);
       // console.log("height=" + forestGrid[x][y].height + " visible=" + forestGrid[x][y].visible);
    
    }
}
function checkRightLeft(array){
    let curMaxHeight = 0;

    for(x=97;x>0;x--){
        for(y=97;y>0;y--){
            
            if(curMaxHeight < array[y+1][x].height)
                curMaxHeight = array[y+1][x].height;

            //console.log("X=" + x + " Y=" +y);
            //console.log("CurrentMax= "  + curMaxHeight);   
            if(curMaxHeight < array[y][x].height)
                array[y][x] = {"height": array[y][x].height, "visible": true};

            if(curMaxHeight == 9)
                break;
                
                console.log("x=" + y + " height:" + array[y][x].height + " y=" + x +":" + array[y][x].visible);
        }
        //Reset for new column....
    curMaxHeight = 0;
    
   
       // console.log("X=" + x + " Y=" +y);
       // console.log("height=" + forestGrid[x][y].height + " visible=" + forestGrid[x][y].visible);
    }
}