import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicReferralComponent } from './infographic-referral.component';

describe('InfographicReferralComponent', () => {
  let component: InfographicReferralComponent;
  let fixture: ComponentFixture<InfographicReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicReferralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
