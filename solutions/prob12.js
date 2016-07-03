/**
 * Created by volker on 03/07/2016.
 */

function nThTriangleNumber(n) {
    if(n<0) {
        throw new Error("Argument must be larger or equal to zero.")
    }
    var sum = 0;
    for(var i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}

expect(nThTriangleNumber(1)).toBe(1);
expect(nThTriangleNumber(2)).toBe(3);
expect(nThTriangleNumber(7)).toBe(28);
expect(() => nThTriangleNumber(-1)).toThrow("Argument must be larger or equal to zero.");


//good for finding divisors
function getNumberOfDivisors(value) {
    if(value<=0) {
        throw new Error("Number must be bigger than zero.")
    }

    var divisors = 0;
    for(var i = 1; i<=Math.sqrt(value); i++) {
        if(value%i === 0) {
            divisors++;
            if(i !== value/i) {
                divisors++;
            }
        }
    }
    return divisors;
}

expect(getNumberOfDivisors(1)).toBe(1);
expect(() => getNumberOfDivisors(0)).toThrow("Number must be bigger than zero.");
expect(() => getNumberOfDivisors(-1)).toThrow("Number must be bigger than zero.");
expect(getNumberOfDivisors(2)).toBe(2);
expect(getNumberOfDivisors(3)).toBe(2);
expect(getNumberOfDivisors(4)).toBe(3);

function firstTriangleWithNOrMoreDivisors(n) {
    //TODO: implement solution using exponential binary increments
    i = 1;
    while(true) {
        var triangleNumber = nThTriangleNumber(i);
        var divisors = getNumberOfDivisors(triangleNumber);
        if (divisors >= n) {
            return triangleNumber;
        }
        i++;
    }
}

expect(firstTriangleWithNOrMoreDivisors(1)).toBe(1);
expect(firstTriangleWithNOrMoreDivisors(4)).toBe(6);
expect(firstTriangleWithNOrMoreDivisors(6)).toBe(28);
expect(firstTriangleWithNOrMoreDivisors(3)).toBe(6);
expect(firstTriangleWithNOrMoreDivisors(5)).toBe(28);

console.log(firstTriangleWithNOrMoreDivisors(500));

