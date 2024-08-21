let data = [];

document.querySelector("#sing1").addEventListener("submit", (form) => {

        document.querySelector("#Ns").innerText = "";
        document.querySelector("#Es").innerText = "";
        document.querySelector("#Ps").innerText = "";

        form.preventDefault();

        let valid = true

        let username = document.querySelector("#Nm").value;
        let email = document.querySelector("#Em").value;
        let password = document.querySelector("#Pw").value;

        if (username == "") {
                document.querySelector("#Ns").innerText = "Enter Your Name";
                document.querySelector("#Nm").style.border = "2px solid red";

                valid = false;
        }
        else if (username.lenght < 5) {
                document.querySelector("#Ns").innerText = "Name lenght is smale";
                document.querySelector("#Nm").style.border = "2px solid red";
                valid = false;
        }
        else if (valid) {
                document.querySelector("#Nm").style.border = "2px solid rgb(14 165 233)";
        }


        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if (email == "" || regex.test(password)) {

                document.querySelector("#Es").innerText = "Enter Email";
                document.querySelector("#Em").style.border = "2px solid red";

                valid = false;

        }
        else if (valid) {

                document.querySelector("#Em").style.border = "2px solid rgb(14 165 233)";
        }



        let regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

        if (password == "" || regex2.test(regex)) {

                document.querySelector("#Ps").innerText = "Enter Password";
                document.querySelector("#Pw").style.border = "2px solid red";

                valid = false;

        }
        else if (valid) {
                document.querySelector("#Pw").style.border = "2px solid rgb(14 165 233)";
        }


        if (valid) {




                let obj = {
                        UN: username,
                        EM: email,
                        PW: password,
                }


                data.push(obj)
                console.log(data);

                document.querySelectorAll("input").style.border = "2px solid skyblue";




                document.querySelector("#Nm").value = ""
                document.querySelector("#Em").value = ""
                document.querySelector("#Pw").value = ""

                Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                });

        }




})

document.querySelector("#login1").addEventListener("submit", (form) => {

        form.preventDefault();

        valid1 = true

        let email1 = document.querySelector("#Em1").value;

        let password1 = document.querySelector("#Pw1").value

        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if (email1 == "" || regex.test(email1)) {

                document.querySelector("#Es1").innerText = "Enter Email";
                document.querySelector("#Em1").style.border = "2px solid red";

                valid1 = false;

        }



        let regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

        if (password1 == "" || regex2.test(password1)) {

                document.querySelector("#Ps1").innerText = "Enter Password";
                document.querySelector("#Pw1").style.border = "2px solid red";

                valid1 = false;

        }


        if (valid1) {

                let us = data.filter((el) => {

                        if (el.EM == email1 && el.PW == password1) {
                                return el
                        }
                })

                if (us.length > 0) {

                        Swal.fire({
                                title: "Good job!",
                                text: "You clicked the button!",
                                icon: "success"
                        });
                }
                else {
                        Swal.fire({
                                title: "Good job!",
                                text: "You clicked the button!",
                                icon: "unsuccess"
                        });

                }
        }
})



document.querySelector("#log").addEventListener("click", () => {
        document.querySelector("#login").style.display = "block";
        document.querySelector("#sing").style.display = "none";



})
document.querySelector("#sin").addEventListener("click", () => {
        document.querySelector("#login").style.display = "none";
        document.querySelector("#sing").style.display = "block";


})

