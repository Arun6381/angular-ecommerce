import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childValue: string = '';
  @Output() childValueChange = new EventEmitter<string>();

  onValueChange() {
    this.childValueChange.emit(this.childValue);
  }
}


