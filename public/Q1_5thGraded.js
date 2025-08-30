process.stdin.on('data', input => {
    let num = parseInt(input);

    if (num % 2 !== 0) {
        console.log("Weird");
    } else if (num >= 2 && num <= 5) {
        console.log("Not Weird");
    } else if (num >= 6 && num <= 20) {
        console.log("Weird");
    } else if (num > 20) {
        console.log("Not Weird");
    }

    process.exit();
});
