//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day2/input.txt', 'utf8');
let inputArray = input.split("\n");

// A = Rock 
// B = Paper 
// C = Scissors

// X = Rock  and 1 point
// Y = Paper and 2 points
// Z = Scissors and 3 points

// 6 points for a win or 3 points for a tie or nothing for a loss

let elfChoice = 'A';
let myChoice = 'X';
let myScore = 0;



for(i=0; i < inputArray.length; i++){

    elfChoice = inputArray[i].charAt(0);
    myChoice = inputArray[i].charAt(2);

    console.log("Them = " + elfChoice + "  me = " + myChoice);

    if ((elfChoice == 'A' && myChoice == 'X') || (elfChoice == 'B' && myChoice == 'Y') || (elfChoice == 'C' && myChoice == "Z")){
        //It's a tie
        if(inputArray[i].charAt(2) == 'X')
            myScore = myScore + 3 + 1;
            else if (inputArray[i].charAt(2) == 'Y')
                myScore = myScore + 3 + 2;
                else if (inputArray[i].charAt(2) == 'Z')
                    myScore = myScore + 3 + 3;
    }
        else if(inputArray[i].charAt(0) == 'A' ){
            //Not a tie, but opponent chose Rock
            if(inputArray[i].charAt(2) == 'Y')
                myScore = myScore + 6 + 2;
                else
                    myScore = myScore + 3;

        }
        else if(inputArray[i].charAt(0) == 'B' ){
            //Not a tie, but opponent chose Paper
            if(inputArray[i].charAt(2) == 'Z')
                myScore = myScore + 6 + 3;
                else
                    myScore = myScore + 1;
            
        }
        else if(inputArray[i].charAt(0) == 'C' ){
                    //Not a tie, but opponent chose Scissors
                    if(inputArray[i].charAt(2) == 'X')
                    myScore = myScore + 6 + 1;
                    else
                        myScore = myScore + 2;
            
        }

        console.log(myScore);

}


