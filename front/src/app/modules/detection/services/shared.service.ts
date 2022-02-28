import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PersonType } from 'src/app/core/type/person.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _people$ = new BehaviorSubject<PersonType | null>(null);
  public people$ = this._people$.asObservable();

  constructor(private http: HttpClient) {}

  setPeople(person: PersonType | null): void {
    this._people$.next(person);
  }

  getPerson(name: string): Observable<PersonType> {
    return this.http.get<PersonType>(`http://localhost:3000/youtubers/${name}`);
  }
}
