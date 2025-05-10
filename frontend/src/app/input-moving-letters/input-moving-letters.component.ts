import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-moving-letters',
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './input-moving-letters.component.html',
  styleUrl: './input-moving-letters.component.scss'
})
export class InputMovingLettersComponent {
  @Input() letters!: string;
  @Input() title!: string;
  @Output() titleChange = new EventEmitter<string>();
  letterArray: string[] = [];

  ngOnInit(): void {
    this.letterArray = this.letters.split('');
  }

  onTitleChange() {
    this.titleChange.emit(this.title);
  }
}
