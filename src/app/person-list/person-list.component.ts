import {Component, OnInit} from '@angular/core';
import {Person} from "../Shared/Modules/user";
import {CurrencyPipe, NgForOf, NgClass, UpperCasePipe, TitleCasePipe} from "@angular/common";
import {PersonListItemComponent} from "../person-list-item/person-list-item.component";
import {PersonService} from "../Services/person.service";
import {Router} from "@angular/router";
import {HairColourPipe} from "../pipes/hair-colour.pipe";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    PersonListItemComponent,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe,
    HairColourPipe,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit{
  PersonList: Person [] = [];
  error: string | null = null;
  constructor(private PersonService: PersonService, private router: Router) {
  }

  ngOnInit(){
    this.PersonService.getPerson().subscribe({
      next: (data: Person[]) => this.PersonList = data,
      error: err => console.error("Error fetching People", err),
      complete:() => console.log("Person data fetch complete!")
    })
  }

  onEdit(): void {
    this.router.navigate(['/modify-Person'])
  }
  onDelete(id?: number): void {
    console.log(id)
    for (let i = 0; i <= this.PersonList.length; i++) {
      if (this.PersonList[i].id == id) {
        this.PersonList.splice(i, 1);
      }
    }
  }
}
