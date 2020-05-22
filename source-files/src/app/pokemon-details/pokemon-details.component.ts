import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnChanges {
  @Input() pokemon;
  constructor() { }

  ngOnInit(): void {
    console.log('init');
  }

  ngOnChanges() {}

}
