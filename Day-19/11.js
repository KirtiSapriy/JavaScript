function obj(book) {
        book.read  = function () {
                return `Driving ${book.title} by ${book.authora}`;
        }

        return book.read()
}

console.log(obj({ title: "Harry Potter", author: "J.K. Rowling", pages: 400 }));


