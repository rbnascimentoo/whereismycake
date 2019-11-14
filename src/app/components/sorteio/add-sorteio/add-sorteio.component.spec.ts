import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSorteioComponent } from './add-sorteio.component';

describe('AddSorteioComponent', () => {
  let component: AddSorteioComponent;
  let fixture: ComponentFixture<AddSorteioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSorteioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
