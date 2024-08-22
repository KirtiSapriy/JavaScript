
let b = document.querySelectorAll("button");

let a = document.querySelector("#val");

let f = "";
let s = "";
let ob = ""


b.forEach((el) => {


        el.addEventListener("click", () => {
                if (el.value == "C") {
                        a.value = ""
                        f = "";
                        ob = "";
                        s = "";

                }
                if (el.value >= 0 && el.value <= 9) {

                        f += el.value
                        a.value = `${s} ${ob} ${f} `

                }

                if (el.value == "+" || el.value == "/" || el.value == "*" || el.value == "-") {
                        ob = el.value;
                        s = f;
                        f = ""
                        a.value = `${s} ${ob} `

                }


                if (el.value == "=") {
                        switch (ob) {
                                case "+":
                                        a.value = +s + +f;
                                        break;

                                case "-":
                                        a.value = s - f;
                                        break;
                                case "/":
                                        a.value = s / f;
                                        break;

                                case "*":
                                        a.value = s * f;
                                        break;
                                default:
                                        alert("Wrong input")

                        }

                        f = "";
                        ob = "";
                        s = "";

                }

        })

})