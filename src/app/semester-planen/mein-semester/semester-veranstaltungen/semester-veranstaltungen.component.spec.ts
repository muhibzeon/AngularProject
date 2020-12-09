import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterVeranstaltungenComponent } from './semester-veranstaltungen.component';

describe('SemesterVeranstaltungenComponent', () => {
  let component: SemesterVeranstaltungenComponent;
  let fixture: ComponentFixture<SemesterVeranstaltungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemesterVeranstaltungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterVeranstaltungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
