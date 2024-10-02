import { Component } from '@angular/core';
import {Person} from "../Shared/Modules/user";
import {NgForOf, NgClass} from "@angular/common";
import {PersonListItemComponent} from "../person-list-item/person-list-item.component";
import {PersonService} from "../services/person.service";

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    PersonListItemComponent
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {
  constructor(private PersonService: PersonService) {
  }

}
