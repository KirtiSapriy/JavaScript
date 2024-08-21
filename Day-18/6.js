const sentence = "hello world";

console.log(capitalizeWords(sentence));

function capitalizeWords(sen) {


        let ans = "";
        for (let a = 0; a < sen.length; a++) {

                if (a == 0 || sen[a - 1] == ' ') {
                        ans += sen[a].toUpperCase()
                }
                else {
                        ans += sen[a];
                }

        }

        return ans;

}