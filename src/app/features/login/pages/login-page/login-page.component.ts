import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from 'src/app/features/posts/services/authors/authors.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = "";
  senha: string = "";
  erro: boolean = false;

  constructor(
    private authorsService: AuthorsService,
    private router: Router) { }


  ngOnInit(): void {
  }

  authentication() {
    const author = this.authorsService.getAuthorByEmailAndPasswords(this.email, this.senha);
    if(!author) {
      this.erro = true;
    } else {
      sessionStorage.setItem('author', JSON.stringify(author));
      this.router.navigateByUrl('/create-post');
    }
  }

}
