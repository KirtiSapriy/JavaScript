let a = ['a', 'b', 'c', 'd', 'e'];

let array = a.map((el, i) => {
        if (i == 2) {
                console.log(el);
        }
        else {
                return '-';
        }
})
