import {Component, Input} from '@angular/core';
import {Person} from "../Shared/Modules/user";
import {PersonList} from "../Shared/Modules/mock-person";
import {NgOptimizedImage} from "@angular/common";
import {PersonService} from "../services/person.service";
import {Router} from "@angular/router";

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
  @Input() Person!: Person;
  constructor(private PersonService: PersonService, private router: Router) {
  }

  onEdit(): void {
    this.router.navigate(['/modify-Person'])
  }
  onDelete(id?: number): void {
    console.log(id)
    for (let i = 0; i <= PersonList.length; i++) {
      if (PersonList[i].id == id) {
        PersonList.splice(i, 1);
      }
    }
  }
}
