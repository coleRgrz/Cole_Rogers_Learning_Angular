import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { Person} from "./Shared/Modules/user";
import {NgForOf, NgIf} from "@angular/common";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonService} from "./services/person.service";
import {PersonListItemComponent} from "./person-list-item/person-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, PersonListComponent, PersonListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private personService: PersonService) {
  }

  selectedPerson: Person | undefined;

  ngOnInit() {
    this.getSelectedPerson(4);
  }

  getSelectedPerson(id: number): void{
    this.personService.getPersonById(id).subscribe({
      next: (person) => this.selectedPerson = person,
      error: err => console.error("Error fetching Person by id", err)
    });
  }

  //title = "List of People";
}


