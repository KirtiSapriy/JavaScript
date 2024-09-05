let count = document.querySelector("#count");

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let Millisecond = `00`;
let Second = `00`;
let Minute = `00`;
Number(Millisecond, Second, Minute)

count.innerHTML = `${Minute} : ${Second} : ${Millisecond} `;

let setTime;
start.addEventListener("click", () => {
        setTime = setInterval(() => {
                Millisecond++
                if (Millisecond > 100) {
                        Millisecond = `00`;
                        Second++;
                }
                if (Second > 60) {
                        Minute++;
                        Second = `00`;
                }
                if (Minute > 60) {
                        Houer++;
                        Minute = `00`;
                }
                count.innerHTML = `${Minute} : ${Second} : ${Millisecond} `;

        }, 10)

})
stop.addEventListener("click", () => {
        clearInterval(setTime)


})
reset.addEventListener("click", () => {
        Millisecond = `00`;
        Second = `00`;
        Minute = `00`;
        count.innerHTML = `${Minute} : ${Second} : ${Millisecond} `;
        clearInterval(setTime)

})
let d = Date.now();
console.log();
