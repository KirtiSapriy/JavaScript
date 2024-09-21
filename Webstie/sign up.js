document.getElementById("form").addEventListener("submit", (a) => {
        a.preventDefault()

        let vl = true

        let Em = document.getElementById("em").value;
        let Pas = document.getElementById("pas").value;

        if (Em == "") {

                document.getElementById("em").style.border = "2px solid red"
                vl = false

        }
        else {
                document.getElementById("em").style.border = "2px solid "
        }
        if (Pas == "") {

                document.getElementById("pas").style.border = "2px solid red"
                vl = false

        }
        else {
                document.getElementById("pas").style.border = "2px solid "
        }

        if (vl) {
                let obj = {
                        email: Em,
                        Password: Pas
                }
                fetch(`http://localhost:3000/data?email=${obj.email}`)
                        .then(res => res.json())
                        .then((res) => {
                                if (res.length > 0) {
                                        alert("Email Already Exited")
                                }
                                else {
                                        data(obj)
                                }
                        })
                        .catch(er => console.log(er))
                function data(obj) {
                        fetch('http://localhost:3000/data', {
                                method: "POST",
                                headers: {
                                        "Content-Type": "application/json"
                                },
                                body: JSON.stringify(obj)
                        }).then(res => res.json())
                                .then(res => console.log(res))
                                .catch(er => console.log(er))
                }

                document.getElementById("em").value = ""
                document.getElementById("pas").value = ""




        }



})