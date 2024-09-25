import {Component, Input} from '@angular/core';
import {Person} from "../Shared/Modules/user";

@Component({
  selector: 'app-person-list-item',
  standalone: true,
  imports: [],
  templateUrl: './person-list-item.component.html',
  styleUrl: './person-list-item.component.css'
})
export class PersonListItemComponent {
  @Input() Person?: Person;
}
