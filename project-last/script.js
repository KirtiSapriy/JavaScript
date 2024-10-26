

document.getElementById("form").addEventListener("submit", (event) => {

        event.preventDefault();


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
                        id: data.lenght + 1,
                        Img: img,
                        Title: title,
                        Price: price,
                        Rating: rant,
                        Discription: dis
                }

                fetch(`http://localhost:3000/data`, {
                        method: "POST",
                        headers: {

                                "Containt-Type": "appliction/json"
                        },
                        body: JSON.stringify(data)
                })
                        .then(res => res.json())
                        .then(res => console.log(res)
                        )
                        .catch(er => console.log(er))



        }
})
fetch(`http://localhost:3000/data`)
        .then(res => res.json())
        .then((res) => {
                document.querySelector("tbody").innerHTML = table(res)
        })
        .catch(er => console.log(er))

function table(data) {

        return data.map((el, i) => {
                return `
                <tr>
                        <td><img src="${el.Img}" alt="" /></td>
                        <td>${el.Title}</td>
                        <td>${el.Price}</td>
                        <td>${el.Rating}</td>
                        <td><button onclick="add(${el.id})">Update</button></td>
                        <td><button onclick="delet(${i})">Delete</button></td>

                </tr>`
        }).join("")


}


function add(el) {
        fetch(`http://localhost:3000/data/${el}`)
                .then(res => res.json())
                .then((res) => {
                        console.log(res);

                        let a = document.getElementById("ae").style.display = "block"

                        document.getElementById("img").value = res.Img
                        document.getElementById("title").value = res.Title
                        document.getElementById("price").value = res.Price
                        document.getElementById("rant").value = res.Rating
                        document.getElementById("dis").value = res.Discription

                        a.addEventListener("click", (aa) => {
                                aa.preventDefault()

                                let img = document.getElementById("img").value
                                let title = document.getElementById("title").value
                                let price = document.getElementById("price").value
                                let rant = document.getElementById("rant").value
                                let dis = document.getElementById("dis").value


                                let data = {
                                        Img: img,
                                        Title: title,
                                        Price: price,
                                        Rating: rant,
                                        Discription: dis
                                }


                                console.log(data);

                                res.splice(i, 1, data)
                                document.querySelector("tbody").innerHTML = table(res)
                        })



                })
                .catch(er => console.log(er))
        // document.getElementById("img").value = el.Img
        // document.getElementById("title").value = el.Title
        // document.getElementById("price").value = el.Price
        // document.getElementById("rant").value = el.Rating
        // document.getElementById("dis").value = el.Discription




}
function delet(i) {
        
        fetch(`http://localhost:3000/data`, {
                method: 'DELETE',
                headers: {
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        id: i,
                        reason: 'Outdated resource'
                })
        })
                .then(res => res.json())
                .then((res) => {
                        document.querySelector("tbody").innerHTML = table(res)

                })
                .catch(er => console.log(er))

}