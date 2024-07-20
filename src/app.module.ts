import { Module } from '@nestjs/common';
import {  BookController } from './app.controller';
import { BookService } from './app.service';
import { LibrariesController } from './libraries/libraries.controller';

// where we organize the code by grouping related modules together
@Module({//global module
  imports: [],
  controllers: [BookController, LibrariesController],
  providers: [BookService],
})
export class AppModule {}
