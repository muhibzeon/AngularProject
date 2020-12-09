import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesamtVeranstaltungenComponent } from './gesamt-veranstaltungen.component';

describe('GesamtVeranstaltungenComponent', () => {
  let component: GesamtVeranstaltungenComponent;
  let fixture: ComponentFixture<GesamtVeranstaltungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesamtVeranstaltungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesamtVeranstaltungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
