import { Component, ChangeDetectionStrategy } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { SortablejsDirective } from '../../../../projects/ngx-sortablejs/src/lib/sortablejs.directive';

@Component({
    selector: 'app-simple-sortable',
    templateUrl: './simple-sortable.component.html',
    styleUrls: ['./simple-sortable.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
    SortablejsDirective,
    JsonPipe
]
})
export class SimpleSortableComponent {

  cities = [
    'Ankara',
    'Moscow',
    'Munich',
    'Paris',
    'Washington',
  ];

}
