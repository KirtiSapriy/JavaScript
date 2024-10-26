

fetch(`http://localhost:3000/data`)
        .then(res => res.json())
        .then((res) => {

                document.getElementById("main").innerHTML = view(res)

        })
        .catch(er => console.log(er))

function view(d) {

        return d.map((el, i) => {
                return ` <div class=" h-[25rem]  p-2 w-[16rem] flex flex-col items-center justify-evenly"
                id="a">
                <div class=" w-full h-[15rem]"><img src="${el.Img}" alt="" class="h-full w-full"></div>
                <div class=" w-full h-32 px-2">
                        <p class="capitalize text-lg">${el.Title}</p>
                        <p>₹ ${el.Price}</p>
                        <p class="text-xs p-2 text-white "><span class="p-1 rounded-md bg-green-700 "> <span><i class="fa fa-star"></i></span> <span>${el.Rating}</span></span></p>

                        <button class=" p-2 rounded-lg     w-10/12 m-auto bg-green-700 text-white my-2" onclick="add(${el.id})">Add To Cart</button>
                </div>
        </div>`
        }).join("")
}

function add(id) {

        console.log(id);

        fetch(`http://localhost:3000/data/${id}`)
                .then(res => res.json())
                .then((res) => {
                        console.log(res);

                        fetch("http://localhost:3000/cart", {
                                method: "POST",
                                headers: {

                                        "Contain-tType": "appliction/json"
                                },
                                body: JSON.stringify(res)
                        })
                                .then(res => res.json())
                                .then(res => console.log(res))
                                .catch(er => console.log(er))
                })
                .catch(re => console.log(er))


}

