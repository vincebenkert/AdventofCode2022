fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day10/input.txt', 'utf8');
let inputArray = input.split("\n");


let cycleCount = 0;
let arrayPos = 0;
let registerValue = 1;
let sigStrArray1 = [];
let sigStrArray2 = [];
let sigStrArray3 = [];
let sigStrArray4 = [];
let sigStrArray5 = [];
let sigStrArray6 = [];

let sum = 0;

for(let i=0;i<inputArray.length;i++){

    let instruction = inputArray[i].split(" ");
    switch(instruction[0]){

        default:
            cycleCount += 1;
            addToArray(arrayPos,registerValue);
            arrayPos ++;
            break;

        case "addx":
            cycleCount += 1;
            addToArray(arrayPos,registerValue);
            arrayPos ++;
            cycleCount +=1;
            addToArray(arrayPos,registerValue);
            arrayPos ++;
            registerValue += Number(instruction[1]);

            break;

    }
    //console.log(cycleCount);
}

function addToArray(arrayPos,registerValue){
    if(arrayPos < 40){
        if(Math.abs(arrayPos - registerValue) <= 1)
            sigStrArray1.push("#");
        else
            sigStrArray1.push(".");
    }
    else if(arrayPos < 80){
        if(Math.abs((arrayPos - 40) - registerValue) <= 1)
            sigStrArray2.push("#");
        else
            sigStrArray2.push(".");

    }
    else if(arrayPos < 120){
        if(Math.abs((arrayPos - 80) - registerValue) <= 1)
            sigStrArray3.push("#");
        else
            sigStrArray3.push(".");

    }
    else if(arrayPos < 160){
        if(Math.abs((arrayPos - 120) - registerValue) <= 1)
            sigStrArray4.push("#");
        else
            sigStrArray4.push(".");

    }
    else if(arrayPos < 200){
        if(Math.abs((arrayPos - 160) - registerValue) <= 1)
            sigStrArray5.push("#");
        else
            sigStrArray5.push(".");

    }
    else if(arrayPos < 240){
        if(Math.abs((arrayPos - 200) - registerValue) <= 1)
            sigStrArray6.push("#");
        else
            sigStrArray6.push(".");

    }
}


console.log(sigStrArray1);
console.log(sigStrArray2);
console.log(sigStrArray3);
console.log(sigStrArray4);
console.log(sigStrArray5);
console.log(sigStrArray6);