import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDonationItemComponent } from './view-donation-item.component';

describe('ViewDonationItemComponent', () => {
  let component: ViewDonationItemComponent;
  let fixture: ComponentFixture<ViewDonationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDonationItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDonationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
