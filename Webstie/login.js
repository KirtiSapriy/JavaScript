
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



        fetch(`http://localhost:3000/data?email=${Em}`)
                .then(res => res.json())
                .then((res) => {
                        if (res.length == 0) {
                                alert("Email is Not valid")
                        }
                        else {
                                if (res[0].Password == Pas) {
                                        alert("Login SuccessFully")
                                        window.location.href = "index.html"
                                }
                                else {
                                        alert("Password is inCorect")
                                        
                                }
                        }
                })
                .catch(er => console.log(er))

        Em.value = ""
        Pas.value = ""

})