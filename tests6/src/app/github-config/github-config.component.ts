import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-config',
  template: `
  <div>
    <div class="error">{{error}}</div>
  </div>
  `,
  styleUrls: ['./github-config.component.css']
})
export class GithubConfigComponent implements OnInit {

  error: string;

  constructor() { }

  ngOnInit() {
    this.error = '\'NoneType\' object has no attribute \'replace\'';
  }

}