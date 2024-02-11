books=[
    {
        title:"The great gatsby",
        auther:"F. Scott Fitzgerald",
        year:1925
    },
    {
        title:"To kill a mockingbard",
        auther:"Harper Lee",
        year:1960
    },
    {
        title:"Who are you?",
        auther:"Geroge Orwell",
        year:1949
    },
    {
        title:"Pride and Prejudic",
        auther:"Jane Austen",
        year:1913
    },
]

function alphabeticalOrder(titles){
    titles.sort()
    console.log(titles.join(", "));
}

function result(books, callback){
    const titles=books.map((book)=>{
        book.titles
    })
    callback(titles)
}
result(books, alphabeticalOrder)