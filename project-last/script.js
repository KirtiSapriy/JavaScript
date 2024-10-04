

document.getElementById("form").addEventListener("submit", (a) => {

        a.preventDefault();

        let img = document.getElementById("img").value
        let title = document.getElementById("title").value
        let price = document.getElementById("price").value
        let rant = document.getElementById("rant").value
        let dis = document.getElementById("dis").value

        let t = true

        if (img == "") {
                document.getElementById("img").style.border = "2px solid red"
                t = false
        }
        else {
                document.getElementById("img").style.border = "2px solid"
        }
        if (title == "") {
                document.getElementById("title").style.border = "2px solid red"
                t = false
        }
        else {
                document.getElementById("title").style.border = "2px solid"
        }
        if (price == "") {
                document.getElementById("price").style.border = "2px solid red"
                t = false
        }
        else {
                document.getElementById("price").style.border = "2px solid"
        }
        if (rant == "") {
                document.getElementById("rant").style.border = "2px solid red"
                t = false
        }
        else {
                document.getElementById("rant").style.border = "2px solid"
        }
        if (dis == "") {
                document.getElementById("dis").style.border = "2px solid red"
                t = false
        }
        else {
                document.getElementById("dis").style.border = "2px solid"
        }

        if (t) {
                let data = {
                        Img: img,
                        Title: title,
                        Price: price,
                        Ranting: rant,
                        Discription: dis
                }

                fetch(`http://localhost:3000/data`, {
                        method: "POST",
                        headers: {

                                "ContaintType": "appliction/json"
                        },
                        body: JSON.stringify(data)
                })
                        .then(res => res.json())
                        .then((res) => {

                                document.querySelector("tbody").innerHTML = table(res)
                        }
                        )
                        .catch(er => console.log(er))

        }
})
