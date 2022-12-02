// Import input from adventofcode....
//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day1/input.txt', 'utf8');
let inputArray = input.split("\n");

//console.log(inputArray);
let elfCurrent = 0;
let elfMax = 0;



for(let i=0;i<inputArray.length;i++){

    elfCurrent += Number(inputArray[i]);


    if(inputArray[i] == ''){

        if(elfCurrent > elfMax)
            elfMax = elfCurrent;
            
        elfCurrent = 0;            
    }

    
}



console.log(elfMax);