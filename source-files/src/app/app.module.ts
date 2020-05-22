import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { DataReceiverService } from './services/data-receiver.service';
import { DetailsControllerService } from './services/details-controller/details-controller.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataReceiverService,
    DetailsControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
