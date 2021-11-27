import { Injectable } from '@angular/core';
import { Post } from '../../models/posts.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Array<Post> = [
    {
      id: 1,
      title: 'Do laboris proident ut reprehenderit cupidatat magna.',
      text: 'Id Lorem eu sit do et laborum minim. Ad voluptate irure proident reprehenderit id excepteur laborum laboris. Ut nisi commodo occaecat reprehenderit commodo ut. Cillum ea sunt consequat ad. Duis ea ut nulla veniam sunt. Aute sint velit veniam adipisicing ut reprehenderit do anim cupidatat.',
      dataInclusao: '23/11/2021',
      author: "Claudia Maia"
    },
    {
      id: 2,
      title: 'Do laboris proident ut reprehenderit cupidatat magna.',
      text: 'Outro post sobre um assunto muito importante',
      dataInclusao: '23/11/2021',
      author: 'Eduardo Almeida'
    },
  ]

  constructor() { }

  getPost() {
    return this.posts;
  }

  getByAuthor(author: string) {
    return this.posts.find((post) => post.author === author);
  }

  getDefaultPost(): Post {
    return {
      id: this.getNextId(),
      title: '',
      text: '',
      dataInclusao: moment().format('DD/MM/YYYY'),
      author: ''
    }
  }

  getNextId() {
    return (this.posts[(this.posts.length - 1)].id + 1);
  }

  createPost(post: Post) {
    this.posts.push(post);
  }

  getById(id: number){
    return this.posts.find((post) => post.id === id)    
  }
}

