import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SortablejsModule } from 'ngx-sortablejs';
import { SimpleSortableComponent } from './simple-sortable.component';

describe('SimpleSortableComponent', () => {
  let component: SimpleSortableComponent;
  let fixture: ComponentFixture<SimpleSortableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        SortablejsModule,
        SimpleSortableComponent,
    ],
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
