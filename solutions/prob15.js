function recursiveGetLatticePaths(size) {

    var initialPos = [0, 0];
    var totalPaths = size === 0
        ? 0
        : lattice(size, initialPos);

    return totalPaths;
}

function lattice(max, currentPos) {
    if (currentPos[0] === max && currentPos[1] === max) {
        return 1;
    } else if (currentPos[0] === max) {
        var newPos = [
            currentPos[0],
            currentPos[1] + 1
        ];
        return lattice(max, newPos);
    } else if (currentPos[1] === max) {
        var newPos = [
            currentPos[0] + 1,
            currentPos[1]
        ];
        return lattice(max, newPos);
    } else {
        var downOne = [
            currentPos[0],
            currentPos[1] + 1
        ];
        var leftOne = [
            currentPos[0] + 1,
            currentPos[1]
        ];
        return lattice(max, downOne) + lattice(max, leftOne);
    }
}

expect(recursiveGetLatticePaths(0)).toBe(0);
expect(recursiveGetLatticePaths(1)).toBe(2);
expect(recursiveGetLatticePaths(2)).toBe(6);


function iterativeLatice(max) {
    var stack = [];
    var initialPos = [0, 0];
    stack.push(initialPos);
    var totalCount = 0;
    while (stack.length > 0) {
        var currentPos = stack[stack.length - 1];
        stack.pop();
        if (currentPos[0] === max && currentPos[1] === max) {
            totalCount++;
        } else if (currentPos[0] === max) {
            var newPos = [
                currentPos[0],
                currentPos[1] + 1
            ];
            stack.push(newPos);
        } else if (currentPos[1] === max) {
            var newPos = [
                currentPos[0] + 1,
                currentPos[1]
            ];
            stack.push(newPos);
        } else {
            var downOne = [
                currentPos[0],
                currentPos[1] + 1
            ];
            var leftOne = [
                currentPos[0] + 1,
                currentPos[1]
            ];
            stack.push(downOne);
            stack.push(leftOne);
        }
    }
    return totalCount;

}

expect(iterativeLatice(1)).toBe(2);
expect(iterativeLatice(2)).toBe(6);

var result = iterativeLatice(20);

document.getElementById('result').innerHTML = result;

