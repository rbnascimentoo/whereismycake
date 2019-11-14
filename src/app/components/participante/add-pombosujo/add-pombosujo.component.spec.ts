import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPombosujoComponent } from './add-pombosujo.component';

describe('AddPombosujoComponent', () => {
  let component: AddPombosujoComponent;
  let fixture: ComponentFixture<AddPombosujoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPombosujoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPombosujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
