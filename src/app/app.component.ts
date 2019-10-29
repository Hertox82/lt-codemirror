import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lt-codemirror-test';
  code: any;
  config: any;

  constructor() {
    this.code = 'some code';
    this.config = {
      lineNumbers: true,
      mode : 'htmlmixed',
      styleActiveLine: true,
      matchBrackets: true,
      theme: 'dracula'
    };
  }

  onBlur() {}

  onFocus() {}
}
