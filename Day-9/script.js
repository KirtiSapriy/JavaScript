function month() {

        let month = document.getElementById("month").value;

        switch (+month) {
                case 12:
                case 1:
                case 2:
                        document.getElementById("ans").innerText = "Winter Season";
                        break;
                case 3:
                case 4:
                case 5:

                        document.getElementById("ans").innerText = "Spring Season";
                        break;

                case 6:
                case 7:
                case 8:
                        document.getElementById("ans").innerText = "Summer Season";
                        break;

                case 9:
                case 10:
                case 11:
                        document.getElementById("ans").innerText = "Autumn Season";
                        break;

                default:
                        document.getElementById("ans").innerText = "Invalid month number.";

        }
}

function char() {

        let char = document.getElementById("char").value;

        switch (char) {
                case 'A':
                case 'a':
                case 'E':
                case 'e':
                case 'I':
                case 'i':
                case 'O':
                case 'o':
                case 'U':
                case 'u':
                        document.getElementById("ans").innerHTML = "character is vowels";
                        break;
                case 'B':
                case 'C':
                case 'D':
                case 'F':
                case 'G':
                case 'H':
                case 'J':
                case 'K':
                case 'L':
                case 'M':
                case 'N':
                case 'P':
                case 'Q':
                case 'R':
                case 'S':
                case 'T':
                case 'V':
                case 'W':
                case 'X':
                case 'Y':
                case 'Z':
                case 'b':
                case 'c':
                case 'd':
                case 'f':
                case 'g':
                case 'h':
                case 'j':
                case 'k':
                case 'l':
                case 'm':
                case 'n':
                case 'p':
                case 'q':
                case 'r':
                case 's':
                case 't':
                case 'v':
                case 'w':
                case 'x':
                case 'y':
                case 'z':
                        document.getElementById("ans").innerHTML = "character is Consonant";
                        break;

                default:
                        document.getElementById("ans").innerHTML = "This is not character ";






        }
}

function age() {

        let age = Number(document.getElementById("age").value);

        switch (true) {
                case age > 0 && age <= 12:
                        document.getElementById("ans").innerText = "You Are Child"
                        break;
                case age > 12 && age <= 19:
                        document.getElementById("ans").innerText = "You Are Teen"
                        break;
                case age > 19 && age <= 60:
                        document.getElementById("ans").innerText = "You Are Adult"
                        break;
                case age > 60:
                        document.getElementById("ans").innerText = "You Are Senior"
                        break;
                default:
                        document.getElementById("ans").innerText = "wrong input"
        }
}


function cal() {

        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let sing = document.getElementById("sing").value;

        switch (sing) {
                case "+":
                        document.getElementById("ans").innerText = +a + +b;
                        break;

                case "-":
                        document.getElementById("ans").innerText = +a - +b;
                        break;
                case "*":
                        document.getElementById("ans").innerText = +a * +b;

                        break;
                case "/":
                        if (a != 0 || b != 0) {
                                document.getElementById("ans").innerText = +a / +b;
                        }
                        else {
                                document.getElementById("ans").innerText = "Wrong Input";

                        }
                        break;
                case "%":
                        if (a != 0 || b != 0) {
                                document.getElementById("ans").innerText = +a % +b;
                        }
                        else {
                                document.getElementById("ans").innerText = "Wrong Input";

                        }
                        break;

                default:
                        document.getElementById("ans").innerText = "Wrong Input";
        }


}


function triangle() {

        let a = Number(document.getElementById("fs").value);
        let b = Number(document.getElementById("ss").value);
        let c = Number(document.getElementById("ts").value);

        switch (true) {
                case a + b > c && a + c > b && b + c > a:
                        switch (true) {
                                case a == b && b == c:
                                        document.getElementById("ans").innerText = " This Triagle is Equilateral"
                                        break;
                                case a == b || b == c || c == a:
                                        document.getElementById("ans").innerText = " This Triagle is Isosceles "
                                        break;

                                default:
                                        document.getElementById("ans").innerText = " This Triagle is Scalene"
                        }
                        break;
                case a < 0 || b < 0 || b < 0:
                        document.getElementById("ans").innerText = "Not  a Valid triangle";
                        break;
                default:
                        document.getElementById("ans").innerText = "Place Enter Value";


        }




}