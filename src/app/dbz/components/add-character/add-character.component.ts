import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inertafce';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter;


  /* 
   No es un array 
  */

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    
    // console.log(this.character)
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)

    /* limpiar formulario */
    this.character = {
      name: '',
      power: 0
    }
  }

  

} 