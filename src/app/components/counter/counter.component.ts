import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './store/counter.action';
import { CommonModule } from '@angular/common';
import { selectCount } from './store/counter.selectors';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count$!: Observable<number>;

constructor(private store :Store){
  this.count$=this.store.select(selectCount);
}

increment(){
  this.store.dispatch(increment());
}

decrement(){
  this.store.dispatch(decrement());
}

reset(){
  this.store.dispatch(reset())
}
}
