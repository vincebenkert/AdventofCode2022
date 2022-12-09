fs = require('fs')
let input = fs.readFileSync('/adventofcode/2022/day7/input.txt', 'utf8');
let inputArray = input.split("\n");


let commandline = [];
let currentPath = '';
let pathIndex = 0;
let paths = [{ "dirName": "/","size":0}];


for(i=0;i<inputArray.length;i++){
    commandline = inputArray[i].split(" ");

    switch(commandline[0]){
        case '$':
            if(commandline[1] == 'cd')
                currentPath = cd(commandline[2],currentPath);
            else if(commandline[1] == 'ls')
                i = ls(i,inputArray,paths);  
            break;
        default:
            break;
    }
}


//Puzzle 1 output
let lessThan100k = (paths.filter(paths=>paths.size <= (100000)));
let totalDirSize = 0;
for(k=0;k<lessThan100k.length;k++){
    totalDirSize += lessThan100k[k].size;

}
console.log("Total of < 100k directories = " + totalDirSize);

//Puzzle 2 output
let freeSpace = 70000000 - paths[0].size;
let lessThan = (paths.filter(paths=>paths.size >= (30000000 - freeSpace)));
let minSize = 70000000;
for(z=0;z<lessThan.length;z++){
    if(lessThan[z].size < minSize)
        minSize = lessThan[z].size;

}
console.log("minDirectory = " + minSize);




function ls(current,inputArray,paths){
    //iterate through directories + files in ls
    for(x=current+1;x<inputArray.length;x++){
        commandline = inputArray[x].split(" ");
        if(commandline[0] === '$')
            break;
        else if(commandline[0] === 'dir'){
                let name = currentPath + "/" + commandline[1];
                paths.push({"dirName": name,"size": 0 });
        }
        else
            //console.log("do some shit with sizes...");
            addSize(currentPath,commandline,paths);
        }

    return current=x-1;
}

function cd(name,pathArray){
    // Change to new sub directory or go back to the parent folder.
    if(name == "..")
        currentPath = currentPath.slice(0, currentPath.lastIndexOf('/')); // remove last current directory path from currentPath
    else if(name == '/')
        currentPath = currentPath + name;
        else
            currentPath = currentPath + '/' + name ;
    return currentPath;
}

function addSize(endPath,cmd,paths){

    let fileSize = Number(cmd[0]);

    while(endPath !== ""){
        let foundIndex = paths.findIndex(element => element.dirName === endPath);
        let mydir = paths[foundIndex];
        let size = Number(mydir.size) + fileSize;

        paths[foundIndex] = { "dirName": endPath , "size": size};
        endPath = endPath.slice(0,endPath.lastIndexOf('/'));
    }
    





}

    // let car = cars.find(car => car.color === "red");
    //console.log("Instruction=" + name);

   /*     
    if(name !== ".."){

            if(pathArray.find(directory => directory.dirName === currentPath) !== '')
                directory = pathArray.find(directory => directory.dirName === currentPath)
                console.log(directory);
            }
            else

        
        directory.dirName = currentPath;
        directory.size = 0;
        pathArray.push(directory);

    */