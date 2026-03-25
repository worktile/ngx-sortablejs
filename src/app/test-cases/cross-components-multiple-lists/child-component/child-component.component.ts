import { Component, Input } from '@angular/core';
import {Options} from 'sortablejs';

import { SortablejsDirective } from '../../../../../projects/ngx-sortablejs/src/lib/sortablejs.directive';

@Component({
    selector: 'app-child-component',
    templateUrl: './child-component.component.html',
    styleUrls: ['./child-component.component.css'],
    imports: [SortablejsDirective]
})
export class ChildComponentComponent {

  @Input()
  list: string[];

  options: Options = {
    group: 'test',
  };

}
