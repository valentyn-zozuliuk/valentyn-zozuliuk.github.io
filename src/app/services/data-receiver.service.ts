import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataReceiverService {

  constructor() { }

  async getPokemonChunk() {

    let responce = await fetch('http://pokeapi.co/api/v1/pokemon/?limit=12', {
      
    });

    // let data = await responce.json();

    return responce;
    
  }

}