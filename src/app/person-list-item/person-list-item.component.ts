import {Component, Input} from '@angular/core';
import {Person} from "../Shared/Modules/user";
import {PersonList} from "../Shared/Modules/mock-person";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-person-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './person-list-item.component.html',
  styleUrl: './person-list-item.component.css'
})
export class PersonListItemComponent {
  @Input() Person?: Person;
  protected readonly PersonList = PersonList;
}
