import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DataReceiverService } from '../services/data-receiver.service';
import { DetailsControllerService } from '../services/details-controller/details-controller.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  
  @Output() clickedSmth = new EventEmitter<any>();
  @ViewChild('pokemon') pokemonType: ElementRef;

  public pokemonList: any[] = []; 
  public pokemonCopy: any[] = []; 
  public loadedList: boolean = false;
  public pokemonTypes: any = [];

  constructor(
              private dataReceiver: DataReceiverService, 
              private detailsController: DetailsControllerService
              ) { }


  ngOnInit(): void {
    // fetch('https://pokeapi.co/api/v2/pokemon/1/').then(res => res.json()).then(res => console.log(res));
    //fetch('https://pokeapi.co/api/v2/type?limit=999').then(res => res.json()).then(res => console.log(res));
    // fetch('https://pokeapi.co/api/v1/type/?limit=999').then(res => res.json()).then(res => console.log(res));
    this.initialize();
  }

  loadMore(): void {
    this.reset();
    this.initialize();
  }

  reset(): void {
    this.loadedList = false;
    this.pokemonTypes = [];
    this.pokemonList = [];
    this.dataReceiver.updateOffsetNumber();
    this.pokemonType.nativeElement.value = 'none';
  }

  openDetails(pokemon): void {

    console.log(pokemon);
    this.clickedSmth.emit(pokemon);
    this.detailsController.showDetails();
  }

  initialize(): void {
    this.dataReceiver.getPossibleTypes()
      .then((responce: any) => {

        console.log('res');
        console.log(responce);
        responce.results.forEach(element => {
          this.pokemonTypes.push(element.name);
        });
        
      })

    this.dataReceiver.getPokemonChunk()
      .then((res: any) => {

        let results = res.results;
        let allPokemons = [];

        for(let result of results) {
          allPokemons.push(this.dataReceiver.getSinglePokemon(result.url));
        }

        return Promise.all(allPokemons);

      })
      .then(pokemons => {
        console.log(pokemons);

        for(let pokemon of pokemons) {
          this.pokemonList.push({ 
                                  name: pokemon.name, 
                                  image: pokemon.sprites.front_default,
                                  types: pokemon.types,
                                  info: {
                                    types: pokemon.types,
                                    speed: pokemon.stats[0].base_stat,
                                    spDefense: pokemon.stats[1].base_stat,
                                    spAttack: pokemon.stats[2].base_stat,
                                    defense: pokemon.stats[3].base_stat,
                                    attack: pokemon.stats[4].base_stat,
                                    hp: pokemon.stats[5].base_stat,
                                    weight: pokemon.weight,
                                    totalMoves: pokemon.moves.length
                                  }
                                  });
        }

        console.log(this.pokemonList);

        this.pokemonCopy = this.pokemonList.slice();
        this.loadedList = true;
      })
      .catch(res => {
        console.log(res);
      })
  }

  changeTypeFilter(event: any) {

    // this.pokemonList = this.pokemonCopy.slice();

    this.pokemonList = this.pokemonCopy.slice();

    if(event.target.value !== 'none') {

    const copyPokemons = this.pokemonList.slice();
    this.pokemonList = [];

      for(let pokemon of copyPokemons) {
        for(let type of pokemon.types) {
            if(type.type.name === event.target.value) {
              this.pokemonList.push(pokemon);
            }
        }
      }
    }
  }

  checkTypes(type: string): string {
    if(type === 'normal') {
      return '#F0FFFF';
    }

    if(type === 'fighting') {
      return '#FF7F50';
    }

    if(type === 'flying') {
      return 'dodgerblue';
    }

    if(type === 'ground') {
      return '#FFEBCD';
    }

    if(type === 'poison') {
      return '#9400D3';
    }

    //here to change
    if(type === 'rock') {
      return '#A9A9A9';
    }

    if(type === 'bug') {
      return '#BDB76B';
    }

    if(type === 'ghost') {
      return '#FFF8DC';
    }

    if(type === 'steel') {
      return '#FAEBD7';
    }

    if(type === 'fire') {
      return '#DC143C';
    }

    if(type === 'water') {
      return '#AFEEEE';
    }

    if(type === 'grass') {
      return '#7FFF00';
    }

    if(type === 'electric') {
      return 'yellow';
    }

    if(type === 'psychic') {
      return '#008B8B';
    }

    if(type === 'ice') {
      return '#00BFFF';
    }

    if(type === 'dragon') {
      return '#B22222';
    }

    if(type === 'dark') {
      return '#191970';
    }

    if(type === 'fairy') {
      return '#EE82EE';
    }

    if(type === 'unknown') {
      return '#D8BFD8';
    }

    if(type === 'shadow') {
      return '#708090';
    }
  }

}
