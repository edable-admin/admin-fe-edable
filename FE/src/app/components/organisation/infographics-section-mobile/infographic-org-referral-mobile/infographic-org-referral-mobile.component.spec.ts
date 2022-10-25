import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicOrgReferralMobileComponent } from './infographic-org-referral-mobile.component';

describe('InfographicOrgReferralMobileComponent', () => {
  let component: InfographicOrgReferralMobileComponent;
  let fixture: ComponentFixture<InfographicOrgReferralMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicOrgReferralMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicOrgReferralMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
