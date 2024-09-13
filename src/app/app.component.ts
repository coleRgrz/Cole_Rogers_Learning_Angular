import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person} from "./Shared/Modules/user";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "List of People";
  // All the people I have created
  person1 : Person = {name: "Cole", age: 20, faveFood: "Brisket", hairColour: "Black", isTeamLead: false};
  person2 : Person = {name: "Colton", age: 19, faveFood: "Pizza", hairColour: "Brown", isTeamLead: false};
  person3 : Person = {name: "Andrew", age: 20, faveFood: "Whopper", hairColour: "Brown", isTeamLead: true};
  person4 : Person = {name: "Madison", age: 23, faveFood: "Sandwich", hairColour: "Black", isTeamLead: true};
  person5 : Person = {name: "Sarah", age: 23, faveFood: "Chicken", hairColour: "Purple", isTeamLead: false};
  person6 : Person = {name: "Noah", age: 20, faveFood: "Taco", hairColour: "Black", isTeamLead: false};
  //An array to store all the people
  personArray: Person[] = [this.person1, this.person2, this.person3, this.person4, this.person5, this.person6];

  //toggle lead status for my optional property
  toggleLeadStatus(person: Person): void {
    person.isTeamLead = !person.isTeamLead;
  }
}


