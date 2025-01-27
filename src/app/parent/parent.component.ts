import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CounterComponent } from "../components/counter/counter.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CounterComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentValue: string = 'dummy value';
}
