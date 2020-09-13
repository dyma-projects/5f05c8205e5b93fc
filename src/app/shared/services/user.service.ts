import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject(['Melanie', 'Camille']);


  constructor() { }

  addUser(nomUser){
    // liste de départ
    const monUser = this.users.value;
    // ajouter user dans la liste des users
    const updateUser = [...monUser, nomUser];
    // afficher la liste users avec la mise jour
    this.users.next(updateUser);

    console.log("liste de départ ", monUser);
    console.log("nomUser ajouté ", nomUser);
    console.log("liste des users mise à jour", this.users);
  }
}
