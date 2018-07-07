import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesMock } from '../heroes-mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Hero[] = HeroesMock;
  private selectedHero: Hero;

  constructor() { 
  }

  ngOnInit() {
  }
  
  private onHeroClicked(hero: Hero) {
    this.selectedHero = hero;  
  }
}
