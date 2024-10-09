import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PersonListComponent} from "./app/person-list/person-list.component";
import {PersonListItemComponent} from "./app/person-list-item/person-list-item.component";
import {ModifyPersonComponent} from "./app/modify-person/modify-person.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";


const routes: Routes = [
  {path: '', redirectTo: '/Person', pathMatch: 'full'},
  {path: 'Person', component: PersonListComponent},
  {path: 'Person/:id', component: PersonListItemComponent},
  {path: 'modify-Person', component: ModifyPersonComponent},
  {path: '**', component:PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {providers:[provideRouter(routes)]})
  .catch((err) => console.error(err));
