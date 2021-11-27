import { Injectable } from '@angular/core';
import { Authors } from '../../models/authors.models';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors: Array<Authors> = [
    {
      id: 1,
      nome: 'Claudia Maia',
      email: 'claudia@gmail.com',
      senha: '123456'
    },
    {
      id: 2,
      nome: 'Eduardo Almeida',
      email: 'eduardo@gmail.com',
      senha: '789456'
    }
  ]

  constructor() { }

  getAuthorByEmailAndPasswords(email: string, senha: string){
    return this.authors.find((author) => author.email === email && author.senha === senha)
  }

  
}
