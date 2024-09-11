
let data = []

document.querySelector("form").addEventListener("submit", (form) => {
        form.preventDefault();

        document.querySelector("#Ns").innerText = "";
        document.querySelector("#Nm").style.border = "2px solid sky"
        document.querySelector("#Es").innerText = "";
        document.querySelector("#Ps").innerText = "";


        let valid = true;

        email = document.querySelector("#Em").value;
        username = document.querySelector("#Nm").value;
        password = document.querySelector("#Pw").value;

        if (username == "") {
                document.querySelector("#Ns").innerText = "Enter Name";
                document.querySelector("#Nm").style.border = "2px solid red"
                valid = false

        }
        else if (username.length < 6) {
                document.querySelector("#Ns").innerText = "Not Valid Name Lenght";
                document.querySelector("#Nm").style.border = "2px solid red"
                valid = false
        }

        if (email == "") {
                document.querySelector("#Es").innerText = "Email is Compulsory"
                valid = false
        }

        if (password.length < 8) {
                document.querySelector("#Ps").innerText = "password length must be 8"
                valid = false
        }

        console.log(username, email, password);

        if (valid) {
                let dat = {
                        username: username,
                        email: email,
                        password: password
                }

                data.push(dat)

                console.log(data);

        }


})