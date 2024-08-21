
const numbers = [1, 2, 3, 4, 5];

console.log(transformArray(numbers));

function transformArray(num) {

        let ans = num.map((el, i) => {

                if (el % 2 != 0) {
                        return el * el * el;
                }
                else {
                        return el * el;
                }

        })

        return ans;

}