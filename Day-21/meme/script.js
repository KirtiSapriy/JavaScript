
meme()


function meme() {
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

        ];

        let num = Math.round(Math.random() * imgs.length)
        console.log(num);
        let a = color()



        if (num >= 0 && num < imgs.length) {
                document.getElementById("main").innerHTML = `<div class="bg-${a} p-5 m-auto w-full overflow-hidden">

                <h2 class="text-3xl font-bold">Rendom img Generator</h2>

                <button onclick="meme()"
                        class="m-4 border border-2 border-black w-36 h-10 font-bold text-xl">click</button>

                        <div class=" p-4  lg:w-7/12  sm:w-11/12   m-auto overflow-hidden" style="height:80%">
                        <img class="m-auto w-full h-full overflow-hidden shadow-xl" src="${imgs[num]}"   >
                        </div>
                        </div>`
        }
        else {
                document.getElementById("main").innerHTML = `<div class="bg-${a}  m-auto w-full overflow-hidden">

                <h2 class="text-3xl font-bold">Rendom img Generator</h2>

                <button onclick="meme()"
                        class="m-4 border  w-36 h-10 font-bold text-xl">click</button>

                        <div class=" p-4  w-7/12    m-auto overflow-hidden" style="height:80%">
                        <img class="m-auto w-full h-full overflow-hidden shadow-xl" src="${imgs[0]}"   >
                        </div>
                        </div>`
        }
}





function color() {

        let a = [
                'orange-200',
                'violet-200',
                'orange-100',
                'teal-100',
                'blue-200',
                'emerald-100'

        ]

        let num = Math.round(Math.random() * a.length)

        if (num >= 0 && num < a.length) {

                return a[num];
        }
        else{
                return a[0]
        }

}
