import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSorteioComponent } from './list-sorteio.component';

describe('ListSorteioComponent', () => {
  let component: ListSorteioComponent;
  let fixture: ComponentFixture<ListSorteioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSorteioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
