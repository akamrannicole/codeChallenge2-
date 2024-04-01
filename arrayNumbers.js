
//function that accepts two numbers to generate an array between them.
function createArray(start, end) {
    // Check if start is greater than end
    if (start > end) {
        // Swap start and end if start is greater
        [start, end] = [end, start];
    }

    // Create an empty array to store the result
    const result = [];

    // Use (loop for) to iterate through each number in the range from "start to end".
    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    // Return the resulting array
    return result;
}

console.log(createArray(4, 7)); 
console.log(createArray(-4, 7));
