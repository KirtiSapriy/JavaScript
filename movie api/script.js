fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '894778389bmsha5673a4208b9f53p1ffed5jsn53924f1e8c21',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
})
    .then(res => res.json())
    .then((res) => {
        document.getElementById("box").innerHTML = movie(res)
    })
    .catch((er) => console.log(er))




function movie(data) {

    return data.map((el, i) => {

        return `   <div class="h-[24rem]  p-2 hover:shadow-md ">
        <div class="h-[17rem] p-2 flex  justify-center items-center">
            <img src="${el.image}" alt="" class="w-full  h-full">
        </div>
        <div class="h-[6rem]">
            <h1 class="mt-1 text-md font-bold" id="title"> ${i + 1}.${el.title}</h1>
            <p class="mt-1 text-sm font-bold"> <span class="text-red-200">Year : </span> ${el.year}  </p>
            <span class="mt-1 text-sm font-bold "><i class="fa fa-star text-yellow-400"></i> ${el.rating}  </span>
        </div>
    </div>
`

    }).join("")

}

