import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProgressBarComponent } from './ngx-progress-bar.component';

describe('NgxProgressBarComponent', () => {
  let component: NgxProgressBarComponent;
  let fixture: ComponentFixture<NgxProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
