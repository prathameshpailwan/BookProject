import { Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookSearchComponent } from './components/book-search/book-search.component';

export const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' } ,
    { path: 'books', component: BooksComponent },
    { path: 'books-details', component: BookDetailsComponent },
    { path: 'books-search', component: BookSearchComponent },

];
