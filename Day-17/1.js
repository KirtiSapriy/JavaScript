

let numbers = [2, 5, 12, 15, 7, 20];

let fil = numbers.filter((el, i) => {

        return el >= 10;

})

let map = fil.map((el) => {

        return el * el;
})

map.forEach((el) => {
        console.log(el)
})