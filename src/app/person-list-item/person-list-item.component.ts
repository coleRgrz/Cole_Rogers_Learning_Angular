import {Component, Input} from '@angular/core';
import {Person} from "../Shared/Modules/user";
import {PersonList} from "../Shared/Modules/mock-person";
import {CurrencyPipe, NgOptimizedImage, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {PersonService} from "../Services/person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HairColourPipe} from "../pipes/hair-colour.pipe";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-person-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe,
    HairColourPipe,
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardContent,
  ],
  templateUrl: './person-list-item.component.html',
  styleUrl: './person-list-item.component.css'
})
export class PersonListItemComponent {
  PersonList: Person[] = [];
  error: string | null = null;
  currentIndex: number = 0;
  @Input() Person!: Person;
  constructor(private PersonService: PersonService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.PersonService.getPerson().subscribe({
      next: (data: Person[]) => {
        this.PersonList = data;
        this.error = null;

        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.PersonList.findIndex(Person => Person.id === id);
            this.Person = this.PersonList[this.currentIndex];
          }
        });
      },
      error: err => {
        this.error = 'Error fetching person';
        console.error("Error fetching person", err);
      },
      complete: () => console.log("Person data fetch complete!")
    });
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
