import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person} from "./Shared/Modules/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "People Generation";

  person1 : Person = {name: "Cole", age: 20, faveFood: "Brisket", hairColour: "Black", isTeamLead: undefined};
  person2 : Person = {name: "Colton", age: 19, faveFood: "Pizza", hairColour: "Brown", isTeamLead: undefined};
  person3 : Person = {name: "Andrew", age: 20, faveFood: "Whopper", hairColour: "Brown", isTeamLead: true};



}


