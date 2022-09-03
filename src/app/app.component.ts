import { Component } from '@angular/core'; 
import { TextPosition } from '@pikepresje/ngx-progress-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progress-bar';
  value = 0;
  fillColor = 'OrangeRed';

  TextPosition = TextPosition;

  constructor() {
    this.reset();
  }

  reset() {
    this.value = 0;
    let interval = setInterval(() => {
      this.value = this.value + (Math.random() * 3) + 1;

      if (this.value > 25.00001 && this.value < 50) {
        this.fillColor = 'Orange';
      } else if (this.value > 50.00001 && this.value < 75) {
        this.fillColor = 'Gold';
      }else if (this.value > 75.00001 && this.value <= 100){
                this.fillColor = 'YellowGreen'
      }else{
          this.fillColor = 'YellowGreen'
      }

      if (this.value >= 100) {
        this.value = 100;
        clearInterval(interval);
      }
    }, 100);
  }
}
