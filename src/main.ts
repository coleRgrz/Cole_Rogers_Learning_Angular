import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PersonListComponent} from "./app/person-list/person-list.component";
import {PersonListItemComponent} from "./app/person-list-item/person-list-item.component";
import {ModifyPersonComponent} from "./app/modify-person/modify-person.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



const routes: Routes = [
  {path: '', redirectTo: '/Person', pathMatch: 'full'},
  {path: 'Person', component: PersonListComponent},
  {path: 'Person/:id',
    loadComponent: () =>
      import('./app/person-list-item/person-list-item.component').then(m => m.PersonListItemComponent)}, // Lazy Loaded
  {path: 'modify-Person',
    loadComponent: () =>
      import('./app/modify-person/modify-person.component').then(m => m.ModifyPersonComponent)},
  {path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];

bootstrapApplication(AppComponent, {
  providers:[
    provideHttpClient(),
    provideRouter(routes), provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
