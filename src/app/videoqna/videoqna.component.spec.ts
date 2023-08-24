import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoqnaComponent } from './videoqna.component';

describe('VideoqnaComponent', () => {
  let component: VideoqnaComponent;
  let fixture: ComponentFixture<VideoqnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoqnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoqnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
