
let imgs = [
        'https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/09/13/08/16/purple-flower-6620617_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/10/29/13/21/waterfall-8350178_960_720.jpg',
        'https://cdn.pixabay.com/photo/2024/03/20/06/18/ai-generated-8644732_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/09/04/13/17/mushrooms-8232731_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/10/11/04/08/water-lilies-8307632_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_960_720.jpg',
        'https://cdn.pixabay.com/photo/2024/05/09/17/24/shih-tzu-8751508_960_720.jpg',
        'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_960_720.jpg',
        'https://cdn.pixabay.com/photo/2024/03/11/12/33/crow-8626517_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/12/03/21/33/butterfly-8428279_1280.jpg'
]

let a = 0;

let img = document.querySelector("#slide");

img.innerHTML = ` <img src=${imgs[a]} alt=${imgs[a]}  class="h-full w-full"  />`


let p = document.querySelector("#perv");
let nex = document.querySelector("#next");

nex.addEventListener("click", ne);
p.addEventListener("click", per);


function ne() {

        if (a < imgs.length - 1) {
                a++
        }
        else {
                a = 0;
        }
        img.innerHTML = `<img src=${imgs[a]} alt=${imgs[a]} class="h-full w-full" />`


}
function per() {

        if (a > 0) {
                a--
        }
        else {
                a = imgs.length - 1;
        }
        img.innerHTML = `<img src=${imgs[a]} alt=${imgs[a]} class="h-full w-full" />`


}
