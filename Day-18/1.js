
const numbers = [2, 3, 4];

console.log(doubleAndAddIndex(numbers));


function doubleAndAddIndex(num) {
        let ans = num.map((el, i) => {

                return el + el + i;

        })

        return ans;

}