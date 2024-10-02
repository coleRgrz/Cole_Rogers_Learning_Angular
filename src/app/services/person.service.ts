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
    return of(PersonList);
  }
  createPerson(newPerson: Person): Observable<Person[]>{
    this.PersonList.push(newPerson);
    return of(this.PersonList);
  }
  getPersonById(PersonId: number): Observable<Person | undefined> {
    const person = this.PersonList.find(person => person.id === PersonId);
    return of(person);
  }
  updatePerson(updatedPerson: Person): Observable<Person[]>{
    const index = this.PersonList.findIndex(person => person.id === updatedPerson.id);
    if (index !== -1) {
      this.PersonList[index] = updatedPerson;
    }
    return of(this.PersonList);
  }
  deletePerson(PersonId: number): Observable<Person[]>{
    this.PersonList = this.PersonList.filter(person => person.id !== PersonId);
    return of(this.PersonList);
  }
}
