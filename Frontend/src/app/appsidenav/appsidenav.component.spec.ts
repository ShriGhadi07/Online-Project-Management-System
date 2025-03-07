import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsidenavComponent } from './appsidenav.component';

describe('AppsidenavComponent', () => {
  let component: AppsidenavComponent;
  let fixture: ComponentFixture<AppsidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppsidenavComponent]
    });
    fixture = TestBed.createComponent(AppsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
