
for (let a = 1; a <= 5; a++) {
        let c = "";
        for (let b = 1; b <= 5; b++) {
                if ((a == 2 && b > 1 && b < 5) || (a == 3 && b > 1 && b < 5) || (a == 4 && b > 1 && b < 5)) {
                        c += "  ";
                }
                else {
                        c += "* ";
                }
        }
        console.log(c)
}