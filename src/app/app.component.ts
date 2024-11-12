import { Component } from '@angular/core';
import { CounterComponent } from './components/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = '4-counter-app';
}
