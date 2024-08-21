const numbers = [5, 10, 15, 20, 25, 30, 35, 40];

let ans = numbers.filter((el) => {
        return el % 2 == 0;
})

console.log(ans);