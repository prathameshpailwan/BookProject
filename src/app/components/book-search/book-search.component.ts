import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PipeModule } from '../pipe.module';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PipeModule],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.css'
})
export class BookSearchComponent {
  searchTitle: string = '';
  searchAuthor: string = '';
  searchText: string = '';

  @Output() searchEvent = new EventEmitter<{ title: string; author: string; text: string }>();

  onSearch() {
    this.searchEvent.emit({
      title: this.searchTitle,
      author: this.searchAuthor,
      text: this.searchText // Send global search text as well
    });
  }
}
