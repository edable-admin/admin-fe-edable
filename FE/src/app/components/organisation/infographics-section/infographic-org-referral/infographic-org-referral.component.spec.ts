import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicOrgReferralComponent } from './infographic-org-referral.component';

describe('InfographicOrgReferralComponent', () => {
  let component: InfographicOrgReferralComponent;
  let fixture: ComponentFixture<InfographicOrgReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicOrgReferralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicOrgReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
