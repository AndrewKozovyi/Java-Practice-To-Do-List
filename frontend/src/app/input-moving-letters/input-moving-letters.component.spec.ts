import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMovingLettersComponent } from './input-moving-letters.component';

describe('InputMovingLettersComponent', () => {
  let component: InputMovingLettersComponent;
  let fixture: ComponentFixture<InputMovingLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMovingLettersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMovingLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
