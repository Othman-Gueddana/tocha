import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotCompComponent } from './forgot-comp.component';

describe('ForgotCompComponent', () => {
  let component: ForgotCompComponent;
  let fixture: ComponentFixture<ForgotCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
