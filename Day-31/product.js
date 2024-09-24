
fetch("https://fakestoreapi.com/products")
        .then((res) => {
                return res.json()
        })
        .then((res) => {

                document.querySelector("#main").innerHTML = cart(res)

                let id = document.getElementById('a').value;

        })
        .catch((err) => {
                console.log(err);

        })

function cart(data) {

        return data.map((el, i) => {
                return `
          <div class="box">
             <div id="im">
                 <img src="${el.image}" alt="${el.title}" /> 
             </div>
             <div id="info">
                  <h4>  ${el.title}</h4>
                  <h5>Price :- <span> $ ${el.price}</span> </h5> 
                  <h5>Category :- <span> ${el.category}</span> </h5>
             </div>
          </div>
        
        `
        }).join("")
}

