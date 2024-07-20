import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';
// app service handles data access and encapsulates any business logic
// service make request for data and handle that data
@Injectable()
export class BookService {
  getAllBooks(): Book[] {
    return books;
  }
  getById(id: number): Book | undefined {
    return books.find((book) => book.id == id)
  }

  create(book: Partial<Book>): Book {
    const id = books[books.length - 1].id + 1
    const newBook = {
      id: id,
      author: book.author ?? "",
      title: book.title ?? "",
      publicationYear: book.publicationYear ?? 0


    }
    books.push(newBook)
    return newBook
  }
  update(id: number, book: Partial<Book>): Book | string {

    const foundBook = books.find((book) => book?.id === id)
    // console.log(foundBook)
    if (!foundBook) {
      return "Book not found"
    }
    
      const updatedBook = {
        id: foundBook?.id,
        title: book?.title ?? foundBook?.title,
        author: book?.author ?? foundBook?.author,
        publicationYear: book?.publicationYear ?? foundBook.publicationYear
      }
    //  console.log(updatedBook)
    return books[id-1]=updatedBook
   
   
  }
}
