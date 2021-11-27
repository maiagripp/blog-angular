import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/posts.model';
import { PostsService } from '../../services/posts/posts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  post: Post = this.postService.getDefaultPost();

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    texto: new FormControl('', [Validators.required]),
    dataInclusao: new FormControl(this.post.dataInclusao),
    author: new FormControl(this.post.author),
  });

  constructor(
    private postService: PostsService,
    private router: Router) { }

  ngOnInit(): void {
    this.postForm.controls.dataInclusao.disable();
  }

  createPost() {
    const formValue = this.postForm.value;
    this.post.title = formValue.title;
    this.post.text = formValue.text;
    this.post.author = formValue.author;

    this.postService.createPost(this.post);
    alert('Post adicionado com sucesso!');
    this.router.navigateByUrl('/post-page');
  }

}
