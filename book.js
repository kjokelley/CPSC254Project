class book{
    name;
    author;
    yearPublished;


constructor(name, author, yearPublished){
    this.name = name;
    this.author = author;
    this.yearPublished = yearPublished;
}

setName(name){
    this.name = name;
}

setAuthor(author){
    this.author = author;
}

setYearPublished(yearPublished){
    this.yearPublished = yearPublished;
}

getName(){
    return name;
}

getAuthor(){
    return author;
}

getYearPublished(){
    return yearPublished;
}




}