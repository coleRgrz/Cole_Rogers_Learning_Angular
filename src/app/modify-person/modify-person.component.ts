import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../services/person.service";
import {Person} from "../Shared/Modules/user";

@Component({
  selector: 'app-modify-person',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-person.component.html',
  styleUrl: './modify-person.component.css'
})
export class ModifyPersonComponent {
  personForm: FormGroup;
  person: Person | undefined;
  error: string   | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {
    this.personForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      faveFood: ['', Validators.required],
      hairColour: ['', Validators.required],
      isTeamLead: ['', Validators.required],
      img: ['']
    })
  }

  protected readonly onsubmit = onsubmit;

  onSubmit(): void {
    const person: Person = this.personForm.value;
    const newId = this.personService.generateNewId();
    person.id = newId;
    this.personService.createPerson(person);

    this.router.navigate(['/Person']);
  }
  onEdit(): void {
    const person: Person = this.personForm.value;
    this.personService.updatePerson(person)
    this.router.navigate(['/Person']);
  }
  onDelete(): void {
    const id = this.personForm.value.id;
    if (id) {
      this.personService.deletePerson(id);
      this.router.navigate(['/Person'])
    }
  }
  navigateToPersonList(): void {
    this.router.navigate(['/Person'])
  }

}
