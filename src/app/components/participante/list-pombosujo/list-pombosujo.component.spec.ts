import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPombosujoComponent } from './list-pombosujo.component';

describe('ListPombosujoComponent', () => {
  let component: ListPombosujoComponent;
  let fixture: ComponentFixture<ListPombosujoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPombosujoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPombosujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
