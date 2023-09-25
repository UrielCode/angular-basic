import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.inertafce';

@Injectable({ providedIn: 'root' })

// Data que queremos manejar
export class DbzService {
  public character: Character[] = [{
    id: uuid(),
    name: 'Indiana Jones y el dial del destino',
    power: 1000
  }, {
    id: uuid(),
    name: 'Flash',
    power: 9500
  }, {
    id: uuid(),
    name: 'John Wick 4',
    power: 7500
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }

    this.character.push(newCharacter);

  }

  // onDeletCharacter(index: number) {
  //   this.character.splice(index, 1);
  // }

  onDeleteCharacterById(id: string ) {
    this.character = this.character.filter(character => character.id !== id)
  }

}