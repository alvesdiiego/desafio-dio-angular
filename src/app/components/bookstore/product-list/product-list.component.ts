import { bookService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros:any;
  BookService: bookService; 
  constructor(bookService: bookService) {
    this.BookService = bookService;
   }
 
  ngOnInit(): void {
    this.livros = this.BookService.getBook().subscribe((data => {
      this.livros = data;
    }))
  }

}
