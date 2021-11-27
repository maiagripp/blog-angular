import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authors } from 'src/app/features/posts/models/authors.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  author?: Authors;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const authorStorage = sessionStorage.getItem('author')
    if(authorStorage){
      this.author = JSON.parse(authorStorage)
    }
  }

  exit(){
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }
}
