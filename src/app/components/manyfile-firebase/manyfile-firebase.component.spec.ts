import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyfileFirebaseComponent } from './manyfile-firebase.component';

describe('ManyfileFirebaseComponent', () => {
  let component: ManyfileFirebaseComponent;
  let fixture: ComponentFixture<ManyfileFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyfileFirebaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManyfileFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
