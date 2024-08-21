class myLaptop {
        constructor(brand, model, price) {
                this.Brand = brand;
                this.Model = model;
                this.Price = price;

        }
        showDetail() {
                let a = 1
                console.log(`MyLeptop Brand = ${this.Brand}  \n         Model = ${this.Model} \n         Price = ${this.Price}`);


        }
}

let myLaptop1 = new myLaptop("Dell", "XPS 15", 264090);
let myLaptop2 = new myLaptop("ASUS", "F15 FX506HC-HN362WS", 63990);
let myLaptop3 = new myLaptop("Lenovo", "Yoga Slim 7x", 150990);
let myLaptop4 = new myLaptop("MSI ", "11SC-1477IN", 48, 790);
let myLaptop5 = new myLaptop("HP", " Envy x360 14", 99999);
let myLaptop6 = new myLaptop("Apple", "MKGQ3HN/A", 222990);
let myLaptop7 = new myLaptop("LG", "Gram Thin 13Z980-U.AAW5U1", 113900);
let myLaptop8 = new myLaptop("Microsoft", "QEZ-00065", 98990);
let myLaptop9 = new myLaptop("Samsung", "NP750XGK-KG1IN", 70990);
let myLaptop10 = new myLaptop("Razer", "RZ09-02386E52-R3U1", 313536);


myLaptop1.showDetail()
myLaptop2.showDetail()
myLaptop3.showDetail()
myLaptop4.showDetail()
myLaptop5.showDetail()
myLaptop6.showDetail()
myLaptop7.showDetail()
myLaptop8.showDetail()
myLaptop9.showDetail()
myLaptop10.showDetail()



