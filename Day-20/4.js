let cars = [{ brand: "Toyota", model: "Corolla", year: 2022 },
{ brand: "Honda", model: "Civic", year: 2021 },
{ brand: "Ford", model: "Fusion", year: 2020 }]


cars.forEach((el) => {

    console.log(` Brand : ${el['brand']} , model : ${el['model']}  `);

})