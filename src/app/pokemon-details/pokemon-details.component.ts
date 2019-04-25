import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {PokemonService} from '../services/pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Response} from '../models/response';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pokemonService.getPokemonById(params.id).subscribe( (response: Response) => {
        this.pokemon = response.card;
      });
    });
  }

  backToMainPage() {
    this.router.navigate(['/']);
  }
}
