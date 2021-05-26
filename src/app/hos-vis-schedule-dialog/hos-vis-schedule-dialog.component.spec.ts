import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosVisScheduleDialogComponent } from './hos-vis-schedule-dialog.component';

describe('HosVisScheduleDialogComponent', () => {
  let component: HosVisScheduleDialogComponent;
  let fixture: ComponentFixture<HosVisScheduleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosVisScheduleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosVisScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
