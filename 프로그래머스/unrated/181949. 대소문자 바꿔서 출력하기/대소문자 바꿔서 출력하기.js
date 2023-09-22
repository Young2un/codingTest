const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const up =str.toUpperCase()
    console.log( [...up].map((v,i) => v === str[i] ? v.toLowerCase() :v ).join(''))
   
});