function leap() {

        let year = document.getElementById("year").value;


        if (year % 4 == 0 || year % 400 == 0) {
                document.getElementById("ans").innerHTML = `<h1 class="text-sky-400"> Leap Year<h1>`;
        }
        else {
                document.getElementById("ans").innerHTML = `<h1 class="text-sky-400">Not a Leap Year<h1>`;

        }
}

function largest() {

        let a = Number(document.getElementById("a").value);
        let b = Number(document.getElementById("b").value);
        let c = Number(document.getElementById("c").value);



        max = a > b && a > c ? a : b > a && b > c ? b : c;
        min = a < b && a < c ? a : b < a && b < c ? b : c;


        if (a < max && a > min) {
                document.getElementById("ans").innerHTML = `second large is ` + a;
        }
        if (b < max && b > min) {
                document.getElementById("ans").innerHTML = ` second large is ` + b;
        }
        if (c < max && c > min) {
                document.getElementById("ans").innerHTML = ` second large is ` + c;
        }
}
function reng() {

        let a = Number(document.getElementById("a").value);
        let b = Number(document.getElementById("b").value);
        let c = Number(document.getElementById("c").value);





        if (a < c && c < b) {
                document.getElementById("ans").innerHTML = `<h1 class="text-sky-400">Raeng</h1>`;
        }
        else {
                document.getElementById("ans").innerHTML = `<h1 class="text-sky-400">out Raeng</h1>`;
        }
}

function gpa() {

        let grad = document.getElementById("gpa").value;

        switch (true) {
                case +grad >= 90 && +grad <= 100:
                        document.getElementById("ans").innerHTML = `<h1 class="text-sky-400">Your GPA  4.0</h1>`
                        break;
                case +grad >= 80 && +grad < 90:
                        document.getElementById("ans").innerHTML = `< h1 class="text-sky-400" > Your GPA  3.0</h1>`
                        break;
                case +grad >= 70 && +grad < 80:
                        document.getElementById("ans").innerHTML = `<h1 class="text-sky-400">Your GPA  2.0</h1>`
                        break;
                case +grad >= 60 && +grad < 70:
                        document.getElementById("ans").innerHTML = `< h1 class="text-sky-400" > Your GPA  1.0</h1>`
                        break;
                case +grad < 60:
                        document.getElementById("ans").innerHTML = `<h1 class="text-sky-400">Your GPA  0.0</h1>`
                        break;

        }
}

function loan() {

        let income = document.getElementById("sel").value;
        let credit = document.getElementById("credit").value;
        let amount = document.getElementById("lamount").value;

        switch (true) {
                case income > 50000 && credit > 700 && amount < (income / 2):
                        document.getElementById('ans').innerHTML = `< h1 class="text-sky-400" > Eligible`;
                        break;
                case income < 50000 && credit < 700 && amount > (income / 2):
                        document.getElementById('ans').innerHTML = `< h1 class="text-sky-400" > Not Eligible`;
                        break;
                default:
                        document.getElementById('ans').innerHTML = `< h1 class="text-sky-400" > wrong input</h1 > `;

        }
}