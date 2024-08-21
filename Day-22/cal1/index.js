let butoon = document.querySelectorAll("button");

let asn = document.querySelector("#val")

let a = ""

butoon.forEach((el) => {

        el.addEventListener("click", () => {
                if (el.value != "=" && el.value != "C") {

                        a += el.value;
                        asn.value = a
                }

                if (el.value == "=") {
                        asn.value = eval(a);
                        a = ""
                }
                if (el.value == "C") {
                        a = ""
                        asn.value = ""

                }
        })
})

