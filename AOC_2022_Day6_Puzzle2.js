fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day6/input.txt', 'utf8');
let inputArray = input.split("\n");

let message = '';
let msglength = 14;  // change from puzzle 1 to 2 for message size....
let answer = 0;
let duplicate = false;
let done = false;

for(i=0;i<inputArray[0].length;i++){
    for(x=i; x<i+msglength; x++)
        message += inputArray[0].charAt(x);
    for(y=0;y<message.length;y++){
        for(z=y+1;z<message.length;z++){
            if(message.charAt(y) == message.charAt(z)){
                duplicate = true;
                break;
            }
            if((y == msglength-2) && (z == msglength-1))
                done = true;
        }         
        if(duplicate)
            break;    
    }
    if(done){
        answer = i + msglength;
        break;
    }
    //RESET
    duplicate = false;
     message = '';   

}
console.log(message);
console.log(answer);
