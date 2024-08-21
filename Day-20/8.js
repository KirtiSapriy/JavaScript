let  employees = [{ name: "John", position: "Manager", salary: 65000 },
{ name: "Alice", position: "Developer", salary: 55000 },
{ name: "Bob", position: "Designer", salary: 70000 }]


 employees.forEach((el) => {
        if (el.salary > 60000) {
                console.log(el.name);
        }
})
