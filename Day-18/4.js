const numbers = [1, 2, -3, 4, -5];

console.log(findIndexOfFirstNegative(numbers));


function findIndexOfFirstNegative(num) {

        for (let a = 0; a < num.length; a++) {
                if (num[a] < 0) {
                        return a;
                }
        }


}