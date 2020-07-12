import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVolunteerFormComponent } from './new-volunteer-form.component';

describe('NewVolunteerFormComponent', () => {
  let component: NewVolunteerFormComponent;
  let fixture: ComponentFixture<NewVolunteerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVolunteerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVolunteerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
