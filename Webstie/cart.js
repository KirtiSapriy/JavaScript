


let totleprice = 0;

fetch(`http://localhost:3000/cart`)
        .then(res => res.json())
        .then((res) => {
                document.querySelector("tbody").innerHTML = cart(res)
                tprice()


        })
        .catch(err => console.log(err))

function tprice() {
        document.getElementById("tp").innerText = totleprice;

}

function cart(data) {
        return data.map((el, i) => {
                return `

                <tr id="row-${i}" class="">
                        <td class="w-40 text-center"><img src="${el.Image}" width="200px" ></td>
                        <td class="p-2 w-40 text-center"> ${el.Title}</td>
                        <td class="price-${i} w-40 text-center">${el.Price}</td>
                        <td class="flex items-center jutify-evenly w-40 text-center">
                        <button id="dis${i}" onclick="dis(${el.Price},${i})">-</button>
                        <input type="number" id="in-${i}" value="1" class="w-20 px-3">
                        <button onclick="add(${el.Price}, ${i})" id="add-${i}">+</button>
                        </td>
                </tr>
                `
        }).join("")
}

function add(price, i) {

        let id = document.getElementById(`in-${i}`).value;



        if (id >= 1) {
                id++;
                document.getElementById(`in-${i}`).value = id;
                totleprice += (price * id)
                tprice()


        }
        else {
                id = 1;
                document.getElementById(`in-${i}`).value = id;
                totleprice += (price * id)
                tprice()



        }

}

function dis(price, i) {

        let id = document.getElementById(`in-${i}`).value;


        if (id >= 1) {
                id--;
                document.getElementById(`in-${i}`).value = id;

                totleprice -= (price * id)
                tprice()



        }
        else {
                id = 1;
                document.getElementById(`in-${i}`).value = id;
                totleprice -= (price * id)
                tprice()



        }



}

document.getElementById("po").addEventListener("click", () => {
        window.location.href = "index.html"
})



