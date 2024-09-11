
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let main = document.getElementById("cart");

console.log(cart);


a();
function a() {

        main.innerHTML = "";

        cart.forEach((el, i) => {

                let div = document.createElement("div")
                div.setAttribute("class", "cart-box")



                let img = document.createElement("img")
                img.setAttribute("src", el.Image)
                img.setAttribute("height", "200px")
                img.setAttribute("width", "200px")
                img.setAttribute("class", "cart-img")



                let title = document.createElement("h1")
                title.setAttribute("class", "title")

                title.append(el.Title)

                let price = document.createElement("span")
                price.setAttribute("class", "price")

                price.append(el.Price)

                let btn = document.createElement("button")
                btn.setAttribute("class", "btn")

                btn.innerText = `delete`
                btn.addEventListener("click", () => {
                        cart.splice(i, 1);

                        localStorage.setItem("cart", JSON.stringify(cart))

                        a();
                })
                div.append(img, title, price, btn)
                main.append(div)
        });
}

