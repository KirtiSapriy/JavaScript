function obj(car) {
        car.drive = function () {
                return `Driving ${car.brand} ${car.model}`;
        }

        return car.drive()
}

console.log(obj({ brand: "Toyota", model: "Corolla", year: 2022 }));

