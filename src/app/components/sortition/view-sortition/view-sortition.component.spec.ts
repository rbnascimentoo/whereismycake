import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSortitionComponent } from './view-sortition.component';

describe('ViewSortitionComponent', () => {
  let component: ViewSortitionComponent;
  let fixture: ComponentFixture<ViewSortitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSortitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSortitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
