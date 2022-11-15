import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsAllOrgsItemDonationsComponent } from './infographics-all-orgs-item-donations.component';

describe('InfographicsAllOrgsItemDonationsComponent', () => {
  let component: InfographicsAllOrgsItemDonationsComponent;
  let fixture: ComponentFixture<InfographicsAllOrgsItemDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsAllOrgsItemDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicsAllOrgsItemDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
