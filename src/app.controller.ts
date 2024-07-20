import { Body, Controller, Get, Param ,Post, Put} from '@nestjs/common';
import {  BookService } from './app.service';
import { Book } from './FakeDatabase';



// route for the controller
@Controller('books')

export class BookController{
  constructor(private readonly bookService:BookService){}
// get request
  @Get()
  // get all books function
  getAllBooks():Book []|String{
// handle error status,authentication,validation etc

return this.bookService.getAllBooks()
  }

  @Get(':id')
  getBookById(@Param('id') id:string):Book {
const bookId=+id
return this.bookService.getById(bookId)
  }

  @Post('create')
  addBook(@Body()book:Partial <Book>):Book|string{
const newBook=book
if(!book.author || !book.title|| !book.publicationYear ) {
  return "something went wrong"
}
 return this.bookService.create(newBook)
  }

  @Put(':id')
  updateBook(
    @Param('id') id:string,
    @Body()book:Partial<Book>

):Book|string{
  const bookId=+id
const updateData=book
console.log(updateData)

if(!updateData){
  return "something went wrong"
}else{
  return this.bookService.update(bookId,updateData)
}



  }
}