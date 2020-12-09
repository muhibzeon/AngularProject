import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfOptionsComponent } from './list-of-options.component';

describe('ListOfOptionsComponent', () => {
  let component: ListOfOptionsComponent;
  let fixture: ComponentFixture<ListOfOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
