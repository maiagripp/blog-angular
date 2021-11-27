import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/posts.model';
import { PostsService } from '../../services/posts/posts.service';


@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post?: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const post = this.postsService.getById(parseInt(params.id));
      this.post = post;
    });
  }

}
