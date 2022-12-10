fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day10/input.txt', 'utf8');
let inputArray = input.split("\n");


let cycleCount = 0;
let registerValue = 1;
let sigStrArray = [];
let sum = 0;

for(let i=0;i<inputArray.length;i++){

    let instruction = inputArray[i].split(" ");
    //console.log(instruction[0]);
    //console.log(instruction[1]);
    
    switch(instruction[0]){

        default:
            cycleCount += 1;
            //console.log("CycleCount(noop)=" + cycleCount);
            //console.log("RV=" + registerValue);
            if(cycleCount == 20 || cycleCount == 60 ||cycleCount == 100 || cycleCount == 140 || cycleCount == 180 || cycleCount == 220){
                sigStrArray.push(registerValue * cycleCount);
                //console.log("RV=" + registerValue);
                //console.log(registerValue * cycleCount);
            }
            break;

        case "addx":
            cycleCount += 1;
            //console.log("CycleCount(addx1)=" + cycleCount);
            //console.log("RV=" + registerValue);
            if(cycleCount == 20 || cycleCount == 60 ||cycleCount == 100 || cycleCount == 140 || cycleCount == 180 || cycleCount == 220){
                sigStrArray.push(registerValue * cycleCount);
                //console.log("RV=" + registerValue);
                //console.log(registerValue * cycleCount);
            }

            cycleCount +=1;
            //console.log("CycleCount(addx2)=" + cycleCount);
            //console.log("RV=" + registerValue);
            if(cycleCount == 20 || cycleCount == 60 ||cycleCount == 100 || cycleCount == 140 || cycleCount == 180 || cycleCount == 220){
                sigStrArray.push(registerValue * cycleCount);
                //console.log("RV=" + registerValue);
                //console.log(registerValue * cycleCount);
            }
            registerValue += Number(instruction[1]);
           //console.log(Number(instruction[1]));
            //console.log("RV=" + registerValue);
            break;

    }
    //console.log(cycleCount);
}

for(let i=0;i<sigStrArray.length;i++){
    sum += sigStrArray[i];
}

console.log(sum);

