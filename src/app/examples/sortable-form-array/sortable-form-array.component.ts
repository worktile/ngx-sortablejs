import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";
import { SortablejsDirective } from "../../../../projects/ngx-sortablejs/src/lib/sortablejs.directive";

@Component({
  selector: "app-sortable-form-array",
  templateUrl: "./sortable-form-array.component.html",
  styleUrls: ["./sortable-form-array.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [SortablejsDirective, ReactiveFormsModule, JsonPipe],
})
export class SortableFormArrayComponent {
  citiesControls = new FormArray(
    ["Ankara", "Moscow", "Munich", "Paris", "Washington"].map(
      (city) => new FormControl(city),
    ),
  );
}
