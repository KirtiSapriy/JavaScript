const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

let ans = numbers.map((el) => {

        if (el % 2 != 0) {
                return el + el;
        }
        else {
                return el;

        }

})

console.log(ans);