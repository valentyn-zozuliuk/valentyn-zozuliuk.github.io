import { Component } from '@angular/core';
import { DetailsControllerService } from './services/details-controller/details-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  public pokemon: any = null;

  constructor(public detailsController: DetailsControllerService) {
    this.detailsController.hideDetails();
  }

  getDetails(): boolean {
    return this.detailsController.checkDetails();
  }

  showDetails(pokemon): void {
    this.pokemon = pokemon;
  }
}
