
document.querySelector("#mod").addEventListener("click", () => {

        document.querySelector("#Mbox").style.display = "block"
        document.getElementById("Modal").style.filter = "blur(10px)";
        document.querySelector("#mod").style.display = "none";



})

document.querySelector("#btn").addEventListener("click", () => {

        document.querySelector("#Mbox").style.display = "none"
        document.getElementById("Modal").style.filter = "blur(0px)";
        document.querySelector("#mod").style.display = "block";


})


document.querySelector("#Modal").addEventListener("click", () => {

        document.querySelector("#Mbox").style.display = "none"
        document.querySelector("#mod").style.display = "block";


})