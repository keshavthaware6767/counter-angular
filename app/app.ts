import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');


    count = 0;

   

        increase() {
            this.count++;
            
        }

        decrease() {
            this.count--;
          
        }

        reset() {
            this.count = 0;
           
        }


}
