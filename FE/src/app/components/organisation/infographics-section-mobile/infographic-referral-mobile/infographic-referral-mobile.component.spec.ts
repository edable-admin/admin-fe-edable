import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicReferralMobileComponent } from './infographic-referral-mobile.component';

describe('InfographicReferralMobileComponent', () => {
  let component: InfographicReferralMobileComponent;
  let fixture: ComponentFixture<InfographicReferralMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicReferralMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicReferralMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
