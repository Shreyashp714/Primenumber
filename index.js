var number = prompt("Please enter a positive number");

if (number <= 0) {
    alert("Invalid Input");
} else {
    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert("The number entered is a prime number");
    } else {
        alert("The number entered is not a prime number");
    }
}