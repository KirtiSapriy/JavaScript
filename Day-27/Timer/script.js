let dispaly = document.querySelector("#dispaly");

let start = document.querySelector("#start");
let reset = document.querySelector("#reset");


let Second = `00`;
let Minute = `01`;
let Houer = `00`
Number(Second, Minute, Houer)

dispaly.innerHTML = `${Houer} : ${Minute} : ${Second}  `;

let setTime;
start.addEventListener("click", () => {
        setTime = setInterval(() => {
                if (Second == 0) {
                        Second = 59;
                        Minute--;

                        if (Minute < 0) {
                                Houer--;
                                Minute = 59;


                                if (Houer < 0) {
                                        alert("Time's up")
                                        clearInterval(setTime)
                                        Minute = `00`;
                                        Second = `00`;
                                        Houer = `00`;
                                        dispaly.innerHTML = `${Houer} : ${Minute} : ${Second}  `;

                                }

                        }




                }
                dispaly.innerHTML = `${Houer} : ${Minute} : ${Second}  `;

                Second--



        }, 1000)

})

reset.addEventListener("click", () => {
        Minute = `01`;
        Second = `00`;
        Houer = `00`;
        dispaly.innerHTML = `${Houer} : ${Minute} : ${Second}  `;

        clearInterval(setTime)



})

