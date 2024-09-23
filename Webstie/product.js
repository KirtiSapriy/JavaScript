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

                if (i < 15) {
                        return `
                
                <div id="box" class=" sm:w-full p-2 my-2 sm:h-auto lg:h-[29rem] lg:w-[15rem]  hover:shadow-lg  transition ease-in-out delay-150">
                                <div id="img" class="h-[17rem]  relative p-3 flex items-center justify-center ">
                                <i class="fa fa-heart absolute right-4 top-2 text-[#d2d2d3]"></i>                
                                                        <img src="${el.Image}" class="h-full w-auto " alt="">
                                </div>
                                <div id="info" class="h-[11rem]  flex flex-col justify-evenly p-2">
                                
                                        <h3 id="title" class="mt-3">${el.Title}</h3>
                                        <h2 class=" mt-3"><span class="text-[14px]  bg-green-700 mx-1 text-center p-0.5 text-white rounded-sm">  ${el.rant.renting} <i class="fa fa-star text-[13px]"></i>  </span>
                                        <span class="text-[#717478]">(${el.rant.count})<span>
                                        </h2>
                                        
                                        
                                        <h4 class="font-bold mt-3">₹ ${el.Price}</h4>
                                        <button onclick="cart(${el.id})" class=" mt-3 w-32 border-2 rounded-lg h-9 border-green-700 text-green-700 hover:text-white hover:bg-green-700 ">Add To Cart</button>
                                </div>
                        </div>
                `
                }
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



function visible() {
        document.getElementById("a1").style.visibility = "visible";
        document.getElementById("a").style.visibility = "hidden";
        document.getElementById("drop").style.visibility = "visible";


}
function vis() {
        document.getElementById("a").style.visibility = "visible";
        document.getElementById("a1").style.visibility = "hidden";
        document.getElementById("drop").style.visibility = "hidden";

}

function visi() {
        document.getElementById("me").style.visibility = "visible";
}

function invi() {
        document.getElementById("me").style.visibility = "hidden";
}



reng()
function reng() {
        let slider = document.getElementById("reng");
        let output = document.getElementById("value");
        output.append(slider.value);

        slider.oninput = function () {
                output.innerHTML = this.value;
        }
}