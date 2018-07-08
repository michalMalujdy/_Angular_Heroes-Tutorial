import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Hero[];
  private selectedHero: Hero;

  constructor(private heroService: HeroService) { 
  }

  ngOnInit() {
    this.retrieveHeroes();
  }
  
  private retrieveHeroes() {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => this.heroes = heroes);
  }

  private onHeroClicked(hero: Hero) {
    this.selectedHero = hero;  
  }
}
