import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent {

  @Input() pokemon: Pokemon;
  /**
   * used to pass clicked pokemon from child Component (Pokemon Item Component) to parent component (Pokemon List Component)
   */
  @Output() pokemonClicked: EventEmitter<Pokemon>;

  constructor() {
    this.pokemon = new Pokemon();
    this.pokemonClicked = new EventEmitter<Pokemon>();
  }

  selectPokemon() {
    this.pokemonClicked.emit(this.pokemon);
  }


}
