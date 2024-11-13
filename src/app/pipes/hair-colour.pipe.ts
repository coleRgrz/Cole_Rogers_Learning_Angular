import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "../Shared/Modules/user";

@Pipe({
  name: 'hairColour',
  standalone: true
})
export class HairColourPipe implements PipeTransform {

  transform(person: Person): string {
    return `${"Hair Colour: "+ person.hairColour}`;
  }

}
