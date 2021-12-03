const fs = require("fs");

{
    var pos = 0;
    var depth = 0;

    const lines = fs.readFileSync("input1", "utf8").split("\n");

    lines.forEach(line => {
        var [cmd, val] = line.split(" ");
        // console.log(cmd, val);
        val = parseInt(val);
        
        if (cmd == "forward") {
            pos += val;
        } else if (cmd == "down") {
            depth += val;
        } else if (cmd == "up") {
            depth -= val;
        }
    });

    console.log(pos, depth, pos * depth);
}

{
    var pos = 0;
    var depth = 0;
    var aim = 0;

    const lines = fs.readFileSync("input1", "utf8").split("\n");

    lines.forEach(line => {
        var [cmd, val] = line.split(" ");
        // console.log(cmd, val);
        val = parseInt(val);
        
        if (cmd == "forward") {
            pos += val;
            depth += aim * val;
        } else if (cmd == "down") {
            aim += val;
        } else if (cmd == "up") {
            aim -= val;
        }
    });

    console.log(pos, depth, aim, pos * depth);
}
