// Description: FizzBuzz in TypeScript
function fizzbuzz() {
    for (var i = 1; i <= 30; i++) {
        var output = "";
        if (i % 3 === 0)
            output += "Fizz";
        if (i % 5 === 0)
            output += "Buzz";
        console.log(output || i);
    }
}
fizzbuzz();
