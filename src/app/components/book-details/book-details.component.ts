import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  BookData : object = {};
  detailsFlag : boolean =false
constructor( private route: ActivatedRoute,private router: Router){
}

    ngOnInit(){
      
      this.route.queryParams.subscribe((response) => {
        if (response && response['BookDetailData']) {
           this.BookData = JSON.parse(response['BookDetailData']);
           this.detailsFlag=true;
        }
      })
    }
  onBack(){
    this.router.navigate(['books']);
    this.detailsFlag=false;

  }
}
