let data = [];
let tbody = document.querySelector("tbody");

document.getElementById("Form").addEventListener("submit", (form) => {
        form.preventDefault();
        let r = true

        let img = document.getElementById("src").value;
        let title = document.getElementById("title").value;
        let price = document.getElementById("price").value;


        let regex = / ("|').*?\b([a-z0-9]{32})\b.*?\1.*? /;
        if (img == "" || regex.test(img)) {
                document.getElementById("src").style.border = "2px solid red"
                r = false
        }
        else {
                document.getElementById("src").style.border = "2px solid "
        }
        if (title == "") {
                document.getElementById("title").style.border = "2px solid red"
                r = false
        }
        else {
                document.getElementById("title").style.border = "2px solid "
        }
        if (price == "") {
                document.getElementById("price").style.border = "2px solid red"
                r = false
        }
        else {
                document.getElementById("price").style.border = "2px solid "
        }

        if (r) {
                document.getElementById("src").style.border = "2px solid "

                document.getElementById("title").style.border = "2px solid "

                document.getElementById("price").style.border = "2px solid "

                Number(price)

                let dataObj = {
                        Image: img,
                        Title: title,
                        Price: price
                }
                data.push(dataObj)
                console.log(data);
        }


        table();



})

function table() {

        tbody.innerHTML = "";

        data.forEach((el, i) => {
                let tr = document.createElement("tr");

                let td1 = document.createElement("td");
                let img = document.createElement("img")
                img.setAttribute("src", el.Image)
                img.setAttribute("height", "100px")
                img.setAttribute("width", "100px")

                td1.append(img)

                let td2 = document.createElement("td");
                td2.append(el.Title)
                let td3 = document.createElement("td");
                td3.append(el.Price)
                let td4 = document.createElement("td");
                let btn1 = document.createElement("button")
                btn1.innerText = `Add to cart`
                td4.append(btn1)
                let td5 = document.createElement("td");
                let btn2 = document.createElement("button")
                btn2.innerText = `Delete`
                btn2.addEventListener("click", () => {
                        data.splice(i, 1)
                        table()
                })
                td5.append(btn2)


                tr.append(td1, td2, td3, td4, td5)


                tbody.append(tr)
        })



}


