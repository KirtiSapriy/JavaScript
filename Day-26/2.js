

class myLaptop {
        constructor(brand, model, price) {
                this.Brand = brand;
                this.Model = model;
                this.Price = price;

        }
        showDetail() {
                console.log(`MyLeptop Brand = ${this.Brand} Model = ${this.Model} and Price is ${this.Price}`);

        }
}

let myLaptop1 = new myLaptop("Dell", "XPS 15", 1500)

myLaptop1.showDetail()