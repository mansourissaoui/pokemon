import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Response} from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlBase = 'https://api.pokemontcg.io/v1/cards';
  /**
   * used to pass pokemon count after filter to pokemon list component
   * it's necessary to initialize pagination
   */
  pokemonCountAfterPipe = new Subject<number>();

  constructor(private httpClient: HttpClient) {
  }

  public getAllPokemon(): Observable<Response> {
    return this.httpClient.get<Response>(this.urlBase);
  }

  public getPokemonById(id: string): Observable<Response> {
    return this.httpClient.get<Response>(this.urlBase + '/' + id);
  }

  public emitPokemonCount(pokemonCount: number) {
    this.pokemonCountAfterPipe.next(pokemonCount);
  }

  public getPokemonSearchedCount(): Subject<number> {
    return this.pokemonCountAfterPipe;
  }

}
