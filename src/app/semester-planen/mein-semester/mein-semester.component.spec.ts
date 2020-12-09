import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinSemesterComponent } from './mein-semester.component';

describe('MeinSemesterComponent', () => {
  let component: MeinSemesterComponent;
  let fixture: ComponentFixture<MeinSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeinSemesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeinSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
