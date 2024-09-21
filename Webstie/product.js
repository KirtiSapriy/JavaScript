function data() {
        fetch(`http://localhost:3000/Product-data`)
                .then(res => res.json())
                .then((res) => {
                        document.querySelector("#body").innerHTML = add(res)

                })
                .catch(err => console.log(err));

}
data()

function add(data) {
        return data.map((el, i) => {
                return `
                <div id="box" class="border-2 h-[25rem] w-[18rem] p-2 rounded-lg">
                                <div id="img" class="h-2/3 border-2">
                                        <img src="${el.Image}" class="h-full w-full" alt="">
                                </div>
                                <div id="info" class="h-1/3 border-2">
                                        <h3 id="title">${el.Title}</h3>
                                        <h4>${el.Price}</h4>
                                        <button onclick="cart(${el.id})">Add To Cart</button>
                                </div>
                        </div>
                `
        }).join("")
}

function cart(i) {
        fetch(`http://localhost:3000/Product-data/${i}`)
                .then(res => res.json())
                .then((res) => {
                        fetch(`http://localhost:3000/cart`,
                                {
                                        method: "POST",
                                        headers: {
                                                "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(res)
                                })
                                .then(res => res.json())
                                .then((res) => {

                                        console.log(res);


                                })
                                .catch(err => console.log(err));
                        // console.log(res);

                })
                .catch(err => console.log(err));

}