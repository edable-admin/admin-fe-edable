import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsOrgGeneralDonationsComponent } from './infographics-org-general-donations.component';

describe('InfographicsOrgGeneralDonationsComponent', () => {
  let component: InfographicsOrgGeneralDonationsComponent;
  let fixture: ComponentFixture<InfographicsOrgGeneralDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsOrgGeneralDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicsOrgGeneralDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
