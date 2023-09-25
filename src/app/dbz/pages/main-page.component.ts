import { Component } from '@angular/core';
import { Character } from '../interfaces/character.inertafce';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})


/* 
  --------PADRE-------------
*/
export class MainPageComponent {
  /* 
   Inyección de dependencias
  */
  
  constructor(private dbzService: DbzService) { }
  
  get characters(): Character[] {
    return [...this.dbzService.character];
  }

  onDeleteCharacter(id:string):void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
  }
}


