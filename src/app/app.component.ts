import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDatatable';
  columns=[
    "ID",
    "First name",
    "Last name",
    "DOB"
  ];
}
