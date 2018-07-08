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
}
