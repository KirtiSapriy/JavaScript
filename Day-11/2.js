

let sum = 0;
let b = 0;

for (let a = 1; a <= 100; a++) {
        if (sum < 1000) {
                b++;
                sum += a;
        }

        else {
                break;
        }

}


console.log("Sum : "+ sum);
console.log("Hoe many time loop run : ",b)