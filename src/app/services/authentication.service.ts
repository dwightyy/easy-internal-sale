import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  @Output() isUserLogged: EventEmitter<boolean> = new EventEmitter();

  logUserIn(username: string) {
    console.log('dentro do service login');
    localStorage.setItem('currentUser', username);
    this.isUserLogged.emit(true);
  }

  logUserOut(username: string) {
    console.log('dentrou do service logout');
    localStorage.removeItem('currentUser');
    this.isUserLogged.emit(false);
    // TODO talvez começar a passar um objeto de evento com mais informações do usuário que saiu
  }
}
