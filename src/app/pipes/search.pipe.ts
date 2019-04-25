import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {PokemonService} from '../services/pokemon.service';

@Pipe({
  name: 'search'
})
@Injectable()
export class SearchPipe implements PipeTransform {

  constructor(private pokemonService: PokemonService) {

  }

  transform(items: Pokemon[], field: string, value: string): Pokemon[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      this.pokemonService.emitPokemonCount(items.length);
      return items;
    }

    const searchedPokemon = items.filter(singleItem => singleItem[field] ).filter(singleItem =>
      singleItem[field].toLowerCase().includes(value.toLowerCase())
    );

    this.pokemonService.emitPokemonCount(searchedPokemon.length);

    return searchedPokemon;
  }

}
