import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.inertafce';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
  
  /*
    --------HIJO-------------
  */
  
export class ListComponent {

  @Input()
  //Puede recibir una poperty(propiedad)  
  public characterList: Character[] = [{

    // valor por defecto
    name: 'Más allá de la ley',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    //TODO: Emitir el ID del personale
    
    if (!id) return;

    console.log({id})

    this.onDelete.emit(id)

  }
}
