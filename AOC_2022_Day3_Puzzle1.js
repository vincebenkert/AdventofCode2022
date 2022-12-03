const { Console } = require('console');

//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day3/input.txt', 'utf8');
let inputArray = input.split("\n");

let stringOne = "";
let stringTwo = "";
let totalPrior = 0;
let duplicate = '';

for(i=0;i<inputArray.length; i++){

    half = Math.ceil(inputArray[i].length / 2);

    stringOne = inputArray[i].slice(0,half);
    stringTwo = inputArray[i].slice(half);

    //console.log(stringOne);
    //console.log(stringTwo);

    for(j=0; j<stringOne.length; j++){
        for(k=0; k<stringTwo.length; k++){
            if(stringOne[j] == stringTwo[k])
                duplicate = stringOne[j];

        }

    }
    switch(duplicate){
        case 'a':
            totalPrior += 1;
            break;
        case 'b':
            totalPrior += 2;
            break;
        case 'c':
            totalPrior += 3;
            break;
        case 'd':
            totalPrior += 4;
            break;
        case 'e':
            totalPrior += 5;
            break;
        case 'f':
            totalPrior += 6;
            break;
        case 'g':
            totalPrior += 7;
            break;
        case 'h':
            totalPrior += 8;
            break;
        case 'i':
            totalPrior += 9;
            break;
        case 'j':
            totalPrior += 10;
            break;
        case 'k':
            totalPrior += 11;
            break;
        case 'l':
            totalPrior += 12;
            break;
        case 'm':
            totalPrior += 13;
            break;
        case 'n':
            totalPrior += 14;
            break;
        case 'o':
            totalPrior += 15;
            break;
        case 'p':
            totalPrior += 16;
            break;
        case 'q':
            totalPrior += 17;
            break;
        case 'r':
            totalPrior += 18;
            break;
        case 's':
            totalPrior += 19;
            break;
        case 't':
            totalPrior += 20;
            break;
        case 'u':
            totalPrior += 21;
            break;
        case 'v':
            totalPrior += 22;
            break;
        case 'w':
            totalPrior += 23;
            break;
        case 'x':
            totalPrior += 24;
            break;
        case 'y':
            totalPrior += 25;
            break;
        case 'z':
            totalPrior += 26;
            break;
        case 'A':
            totalPrior += 27;
            break;
        case 'B':
            totalPrior += 28;
            break;
        case 'C':
            totalPrior += 29;
            break;
        case 'D':
            totalPrior += 30;
            break;
        case 'E':
            totalPrior += 31;
            break;
        case 'F':
            totalPrior += 32;
            break;
        case 'G':
            totalPrior += 33;
            break;
        case 'H':
            totalPrior += 34;
            break;
        case 'I':
            totalPrior += 35;
            break;
        case 'J':
            totalPrior += 36;
            break;
        case 'K':
            totalPrior += 37;
            break;
        case 'L':
            totalPrior += 38;
            break;
        case 'M':
            totalPrior += 39;
            break;
        case 'N':
            totalPrior += 40;
            break;
        case 'O':
            totalPrior += 41;
            break;
        case 'P':
            totalPrior += 42;
            break;
        case 'Q':
            totalPrior += 43;
            break;
        case 'R':
            totalPrior += 44;
            break;
        case 'S':
            totalPrior += 45;
            break;
        case 'T':
            totalPrior += 46;
            break;
        case 'U':
            totalPrior += 47;
            break;
        case 'V':
            totalPrior += 48;
            break;
        case 'W':
            totalPrior += 49;
            break;
        case 'X':
            totalPrior += 50;
            break;
        case 'Y':
            totalPrior += 51;
            break;
        case 'Z':
            totalPrior += 52;
            break;
    }




}
console.log(totalPrior);
//7704 is not the correct answer....
//7691 is the correct answer....  I didn't change anything but the input... wtf...
