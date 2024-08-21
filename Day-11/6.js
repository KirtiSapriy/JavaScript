
for (let a = 1; a <= 5; a++) {
        let c = "";
        for (let b = 1; b <= 5; b++) {
                if (a == 1 || a == 5 || b == 1 || b == 5 || a == b || a + b == 6) {
                        c += "* ";
                }
                else {
                        c += "  ";
                }
        }
        console.log(c)
}