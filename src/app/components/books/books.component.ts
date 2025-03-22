import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PipeModule } from '../pipe.module';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PipeModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  booksList: any[] = [];
  detailsFlag: boolean = false;
  BookData: object = {};
  Title: string = '';
  Author: string = '';
  searchText: string = '';
  filteredBooksList: any[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    
    this.http.get<any[]>('assets/books.json').subscribe((data) => {
      this.filteredBooksList = this.booksList = data;
    }
    )
  }

  addBook() {

  }
  onBack() {
    this.detailsFlag = false;
    this.loadBooks();
  }
  GetDetails(bookData) {
    this.router.navigate(['books-details'], { queryParams: { BookDetailData: JSON.stringify(bookData) } });
  }

  SearchBooks(searchText: string, searchType: string) {
    if (!searchText) {
      this.filteredBooksList = [...this.booksList];
      return;
    }

    let data = [...this.booksList];

    if (searchType === 'Title') {
      this.filteredBooksList = data.filter(book =>
        book.title.toLowerCase().includes(searchText.toLowerCase())
      );
    } else if (searchType === 'Author') {
      this.filteredBooksList = data.filter(book =>
        book.author.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }




}
