let students = [{ name: "John", age: 20, grade: "A" },
{ name: "Alice", age: 22, grade: "B" },
{ name: "Bob", age: 21, grade: "C" }]


students.forEach((el) => {
        if (el.age > 21){
                console.log(el.name);
        }
})