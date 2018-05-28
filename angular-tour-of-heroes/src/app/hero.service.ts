import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private heroesUrl2 = 'http://192.168.1.39:3000/heroes';

  private httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl2)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  updateHero(hero: Hero) {
    return this.http.put(this.heroesUrl2, hero, this.httpOption)
      .pipe(
        tap(_ => this.log(`Hero id:${hero.id} updated`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl2}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`hero id:${id} fetched`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  add(hero: Hero) {

  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('HeroService ' + message);
  }
}
