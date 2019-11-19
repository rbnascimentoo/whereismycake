import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCakeComponent } from './list-cake.component';

describe('ListCakeComponent', () => {
  let component: ListCakeComponent;
  let fixture: ComponentFixture<ListCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
