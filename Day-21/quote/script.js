

do {

        quote();


} while (false);



function quote() {

        let quotes = [
                {
                        quote: "The best way to predict the future is to create it.",
                        po: "Abraham Lincoln"
                },
                {
                        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
                        po: "Abraham Lincoln"
                },
                {
                        quote: "Believe you can and you're halfway there.",
                        po: "Theodore Roosevelt"
                },
                {
                        quote: "It does not matter how slowly you go as long as you do not stop.",
                        po: "Confucius"
                },
                {
                        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
                        po: "Franklin D.Roosevelt"
                },

                {
                        quote: "Be yourself; everyone else is already taken.",
                        po: "Oscar Wilde"
                },

                {
                        quote: "The only way to do great work is to love what you do.",
                        po: "Steve Jobs"
                },
        ]

        let num = Math.round(Math.random() * quotes.length);
        console.log(num);

        if (num >= 0 && num < quotes.length) {

                document.getElementById("quote").innerHTML = `<h1 class="text-2xl  my-3">${quotes[num].quote}</h1> <p class=" font-bold"> - ${quotes[num].po}</p>`;
        }
        else {
                document.getElementById("quote").innerHTML = `<h1 class="text-2xl  my-3">${quotes[0].quote}</h1> <p class=" font-bold"> - ${quotes[0].po}</p>`;


        }
} 