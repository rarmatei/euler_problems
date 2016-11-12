function buildCollatzMap(number, map) {
    var curr = number;
    var incCount = [];
    var stop = false;
    while (!stop) {
        if (!map.hasOwnProperty(curr)) {
            var countable = {
                count: 1
            };
            incCount.forEach((countable) => {
                countable.count += 1;
            });
            map[curr] = countable;
            if(curr === 1) {
                stop = true;
            } else {
                incCount.push(countable);
                curr = singleCollatz(curr);
            }
        } else {
            incCount.forEach((countable) => {
                countable.count += map[curr].count;
            });
            break;
        }
    }
    return map;
}

function decreasingCollatz(start) {
    var max = 0;
    var collatzMap = {};
    var winner;
    for (var i = 1; i < start; i++) {
        collatzMap = buildCollatzMap(i, collatzMap);
        if(collatzMap[i].count > max) {
            max = collatzMap[i].count;
            winner = i;
        }
    }
    return winner;
}

function singleCollatz(number) {
    if (number % 2 === 0) {
        return number / 2;
    }
    return 3 * number + 1;
}

console.log(decreasingCollatz(1000000));