let a = ['a', 'b', 'c', 'd', 'e'];

let array = a.map((el, i) => {
        if (i == 1) {

                return 'z'
        }
        else {
                return el;
        }
})
console.log(array)
