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
                                        window.location.href = "index.html"
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

                window.location.href = "login.html"




        }



})

function visible() {
        document.getElementById("a1").style.visibility = "visible";
        document.getElementById("a").style.visibility = "hidden";
        document.getElementById("drop").style.visibility = "visible";


}
function vis() {
        document.getElementById("a").style.visibility = "visible";
        document.getElementById("a1").style.visibility = "hidden";
        document.getElementById("drop").style.visibility = "hidden";

}

function visi() {
        document.getElementById("me").style.visibility = "visible";
}

function invi() {
        document.getElementById("me").style.visibility = "hidden";
}