import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnefileFirebaseComponent } from './onefile-firebase.component';

describe('OnefileFirebaseComponent', () => {
  let component: OnefileFirebaseComponent;
  let fixture: ComponentFixture<OnefileFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnefileFirebaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnefileFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
