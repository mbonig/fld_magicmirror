import { Component, OnInit } from '@angular/core';

const TEN_SECONDS = 100000;
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
    setInterval(() => this.rotateScreen(), TEN_SECONDS);
  }
}
