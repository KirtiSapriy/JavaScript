let arr = ["apple", "banana", "pear"];

let ans = arr.filter((el) => {
        if (el.length > 3) {
                return el
        }
})

console.log(ans);