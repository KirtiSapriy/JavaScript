
let ages = [25, 70, 42, 18, 35];

let oAge = ages[0];
for (let i = 1; i < ages.length; i++) {
        if (ages[i] > oAge) {
                oAge = ages[i];
        }
}


console.log("Oldest age: " + oAge);