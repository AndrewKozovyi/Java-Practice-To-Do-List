import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-description',
  imports: [
    FormsModule
  ],
  templateUrl: './input-description.component.html',
  styleUrl: './input-description.component.scss'
})
export class InputDescriptionComponent {
  @Input() description!: string;
  @Output() descriptionChange = new EventEmitter<string>();

  onDescriptionChange() {
    this.descriptionChange.emit(this.description);
  }
}
