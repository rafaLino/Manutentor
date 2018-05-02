import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `<app-alert></app-alert>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
