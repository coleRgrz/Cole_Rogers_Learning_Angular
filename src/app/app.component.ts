import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person} from "./Shared/Modules/user";
import {NgForOf, NgIf} from "@angular/common";
import {PersonListComponent} from "./person-list/person-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, PersonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "List of People";


  //toggle lead status for my optional property
  toggleLeadStatus(person: Person): void {
    person.isTeamLead = !person.isTeamLead;
  }
}


