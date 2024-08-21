
let b = document.querySelectorAll("button");

let a = document.querySelector("#val");

let f = "";
let s = "";
let ob = {
        "+": "+"
};


b.forEach((el) => {

        el.addEventListener("click", () => {
                if (el.value != "=" && el.value != "C" && el.value != "+" && el.value != "-" && el.value != "*" && el.value != "/") {
                        f += el.value
                        console.log(f);
                }
                if (el.value == "+" || el.value == "/" || el.value == "*" || el.value == "-") {
                        ob = el.value;
                        s = f;
                        f = ""

                        console.log(ob, f, s);
                }

                if (el.value == "=") {

                }
        })

})