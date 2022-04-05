import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldRestComponent } from './old-rest.component';

describe('OldRestComponent', () => {
  let component: OldRestComponent;
  let fixture: ComponentFixture<OldRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
