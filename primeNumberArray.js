const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to check if a number is prime
const isPrime = number => {
    if (number <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(number); i++) { // Loop through potential divisors
        if (number % i === 0) return false; // If the number is divisible by i, it's not prime
    }
    return true; // If no divisors were found, the number is prime
};

// Function to find prime numbers in an array
const findPrimes = array => array.filter(num => isPrime(num));


console.log(findPrimes(originalArray));


