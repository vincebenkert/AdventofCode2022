fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day4/input.txt', 'utf8');
let inputArray = input.split("\n");
let doubleCoverage = 0;

for(i=0;i<inputArray.length - 1;i++){

    elfGroup = inputArray[i].split(',');
        for(k=0; k<elfGroup.length; k+=2){

            elfSections = elfGroup[k].split("-");
           
            startOne = elfSections[k];
            endOne = elfSections[k+1];
            elfSections = elfGroup[k+1].split("-");
            startTwo = elfSections[k];
            endTwo = elfSections[k+1];

        }




        // Is there an overlap?
        if( (Number(startOne) >= Number(startTwo) && Number(startOne) <= Number(endTwo)) || (Number(endOne) >= Number(startTwo) && Number(endOne) <= Number(endTwo)) || (Number(startTwo) >= Number(startOne) && Number(startTwo) <= Number(endOne)) || (Number(endTwo) >= Number(startOne) && Number(endTwo) <= Number(endOne))){
        console.log("Section Coverage First = " + startOne + " to " + endOne);
        console.log("Section Coverage Second = " + startTwo + " to " + endTwo);
        doubleCoverage += 1;

    }


}
console.log(doubleCoverage);