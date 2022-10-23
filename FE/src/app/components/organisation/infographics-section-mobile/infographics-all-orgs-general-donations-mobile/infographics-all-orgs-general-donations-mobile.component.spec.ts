import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsAllOrgsGeneralDonationsMobileComponent } from './infographics-all-orgs-general-donations-mobile.component';

describe('InfographicsGeneralDonationsComponent', () => {
  let component: InfographicsAllOrgsGeneralDonationsMobileComponent;
  let fixture: ComponentFixture<InfographicsAllOrgsGeneralDonationsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsAllOrgsGeneralDonationsMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicsAllOrgsGeneralDonationsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
