import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { LogsService } from './logs.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  
  private resourcesUri = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private httpClient: HttpClient,
              private logService: LogsService) { }

  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.resourcesUri, hero, this.httpOptions)
    .pipe(
      tap((hero: Hero) => this.logService.add(`Added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
      
  getHeroes(): Observable<Hero[]> { 
    this.logService.add('Hero collection has been retrieved');
    return this.httpClient.get<Hero[]>(this.resourcesUri)
      .pipe(
        catchError(this.handleError('getHeroes', [])),
        tap((heroes) => this.logService.add('Fetching heroes...'))
        );
  }

  getHero(id: number): Observable<Hero> {
    this.logService.add(`Retrieved hero with id=${id}`);
    return this.httpClient.get<Hero>(`${this.resourcesUri}/${id}`)
      .pipe(
        catchError(this.handleError<Hero>(`getHero id=${id}`)),
        tap(() => this.logService.add(`fetching hero with id: ${id}`)));
  }

  updateHero(hero: Hero): Observable<any> {
    return this.httpClient.put(this.resourcesUri, hero, this.httpOptions)
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.resourcesUri}/${id}`;

    return this.httpClient.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.logService.add(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  handleError<T>(operationName = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.logService.add(`Operation ${operationName} failed. Details: ${error}`);
      return of(result as T);
    }
  }
}
