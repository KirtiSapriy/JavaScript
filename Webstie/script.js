

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


function slide() {

        let slid = ["https://rukminim2.flixcart.com/fk-p-flap/1000/160/image/61775218f4487fe8.jpg?q=60",
                "https://rukminim2.flixcart.com/fk-p-flap/940/160/image/72b4e5f4aa467e40.jpg?q=20",
                "https://rukminim2.flixcart.com/fk-p-flap/940/160/image/d4a0fbda520cbbcc.jpg?q=20",
                "https://rukminim2.flixcart.com/fk-p-flap/940/160/image/61775218f4487fe8.jpg?q=20",
                "https://rukminim2.flixcart.com/fk-p-flap/940/160/image/d9290fb51138d286.png?q=20",
                "https://rukminim2.flixcart.com/fk-p-flap/940/160/image/db8559478c4a4a55.jpg?q=20"]

        let a = 0
        document.getElementById("slide").innerHTML = `<img src="${slid[a]}" class="h-full w-full">`
        setInterval(() => {
                a++;

                if (a > slid.length - 1) {
                        a = 0
                        document.getElementById("slide").innerHTML = `<img src="${slid[a]} "  class="h-full w-full">`
                }
                else {
                        document.getElementById("slide").innerHTML = `<img src="${slid[a]} "  class="h-full w-full">`

                }


        }, 4000)
        document.getElementById("add").addEventListener("click", () => {
                if (a < slid.length - 1) {
                        a++;
                        document.getElementById("slide").innerHTML = `<img src="${slid[a]}" class="h-full w-full" >`

                }
                else {
                        a = 0;
                        document.getElementById("slide").innerHTML = `<img src="${slid[a]} " class="h-full w-full" >`

                }

        })
        document.getElementById("dic").addEventListener("click", () => {
                if (a > 0) {
                        a--;
                        document.getElementById("slide").innerHTML = `<img src="${slid[a]} "  class="h-full w-full">`

                }
                else {
                        a = slid.length - 1;
                        document.getElementById("slide").innerHTML = `<img src="${slid[a]} "  class="h-full w-full">`
                }

        })




}
slide()

function data() {
        fetch(`http://localhost:3000/Product-data`)
                .then(res => res.json())
                .then((res) => {
                        document.querySelector("#div").innerHTML = add(res)

                })
                .catch(err => console.log(err));

}
data()


function add(data) {
        return data.map((el, i) => {
                if (i >= 15 && i <= 21) {
                        return `
                <div id="box" class=" h-[16rem] w-[13rem] rounded-lg mx-3">
                <a href="product.html">
                                <div id="img" class="h-[13rem] ">
                                        <img src="${el.Image}" class="h-full w-full" alt="">
                                </div>
                                <div id="info" class="h-[4rem] p-2">
                                        <h3 id="title" class="">${el.Title}</h3>
                                        <h4>₹ ${el.Price}</h4>
                                </div>
                        </div>
                `}
        }).join("")
}




