var center = require('center-align');
var width = process.stdout.columns;
var height = process.stdout.rows;
var text = "Movement Terminal Simulation (MTS)";
var player = require('play-sound')(opts = {})
var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

one();

function one() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/1.txt', 'utf8');
        console.log(center(data.toString(), width));
	rl.question("Direction: ", function (direction) {
		if (direction === "left") {
			two();
		} else if (direction === "right") {
			three();
		} else if (direction === "back") {
			four();
		} else if (direction === "forward") {
			one();
		} else {
                	process.exit(0);
		}
	});
}

function two() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/2.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction2) {
                if (direction2 === "left") {
                        two();
                } else if (direction2 === "right") {
			one();
		} else if (direction2 === "back") {
                        five();
                } else if (direction2 === "forward") {
                        two();
                } else {
                        process.exit(0);
                }
        });
}

function three() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/3.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction3) {
                if (direction3 === "left") {
                        one();
		} else if (direction3 === "right") {
			three();
		} else if (direction3 === "back") {
                        six();
                } else if (direction3 === "forward") {
                        three();
                } else {
                        process.exit(0);
                }
        });
}

function four() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/4.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction4) {
                if (direction4 === "left") {
                        five();
                } else if (direction4 === "right") {
                        six();
                } else if (direction4 === "back") {
                        four();
                } else if (direction4 === "forward") {
                        one();
                } else {
                        process.exit(0);
                }
        });
}

function five() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/5.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction5) {
                if (direction5 === "left") {
                        five();
                } else if (direction5 === "right") {
                        four();
                } else if (direction5 === "back") {
                        five();
                } else if (direction5 === "forward") {
                        two();
                } else {
                        process.exit(0);
                }
        });
}

function six() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/6.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction6) {
                if (direction6 === "left") {
                        four();
                } else if (direction6 === "right") {
                        six();
                } else if (direction6 === "back") {
                        six();
                } else if (direction6 === "forward") {
                        three();
                } else {
                        process.exit(0);
                }
        });
}