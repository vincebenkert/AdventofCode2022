//wtf is this input .....
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day5/input.txt', 'utf8');
let inputArray = input.split("\n");

let stack1 = [];
let stack2 = [];
let stack3 = [];
let stack4 = [];
let stack5 = [];
let stack6 = [];
let stack7 = [];
let stack8 = [];
let stack9 = [];


for(i=7;i>-1;i--){
    if(inputArray[i].charAt(1) != ' ')
        stack1.push(inputArray[i].charAt(1));

    if(inputArray[i].charAt(5) != ' ') 
        stack2.push(inputArray[i].charAt(5));

    if(inputArray[i].charAt(9) != ' ') 
        stack3.push(inputArray[i].charAt(9));
    
    if(inputArray[i].charAt(13) != ' ') 
        stack4.push(inputArray[i].charAt(13));
    
    if(inputArray[i].charAt(17) != ' ') 
        stack5.push(inputArray[i].charAt(17));
    
    if(inputArray[i].charAt(21) != ' ') 
        stack6.push(inputArray[i].charAt(21));
        
    if(inputArray[i].charAt(25) != ' ') 
        stack7.push(inputArray[i].charAt(25));

    if(inputArray[i].charAt(29) != ' ') 
        stack8.push(inputArray[i].charAt(29));

    if(inputArray[i].charAt(33) != ' ') 
        stack9.push(inputArray[i].charAt(33));
    
}

for(i=10; i<inputArray.length -1;i++)
{
    command = inputArray[i].split(' ');

    howMany = Number(command[1]);
    fromWhere = Number(command[3]);
    toWhere = Number(command[5]);


        craineWork(howMany,fromWhere,toWhere);

}

function craineWork(howMany,fromWhere,toWhere){

    let boxLabel = '';
    let boxArray = [];


    switch(fromWhere){

        case 1:
            if(howMany <= stack1.length){
                for(x=howMany; x>0; x--){
                    boxLabel = stack1.pop();
                    boxArray.unshift(boxLabel);
                }
                    
            }
            else{
                for(x=stack1.length; x>0; x--){
                    boxLabel = stack1.pop();
                    boxArray.unshift(boxLabel);
                }
            }
            break;
        case 2:
            if(howMany <= stack2.length){
                for(x=howMany; x>0; x--){
                    boxLabel = stack2.pop();
                    boxArray.unshift(boxLabel);
                }
                    
            }
            else{
                for(x=stack2.length; x>0; x--){
                    boxLabel = stack2.pop();
                    boxArray.unshift(boxLabel);
                }
            }
            break;
        case 3:
            if(howMany <= stack3.length){
                for(x=howMany; x>0; x--){
                    boxLabel = stack3.pop();
                    boxArray.unshift(boxLabel);
                }
                    
            }
            else{
                for(x=stack3.length; x>0; x--){
                    boxLabel = stack3.pop();
                    boxArray.unshift(boxLabel);
                }
            }
            break;
        case 4:
            if(howMany <= stack4.length){
                for(x=howMany; x>0; x--){
                    boxLabel = stack4.pop();
                    boxArray.unshift(boxLabel);
                }
                    
            }
            else{
                for(x=stack4.length; x>0; x--){
                    boxLabel = stack4.pop();
                    boxArray.unshift(boxLabel);
                }
            }
            break;
        case 5:
            if(howMany <= stack5.length){
                for(x=howMany; x>0; x--){
                    boxLabel = stack5.pop();
                    boxArray.unshift(boxLabel);
                }
                    
            }
            else{
                for(x=stack5.length; x>0; x--){
                    boxLabel = stack5.pop();
                    boxArray.unshift(boxLabel);
                }
            }
            break;
        case 6:
            if(howMany <= stack6.length){
                for(x=howMany; x>0; x--){
                    boxLabel = stack6.pop();
                    boxArray.unshift(boxLabel);
                }
                    
            }
            else{
                for(x=stack6.length; x>0; x--){
                    boxLabel = stack6.pop();
                    boxArray.unshift(boxLabel);
                }
            }
            break;
        case 7:
            if(howMany <= stack7.length){
                for(x=howMany; x>0; x--){
                    boxLabel = stack7.pop();
                    boxArray.unshift(boxLabel);
                }
                    
            }
            else{
                for(x=stack7.length; x>0; x--){
                    boxLabel = stack7.pop();
                    boxArray.unshift(boxLabel);
                }
            }
            break;
        case 8:
            if(howMany <= stack8.length){
                for(x=howMany; x>0; x--){
                    boxLabel = stack8.pop();
                    boxArray.unshift(boxLabel);
                }
                    
            }
            else{
                for(x=stack8.length; x>0; x--){
                    boxLabel = stack8.pop();
                    boxArray.unshift(boxLabel);
                }
            }
            break;
        case 9:
            if(howMany <= stack9.length){
                for(x=howMany; x>0; x--){
                    boxLabel = stack9.pop();
                    boxArray.unshift(boxLabel);
                }
                    
            }
            else{
                for(x=stack9.length; x>0; x--){
                    boxLabel = stack9.pop();
                    boxArray.unshift(boxLabel);
                }
            }
            break;
    }
   // console.log ("BoxLabel size = " + boxLabel.length);
   // console.log ("Number of elements to move per instructions = " + howMany);
   // console.log ("Contents of boxLabel = " + boxLabel)

    switch(toWhere){

        case 1:
            for(x=0;x<boxArray.length;x++)
                stack1.push(boxArray[x]);
            break;
        case 2:
            for(x=0;x<boxArray.length;x++)
                stack2.push(boxArray[x]);
            break;
        case 3:
            for(x=0;x<boxArray.length;x++)
                stack3.push(boxArray[x]);
            break;
        case 4:
            for(x=0;x<boxArray.length;x++)
                stack4.push(boxArray[x]);
            break;
        case 5:
            for(x=0;x<boxArray.length;x++)
                stack5.push(boxArray[x]);
            break;
        case 6:
            for(x=0;x<boxArray.length;x++)
                stack6.push(boxArray[x]);
            break;
        case 7:
            for(x=0;x<boxArray.length;x++)
                stack7.push(boxArray[x]);
            break;
        case 8:
            for(x=0;x<boxArray.length;x++)
                stack8.push(boxArray[x]);
            break;
        case 9:
            for(x=0;x<boxArray.length;x++)
                stack9.push(boxArray[x]);
            break;
    }

}

console.log(stack1);
console.log(stack2);
console.log(stack3);
console.log(stack4);
console.log(stack5);
console.log(stack6);
console.log(stack7);
console.log(stack8);
console.log(stack9);

//console.log (howMany + " " + fromWhere + " " + toWhere);
/*
//what am I capturing in inputArray
console.log(inputArray[0] + " " + inputArray[0].length);
console.log(inputArray[1] + " " + inputArray[1].length);
console.log(inputArray[2]);
console.log(inputArray[3]);
console.log(inputArray[4]);
console.log(inputArray[5]);
console.log(inputArray[6]);
console.log(inputArray[7]);
*/







//Output for puzzle....
console.log(stack1[stack1.length-1] + stack2[stack2.length-1] + stack3[stack3.length-1] + stack4[stack4.length-1] + stack5[stack5.length-1] + stack6[stack6.length-1] + stack7[stack7.length-1] + stack8[stack8.length-1] + stack9[stack9.length-1]);
