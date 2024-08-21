let n = 4;
let c = 1;

for (let a = 1; a <= n; a++) {
        let ans = "";
        for (let b = 1; b <= a; b++) {
                ans += c;
                c++;
        }
        console.log(ans);
}