import { Component } from '@angular/core';
import {Person} from "../Shared/Modules/user";
import {NgForOf} from "@angular/common";
import {PersonListItemComponent} from "../person-list-item/person-list-item.component";

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    NgForOf,
    PersonListItemComponent
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {
  person1 : Person = {name: "Cole", age: 20, faveFood: "Brisket", hairColour: "Black", isTeamLead: false};
  person2 : Person = {name: "Colton", age: 19, faveFood: "Pizza", hairColour: "Brown", isTeamLead: false};
  person3 : Person = {name: "Andrew", age: 20, faveFood: "Whopper", hairColour: "Brown", isTeamLead: true};
  person4 : Person = {name: "Madison", age: 23, faveFood: "Chicken", hairColour: "Black", isTeamLead: true};

  Person: Person[] = [this.person1, this.person2, this.person3, this.person4];

}
