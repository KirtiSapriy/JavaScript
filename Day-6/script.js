function leap() {

        let year = document.getElementById("leap").value;


        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                document.getElementById('p').innerText = "Leap year";
        }
        else {
                document.getElementById('p').innerText = "Not a Leap year";

        }

}

function vote() {
        let age = document.getElementById("age").value;
        let citi = document.getElementById("citi").value;

        if (age >= 18 && citi == "yes" || citi == "true") {

                document.getElementById("h").innerText = "You are eligible to vote";
        }
        else {
                document.getElementById("h").innerText = "You are not eligible to vote";

        }


}
function temper() {


        let tem = document.getElementById("tem").value;

        if (tem >= 30) {
                document.getElementById("t").innerText = "temperature is Hot."
        }
        else {
                document.getElementById("t").innerText = "Temperature is Moderate"
        }
}
function numb() {

        let num = document.getElementById("number").value;

        if (num % 2 == 0) {
                document.getElementById("n").innerHTML = "Even number"
        }
        else {
                document.getElementById("n").innerHTML = "Odd number"

        }
}

function intrest() {
        let pr = document.getElementById("pr").value;
        let r = document.getElementById("r").value;
        let t = document.getElementById("t").value;

        if (pr > 0 && r > 0 && t > 0) {
                document.getElementById("intr").innerHTML = (pr * r * t / 100);
        }
        else {
                document.getElementById("intr").innerHTML = "Place Enter Positiv value";

        }

}
function pas() {
        let a = "12345";

        let b = document.getElementById("pas").value;

        if (b == a) {
                alert("password is same");
        }
        else {
                alert("password are not same")
        }
}
function char() {

        let char = document.getElementById("char").value

        if (char == 'A' || char == 'a' || char == 'E' || char == 'e' || char == 'I' || char == 'i' || char == 'O' || char == 'o' || char == 'U' || char == 'U') {
                document.getElementById("al").innerText = " This is Vowel "
        }
        else {
                document.getElementById("al").innerText = " This is Consonant"
        }

}
function access() {
        let age = document.getElementById("age").value;

        if (age >= 13) {
                document.getElementById("ac").innerText = "You are Access";
        }
        else {
                document.getElementById("ac").innerText = "You are not Eligible";

        }
}
function num() {
        let num = document.getElementById("num").value;

        if (num % 3 == 0 && num % 5 == 0) {
                document.getElementById("nm").innerText = "This  number is divisible by both 3 and 5";

        }
        else {
                document.getElementById("nm").innerText = "This  number is not divisible by both 3 and 5";

        }
}