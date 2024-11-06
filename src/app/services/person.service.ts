import { Injectable } from '@angular/core';
import {PersonList} from "../Shared/Modules/mock-person";
import {Person} from "../Shared/Modules/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private persons: Person[] = PersonList;

  constructor() { }
  getPerson(): Observable<Person[]>{
    return of(this.persons);
  }
  // CRUD Operations
  createPerson(newPerson: Person): Observable<Person>{
    this.persons.push(newPerson);
    return of(newPerson);
  }
  //retrieve
  getPersonById(PersonId: number): Observable<Person | undefined> {
    return of (this.persons.find(person => person.id === PersonId));
  }
  //update
  updatePerson(updatedPerson: Person): Observable<Person | undefined>{
    const index = this.persons.findIndex(person => person.id == updatedPerson.id);
    if (index > -1) {
      this.persons[index] = updatedPerson;
      return of(updatedPerson);
    }
    return of(updatedPerson);
  }
  //delete
  deletePerson(PersonId: number): void {
    this.persons = this.persons.filter((person => person.id !== PersonId));
  }

  generateNewId(): number {
    return this.persons.length > 0 ? Math.max(...this.persons.map(person => person.id)) + 1 : 1;
  }
}
