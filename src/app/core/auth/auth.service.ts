import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Utente } from 'src/app/model/utente';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  
  private userLoggedSubject$: BehaviorSubject<Utente | null> = new BehaviorSubject<Utente | null>(null);
  
  constructor(private _http:HttpClient) { }
  
  login(loginForm:Utente){
    //this.setUserLogged(loginForm);
    return of({username: loginForm.username, token: "ok"});
  }

  setUserLogged(user:Utente | null){
    this.userLoggedSubject$.next(user);
  }

  getUserLogged():Observable<Utente | null>{
    return this.userLoggedSubject$.asObservable();
  }

  isLogged():boolean{
    return this.userLoggedSubject$.value ? !!this.userLoggedSubject$.value.token : false
  }

  getUserToken():string | null{
    return this.userLoggedSubject$.value ? this.userLoggedSubject$.value.token : null
  }

  logout(){
    this.setUserLogged(null)
  }
}
