const numbers = [1, 2, 3, 4, 5, 6];


console.log(filterEvenNumbers(numbers));

function filterEvenNumbers(num) {

        let ans = num.filter((el) => {
                return el % 2 == 0;
        })

        return ans;


}

