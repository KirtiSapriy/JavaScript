
let scores = [30, 40, 60, 70, 50];

let sum = 0;
for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
}
console.log("Average score: " + sum / scores.length);