import { Component, OnInit } from '@angular/core';
import { DataReceiverService } from '../services/data-receiver.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private dataReceiver: DataReceiverService) { }

  ngOnInit(): void {
    this.dataReceiver.getPokemonChunk()
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      })
  }

}
