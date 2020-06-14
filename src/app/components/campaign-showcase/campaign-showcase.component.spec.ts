import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignShowcaseComponent } from './campaign-showcase.component';

describe('CampaignShowcaseComponent', () => {
  let component: CampaignShowcaseComponent;
  let fixture: ComponentFixture<CampaignShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignShowcaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
