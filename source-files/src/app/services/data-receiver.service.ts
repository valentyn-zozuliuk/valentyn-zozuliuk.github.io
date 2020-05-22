import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataReceiverService {

  private chunkUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=';
  private offsetNumber: number = 0;

  constructor() { }

  async getPokemonChunk() : Promise<any> {

    let responce = await fetch(this.chunkUrl + this.offsetNumber);
    let data = await responce.json();

    return data;
  }
  

  async getSinglePokemon(url) : Promise<any> {
  
    let responce = await fetch(url);
    let data = await responce.json();

    return data;
  }

  async getPossibleTypes() : Promise<any> {

    let responce = await fetch('https://pokeapi.co/api/v2/type?limit=999');
    let data = await responce.json();

    return data;
  }

  updateOffsetNumber(): void {
    this.offsetNumber += 12;
  }


}