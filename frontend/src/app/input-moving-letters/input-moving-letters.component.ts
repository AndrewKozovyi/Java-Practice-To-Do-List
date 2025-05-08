import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-input-moving-letters',
  imports: [
    NgForOf
  ],
  templateUrl: './input-moving-letters.component.html',
  styleUrl: './input-moving-letters.component.scss'
})
export class InputMovingLettersComponent {
  @Input() letters: string = "";
  array = [...this.letters]
}
