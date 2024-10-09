import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PersonListComponent} from "./app/person-list/person-list.component";
import {PersonListItemComponent} from "./app/person-list-item/person-list-item.component";


const routes: Routes = [
  {path: '', redirectTo: '/Person', pathMatch: 'full'},
  {path: 'Person', component: PersonListComponent},
  {path: 'Person/:id', component: PersonListItemComponent}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
