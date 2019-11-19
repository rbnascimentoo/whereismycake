import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCakeComponent } from './add-cake.component';

describe('AddCakeComponent', () => {
  let component: AddCakeComponent;
  let fixture: ComponentFixture<AddCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
