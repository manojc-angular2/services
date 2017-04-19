import { Component, OnInit } from '@angular/core';
import { GlobalService } from "app/services/global/global.service";
import { Name } from "app/model/mock/test";
import { LocalService } from "app/services/local/local.service";
import { Age } from "app/model/mock/age";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers: [LocalService]
})
export class Child1Component implements OnInit {

  private names: Name[];
  private ages: Age[];

  constructor(global: GlobalService, local: LocalService) { 
    this.names = global.getNames();
    this.ages = local.getAges();
  }

  ngOnInit() {
  }

}
