import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {Router} from '@angular/router';
import {Response} from '../models/response';
import {Pokemon} from '../models/pokemon';
import {Page} from '../models/page';
import {PageService} from '../services/page.service';
import {SearchPipe} from '../pipes/search.pipe';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  allPokemon: Pokemon[] = [];
  page: Page;


  constructor(private pokemonService: PokemonService,
              private router: Router,
              private pageService: PageService) {
  }

  ngOnInit() {
    this.getAllPokemon();
    this.page = this.pageService.getPage();
    /**
     * initialize current page size with default value 10
     */
    if (!this.page.currentPageSize) {
      this.page.currentPageSize = 10;
    }
    /**
     * initialize page index with default value 1
     */
    if (!this.page.currentPage) {
      this.page.currentPage = 1;
    }
    /**
     * initialize filter category with default value 'name'
     */
    if (!this.page.selectedCategory) {
      this.page.selectedCategory = 'name';
    }
    /**
     * initialize collection size with the size of all pokemon
     * we used subscription to change collectionSize after using filter
     */
    if (!this.page.collectionSize) {
      this.pokemonService.getPokemonSearchedCount().subscribe((pokemonCount: number) => {
        this.page.collectionSize = pokemonCount;
      });

    }
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe((data: Response) => {
      this.allPokemon = data.cards;
    });
  }

  goToDetails(pokemon: Pokemon) {
    this.router.navigate(['pokemon/' + pokemon.id]);
  }

  ngOnDestroy(): void {
    /**
     * used to save information about current page
     */
    this.pageService.setPage(this.page);
  }
}
