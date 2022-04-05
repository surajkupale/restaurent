import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorrentDashbordComponent } from './restorrent-dashbord.component';

describe('RestorrentDashbordComponent', () => {
  let component: RestorrentDashbordComponent;
  let fixture: ComponentFixture<RestorrentDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorrentDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorrentDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
