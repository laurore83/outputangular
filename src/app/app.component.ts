import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newOnomatopiaList: Array<string> = [];

  onReceiveNewOnomatopia(event: string): void {
    this.newOnomatopiaList.push(event);
    console.log(event);
  }
}
