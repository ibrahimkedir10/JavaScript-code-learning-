// Book class definition
class Book {
    constructor(title, author, isbn, genre) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.genre = genre;
    }
  
    // Method to display book information
    displayInfo() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`ISBN: ${this.isbn}`);
      console.log(`Genre: ${this.genre}`);
      console.log("------------");
    }
  }
  
  // Creating objects using the Book class
  const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "978-0-316-76948-0", "Fiction");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4", "Classic");
  const book3 = new Book("1984", "George Orwell", "978-0-452-28423-4", "Dystopian");
  
  // Displaying book information
  book1.displayInfo();
  book2.displayInfo();
  book3.displayInfo();
  