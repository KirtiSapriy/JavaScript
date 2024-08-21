
let fs = 0;
let sc = 1;
let next;

console.log(fs);
console.log(sc);
for (let a = 1; a <= 8; a++) {
        next = fs + sc;
        fs = sc;
        sc = next;
        console.log(next)

}

