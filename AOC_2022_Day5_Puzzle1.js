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

    for(k=howMany; k>0; k--){
        craineWork(fromWhere,toWhere);
    }
}

function craineWork(fromWhere,toWhere){

    let boxLabel = '';


    switch(fromWhere){

        case 1:
            if(stack1.length > 0)
                boxLabel = stack1.pop();
            break;
        case 2:
            if(stack2.length > 0)
                boxLabel = stack2.pop();
            break;
        case 3:
            if(stack3.length > 0)
                boxLabel = stack3.pop();
            break;
        case 4:
            if(stack4.length > 0)
                boxLabel = stack4.pop();
            break;
        case 5:
            if(stack5.length > 0)
                boxLabel = stack5.pop();
            break;
        case 6:
            if(stack6.length > 0)
                boxLabel = stack6.pop();
            break;
        case 7:
            if(stack7.length > 0)
                boxLabel = stack7.pop();
            break;
        case 8:
            if(stack8.length > 0)
                boxLabel = stack8.pop();
            break;
        case 9:
            if(stack9.length > 0)
                boxLabel = stack9.pop();
            break;
    }

    switch(toWhere){

        case 1:
            stack1.push(boxLabel);
            break;
        case 2:
            stack2.push(boxLabel);
            break;
        case 3:
            stack3.push(boxLabel);
            break;
        case 4:
            stack4.push(boxLabel);
            break;
        case 5:
            stack5.push(boxLabel);
            break;
        case 6:
            stack6.push(boxLabel);
            break;
        case 7:
            stack7.push(boxLabel);
            break;
        case 8:
            stack8.push(boxLabel);
            break;
        case 9:
            stack9.push(boxLabel);
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
