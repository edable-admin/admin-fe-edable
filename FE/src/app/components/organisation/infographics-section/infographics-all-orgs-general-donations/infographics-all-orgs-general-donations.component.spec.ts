import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsAllOrgsGeneralDonationsComponent } from './infographics-all-orgs-general-donations.component';

describe('InfographicsGeneralDonationsComponent', () => {
  let component: InfographicsAllOrgsGeneralDonationsComponent;
  let fixture: ComponentFixture<InfographicsAllOrgsGeneralDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsAllOrgsGeneralDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicsAllOrgsGeneralDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
