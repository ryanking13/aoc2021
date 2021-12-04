const fs = require("fs");

{
    const lines = fs.readFileSync("input1", "utf8").split("\n");
    const lineLength = lines[0].length;
    const lineCount = lines.length;
    const lineCountHalf = lineCount / 2;

    const numCounts = new Array(lineLength).fill(0);

    for(var line of lines) {
        line.split("").map(x => parseInt(x)).forEach((x, i) => numCounts[i] += x);
    }


    const mcbs = numCounts.map(x => x > lineCountHalf ? "0" : "1");
    const lcbs = mcbs.map(x => x === "0" ? "1" : "0");
    // console.log(mcbs, lcbs);

    const gamma = parseInt(mcbs.join(""), 2);
    const epsilon = parseInt(lcbs.join(""), 2);

    console.log("Part 1:", gamma, epsilon, gamma * epsilon);
}

{
    const lines = fs.readFileSync("input1", "utf8").split("\n");
    const lineLength = lines[0].length;

    var oxygenRating = "";
    var oxygenLines = lines;
    for(var idx = 0; idx < lineLength; idx++) {
        const lineCount = oxygenLines.length;
        const lineCountHalf = lineCount / 2;
        const numCount = oxygenLines.map(x => x[idx]).map(x => parseInt(x)).reduce((a, b) => a + b, 0);

        var oxyBit = numCount >= lineCountHalf ? "1" : "0";
        oxygenLines = oxygenLines.filter(x => x[idx] === oxyBit);

        if (oxygenLines.length === 1) {
            oxygenRating = oxygenLines[0];
        }
    }

    var co2Rating = "";
    var co2Lines = lines;
    for(var idx = 0; idx < lineLength; idx++) {
        const lineCount = co2Lines.length;
        const lineCountHalf = lineCount / 2;
        const numCount = co2Lines.map(x => x[idx]).map(x => parseInt(x)).reduce((a, b) => a + b, 0);

        var co2Bit = numCount >= lineCountHalf ? "0" : "1";
        co2Lines = co2Lines.filter(x => x[idx] === co2Bit);

        if (co2Lines.length === 1) {
            co2Rating = co2Lines[0];
        }
    }
    
    console.log(oxygenRating, co2Rating, parseInt(oxygenRating, 2) * parseInt(co2Rating, 2));
}