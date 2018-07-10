import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HeroesMock } from './heroes-mock';
import { Observable, of } from 'rxjs';
import { LogsService } from './logs.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private logService: LogsService) { }

  getHeroes(): Observable<Hero[]> { 
    this.logService.add('Hero collection has been retrieved');
    return of(HeroesMock);   
  }

  getHero(id: number): Observable<Hero> {
    this.logService.add(`Retrieved hero with id=${id}`)
    return of(HeroesMock.find((hero) => hero.id === id));
  }
}
