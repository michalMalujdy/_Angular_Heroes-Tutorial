import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { LogsComponent } from './logs/logs.component';
import { LogsService } from './logs.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    LogsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    HeroService, 
    LogsService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
