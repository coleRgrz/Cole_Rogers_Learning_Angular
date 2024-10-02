import { Injectable } from '@angular/core';
import {PersonList} from "../Shared/Modules/mock-person";
import {Person} from "../Shared/Modules/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private PersonList: Person[] = PersonList;

  constructor() { }
  getPersonList(): Observable<Person[]>{
    return of(PersonList)
  }
}
