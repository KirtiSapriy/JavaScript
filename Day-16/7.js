

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let arr = array.map((el, i) => {

        if (Prime(el)) {
                return el;
        }
        else {
                return  0;
        }
})

console.log(arr);

function Prime(num) {
        let cou = 0;
        for (let i = 1; i <= num; i++) {
                if (num % i == 0) {
                        cou++;
                }
        }
        if (cou == 2) {
                return true;
        }
        else {
                return false
        }
}