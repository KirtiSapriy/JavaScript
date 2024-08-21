function obj(book) {
        delete book.pages;
        return book
}

console.log(obj({ title: "Harry Potter", author: "J.K. Rowling", pages: 400 }));


