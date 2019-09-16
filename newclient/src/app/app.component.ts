import { Component, OnInit } from '@angular/core';

const THIRTY_SECONDS = 30 * 1000;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'newclient';
  toShow = 0;
  rotateScreen() {
    this.toShow += 1;
    if (this.toShow >= 3) {
      this.toShow = 0;
    }
  }

  ngOnInit() {
    setInterval(() => this.rotateScreen(), THIRTY_SECONDS);
  }
}
