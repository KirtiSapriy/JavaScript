


let totleprice = 0;

fetch(`http://localhost:3000/cart`)
        .then(res => res.json())
        .then((res) => {
                document.querySelector("tbody").innerHTML = cart(res)
                tprice()


        })
        .catch(err => console.log(err))



function cart(data) {
        document.getElementById("it").innerHTML = `(${data.length} Items)`

        return data.map((el, i) => {
                return `

                <tr id="row-${i}" class="">
                        <table>
                                <tr class=" ">
                                        <td class=" text-center" rowspan="3"><img src="${el.Image}" width="200px" ></td>
                                        <td class="p-2 w-96  " id="ti"> ${el.Title}</td>
                                </tr>
                                  <tr class=" h-12">
                                 <td> <span class="text-[14px]  bg-green-700 mx-1 text-center p-0.5 text-white rounded-sm">  ${el.rant.renting} <i class="fa fa-star text-[13px]"></i>  </span>
                                        <span class="text-[#717478]">(${el.rant.count})<span>
                                </td>
                                        </tr>
                                <tr class="h-10 font-bold ">
                                        <td class="price-${i} w-40 "> ₹  ${el.Price}</td>
                                </tr>
                              
                        </table>
                </tr>
                <tr class="h-14   ">
                        <td class="flex items-center jutify-evenly h-14  w-40 ">
                        <button id="dis${i}" class=" border w-10 h-7" onclick="dis(${el.Price},${i})">-</button>
                        <input type="number" id="in-${i}" value="0" class="w-20 h-7 px-3 border">
                        <button onclick="add(${el.Price}, ${i})" class=" w-10 h-7 border" id="add-${i}">+</button>
                        </td>
                        <td><a href="" class="font-bold ">SAVE FOR  LETER</a>
                        </td>
                        <td><a href="" class="font-bold ">REMOVE</a>
                        </td>
                </tr>
                `
        }).join("")

}


function tprice() {
        document.getElementById("tp").innerText = totleprice;

}

function add(price, i) {

        let id = document.getElementById(`in-${i}`).value;



        if (id >= 0) {
                id++;
                document.getElementById(`in-${i}`).value = id;
                totleprice += price
                tprice()


        }
        else {
                id = 0;
                document.getElementById(`in-${i}`).value = id;
                totleprice += price 
                tprice()



        }

}

function dis(price, i) {

        let id = document.getElementById(`in-${i}`).value;


        if (id >= 0) {
                id--;
                document.getElementById(`in-${i}`).value = id;

                totleprice -= price *
                tprice()



        }
        else {
                id = 1;
                document.getElementById(`in-${i}`).value = id;
                totleprice -= price  
                tprice()



        }



}

document.getElementById("po").addEventListener("click", () => {
        window.location.href = "index.html"
})



