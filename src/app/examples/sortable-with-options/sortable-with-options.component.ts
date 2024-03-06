import { Component } from '@angular/core';
import {Options} from 'sortablejs';
import { NgFor, JsonPipe } from '@angular/common';
import { SortablejsDirective } from '../../../../projects/ngx-sortablejs/src/lib/sortablejs.directive';

@Component({
    selector: 'app-sortable-with-options',
    templateUrl: './sortable-with-options.component.html',
    styleUrls: ['./sortable-with-options.component.css'],
    standalone: true,
    imports: [
        SortablejsDirective,
        NgFor,
        JsonPipe,
    ],
})
export class SortableWithOptionsComponent {

  draggableItems = [
    { draggable: true, text: '1' },
    { draggable: true, text: '2' },
    { draggable: false, text: '3' },
    { draggable: true, text: '4' },
    { draggable: true, text: '5' },
  ];

  eventItems = [
    '1',
    '2',
    '3',
    '4',
    '5',
  ];

  eventUpdateCounter = 0;

  scrollableItems = Array.from({ length: 30 }).map((u, i) => i + 1);

  draggableOptions: Options = {
    draggable: '.draggable',
  };

  eventOptions: Options = {
    onUpdate: () => this.eventUpdateCounter++,
  };

  scrollableOptions: Options = {
    scroll: true,
    scrollSensitivity: 100,
  };

}
