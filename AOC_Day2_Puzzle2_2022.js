//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day2/input.txt', 'utf8');
let inputArray = input.split("\n");

// A = Rock 
// B = Paper 
// C = Scissors

// X = I need to lose
// Y = I need to tie
// Z = I need to win

// 6 points for a win or 3 points for a tie or nothing for a loss

let elfChoice = 'A';
let myChoice = 'X';
let myScore = 0;



for(i=0; i < inputArray.length; i++){

    elfChoice = inputArray[i].charAt(0);
    myChoice = inputArray[i].charAt(2);


    console.log("Them = " + elfChoice + "  me = " + myChoice);
    switch(myChoice){
        case 'X':
            //I need to lose...
            if(elfChoice == 'A')
                myScore += 3;
                else if(elfChoice == 'B')
                    myScore += 1;
                    else
                        myScore += 2; 
            break;

        case 'Y':
            //I need to tie.
            if(elfChoice == 'A')
                myScore += 4;
                else if(elfChoice == 'B')
                    myScore += 5;
                    else
                        myScore += 6; 
            break;

        case 'Z':
            //I need to win!
            if(elfChoice == 'A')
            myScore += 8;
            else if(elfChoice == 'B')
                myScore += 9;
                else
                    myScore += 7; 
            break;


    }

    

        console.log(myScore);

}


