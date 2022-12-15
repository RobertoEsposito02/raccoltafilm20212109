import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Utente } from 'src/app/model/utente';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor() { }

  login(loginForm:Utente){
    return of({username: loginForm.username, token:""});
  }
}
