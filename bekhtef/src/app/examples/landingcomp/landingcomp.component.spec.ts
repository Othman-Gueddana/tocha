import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingcompComponent } from './landingcomp.component';

describe('LandingcompComponent', () => {
  let component: LandingcompComponent;
  let fixture: ComponentFixture<LandingcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
