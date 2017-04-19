import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { Name } from "app/model/mock/test";
import { GlobalService } from "app/services/global/global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private title: String;
    private names: Name[];

    constructor(global: GlobalService) {
      this.names = global.getNames();
    }

    ngOnInit(): void {
      this.title = 'app works!';
    }


}
