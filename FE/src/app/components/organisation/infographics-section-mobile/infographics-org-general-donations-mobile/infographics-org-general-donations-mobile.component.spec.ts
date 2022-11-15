import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsOrgGeneralDonationsMobileComponent } from './infographics-org-general-donations-mobile.component';

describe('InfographicsOrgGeneralDonationsMobileComponent', () => {
  let component: InfographicsOrgGeneralDonationsMobileComponent;
  let fixture: ComponentFixture<InfographicsOrgGeneralDonationsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsOrgGeneralDonationsMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicsOrgGeneralDonationsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
