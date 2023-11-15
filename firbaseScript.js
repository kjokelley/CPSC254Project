function addBook(name){
    const db = getDatabase();
    set(ref(db, 'books/'))
}