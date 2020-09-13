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
    const mesUsers = this.users.value;
    // ajouter user dans la liste des users
    const updateUsers = [...mesUsers, nomUser];
    // afficher la liste users avec la mise jour
    this.users.next(updateUsers);

    console.log("liste de départ ", mesUsers);
    console.log("nomUser ajouté ", nomUser);
    console.log("liste des users mise à jour", this.users);
  }
}
