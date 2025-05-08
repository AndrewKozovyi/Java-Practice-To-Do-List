import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskBoxComponent } from './add-task-box.component';

describe('AddTaskBoxComponent', () => {
  let component: AddTaskBoxComponent;
  let fixture: ComponentFixture<AddTaskBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
