import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterPlanenComponent } from './semester-planen.component';

describe('SemesterPlanenComponent', () => {
  let component: SemesterPlanenComponent;
  let fixture: ComponentFixture<SemesterPlanenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemesterPlanenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterPlanenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
