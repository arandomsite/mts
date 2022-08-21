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

forwardcenter();

function forwardcenter() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/forwardcenter.txt', 'utf8');
        console.log(center(data.toString(), width));
	rl.question("Direction: ", function (direction) {
		if (direction === "move left") {
			forwardleftone();
		} else if (direction === "move right") {
			forwardrightone();
		} else if (direction === "move back") {
			backcenter();
		} else if (direction === "move forward") {
			forwardcenter();
		} else {
                	forwardcenter();
		}
	});
}

function forwardleftone() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/forwardleft1.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        forwardleftone();
                } else if (direction === "move right") {
			forwardcenter();
		} else if (direction === "move back") {
                        backleftone();
                } else if (direction === "move forward") {
                        forwardleftone();
                } else {
                        forwardleftone();
                }
        });
}

function forwardrightone() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/forwardright1.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        forwardcenter();
		} else if (direction === "move right") {
			forwardrighttwo();
		} else if (direction === "move back") {
                        backrightone();
                } else if (direction === "move forward") {
                        forwardrightone();
                } else {
                        forwardrightone();
                }
        });
}

function forwardrighttwo() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/forwardright2.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        forwardrightone();
                } else if (direction === "move right") {
                        forwardrightthree();
                } else if (direction === "move back") {
                        backrighttwo();
                } else if (direction === "move forward") {
                        forwardrighttwo();
                } else {
                        forwardrighttwo();
                }
        });
}

function forwardrightthree() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/forwardright3.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        forwardrighttwo();
                } else if (direction === "move right") {
                        forwardrightfour();
                } else if (direction === "move back") {
                        backrightthree();
                } else if (direction === "move forward") {
                        forwardrightthree();
                } else {
                        forwardrightthree();
                }
        });
}

function forwardrightfour() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/forwardright4.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        forwardrightthree();
                } else if (direction === "move right") {
                        forwardrightfour();
                } else if (direction === "move back") {
                        backrightfour();
                } else if (direction === "move forward") {
                        forwardrightfour();
                } else {
                        forwardrightfour();
                }
        });
}

function backcenter() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/backcenter.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        backleftone();
                } else if (direction === "move right") {
                        backrightone();
                } else if (direction === "move back") {
                        backcenter();
                } else if (direction === "move forward") {
                        forwardcenter();
                } else {
                        backcenter();
                }
        });
}

function backleftone() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/backleft1.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        backleftone();
                } else if (direction === "move right") {
                        backcenter();
                } else if (direction === "move back") {
                        backleftone();
                } else if (direction === "move forward") {
                        forwardleftone();
                } else {
                        backleftone();
                }
        });
}

function backrightone() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/backright1.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        backcenter();
                } else if (direction === "move right") {
                        backrighttwo();
                } else if (direction === "move back") {
                        backrightone();
                } else if (direction === "move forward") {
                        forwardrightone();
                } else {
                        backrightone();
                }
        });
}

function backrighttwo() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/backright2.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        backrightone();
                } else if (direction === "move right") {
                        backrightthree();
                } else if (direction === "move back") {
                        backrighttwo();
                } else if (direction === "move forward") {
                        forwardrighttwo();
                } else {
                        backrighttwo();
                }
        });
}

function backrightthree() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/backright3.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        backrighttwo();
                } else if (direction === "move right") {
                        backrightfour();
                } else if (direction === "move back") {
                        backrightthree();
                } else if (direction === "move forward") {
                        forwardrightthree();
                } else {
                        backrightthree();
                }
        });
}

function backrightfour() {
	console.clear();
        console.log(center(text, width));
        var data = fs.readFileSync('./ascii/backright4.txt', 'utf8');
        console.log(center(data.toString(), width));
        rl.question("Direction: ", function (direction) {
                if (direction === "move left") {
                        backrightthree();
                } else if (direction === "move right") {
                        backrightfour();
                } else if (direction === "move back") {
                        backrightfour();
                } else if (direction === "move forward") {
                        forwardrightfour();
                } else {
                        backrightfour();
                }
        });
}