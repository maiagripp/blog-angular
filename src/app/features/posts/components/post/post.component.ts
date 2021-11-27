import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/posts.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  card?: Boolean;

  @Input()
  post?: Post;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  postDetails() {
    this.router.navigateByUrl(`post-details/${this.post?.id}`);
  }
}
