import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/posts.model';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: Array<Post> = [];

  filteredPosts: Array<Post> = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPost();
    this.filteredPosts = this.posts;
  }

  searchByAuthor(event: any) {
    const value = event.target.value;
    const filteredPosts = this.posts.filter((post) => post.author.toUpperCase().search(value.toUpperCase()) > -1);
    this.filteredPosts = filteredPosts;
  }

  searchByTheme(event: any) {
    const value = event.target.value;
    const filteredPosts = this.posts.filter((post) => post.text.toUpperCase().search(value.toUpperCase()) > -1);
    this.filteredPosts = filteredPosts;
  }

}
