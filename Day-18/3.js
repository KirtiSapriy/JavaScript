const numbers = [1, 2, 3];

logSquares(numbers);

function logSquares(numbers) {


        numbers.forEach((el, i) => {

                console.log(el * el);

        })
}