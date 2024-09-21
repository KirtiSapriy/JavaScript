let tbody = document.querySelector("tbody");


document.getElementById("form").addEventListener("submit", (form) => {
        form.preventDefault();

        let res = true

        let img = document.getElementById("Pi").value;
        let title = document.getElementById("Pt").value;
        let price = document.getElementById("Pp").value;
        let quntity = document.getElementById("Pq").value;


        if (img == "") {
                document.getElementById("pi").style.border = "2px solid red"
                res = false
        }
        else {
                document.getElementById("Pi").style.border = "2px solid "
        }
        if (title == "") {
                document.getElementById("Pt").style.border = "2px solid red"
                res = false
        }
        else {
                document.getElementById("Pt").style.border = "2px solid "
        }
        if (price == "") {
                document.getElementById("Pp").style.border = "2px solid red"
                res = false
        }
        else {
                document.getElementById("Pp").style.border = "2px solid "
        }

        if (quntity == "") {
                document.getElementById("Pq").style.border = "2px solid red"
                res = false
        }
        else {
                document.getElementById("Pq").style.border = "2px solid "
        }
        if (res) {


                let obj = {
                        Image: img,
                        Title: title,
                        Price: price,
                        Quntity: quntity

                }


                fetch(`http://localhost:3000/Product-data`, {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify(obj)
                }).then(res => res.json())
                        .then((res) => {
                                console.log(res);

                        })
                        .catch(er => console.log(er))





                document.getElementById("src").value = ""
                document.getElementById("title").value = ""
                document.getElementById("price").value = ""
                document.getElementById("quntity").value = ""
        }

})

