import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsFormComponent } from './funds-form.component';

describe('FundsFormComponent', () => {
  let component: FundsFormComponent;
  let fixture: ComponentFixture<FundsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
