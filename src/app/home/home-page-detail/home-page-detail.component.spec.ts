import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDetailComponent } from './home-page-detail.component';

describe('HomePageDetailComponent', () => {
  let component: HomePageDetailComponent;
  let fixture: ComponentFixture<HomePageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageDetailComponent]
    });
    fixture = TestBed.createComponent(HomePageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
