import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesMock } from '../heroes-mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  private heroes: Hero[] = HeroesMock;

  constructor() { }

  ngOnInit() {
  }

}
