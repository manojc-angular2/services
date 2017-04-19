import { Component, OnInit } from '@angular/core';
import { Name } from "app/model/mock/test";
import { LocalService } from "app/services/local/local.service";
import { Age } from "app/model/mock/age";
import { GlobalService } from "app/services/global/global.service";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers: [LocalService]
})
export class Child2Component implements OnInit {
  private names: Name[];

  private ages: Age[];

  constructor(local: LocalService, global: GlobalService) {
    this.ages = local.getAges();
    this.names = global.getNames();
  }

  ngOnInit() {
  }

}
