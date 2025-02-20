import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCmpComponent } from './nav-cmp.component';

describe('NavCmpComponent', () => {
  let component: NavCmpComponent;
  let fixture: ComponentFixture<NavCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
