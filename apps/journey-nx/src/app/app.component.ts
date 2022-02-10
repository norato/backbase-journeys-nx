import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'journey-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'journey-nx';

  ngOnInit(): void {
    if (!environment.production) {
      localStorage.setItem('enableMocks', 'true');
    }
  }
}
