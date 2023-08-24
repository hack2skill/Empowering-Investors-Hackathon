import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocqnaComponent } from './docqna.component';

describe('DocqnaComponent', () => {
  let component: DocqnaComponent;
  let fixture: ComponentFixture<DocqnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocqnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocqnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
