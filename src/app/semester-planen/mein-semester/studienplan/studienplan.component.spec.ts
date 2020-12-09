import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudienplanComponent } from './studienplan.component';

describe('StudienplanComponent', () => {
  let component: StudienplanComponent;
  let fixture: ComponentFixture<StudienplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudienplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudienplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
