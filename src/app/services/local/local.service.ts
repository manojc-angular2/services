import { Injectable } from '@angular/core';

import { Ages } from "app/model/mock/age-list";
import { Age } from "app/model/mock/age";

@Injectable()
export class LocalService {

  private ages : Age[] = [];

  constructor() { 
    console.log("local created!");
  }

  getAges() {
    this.ages = JSON.parse(JSON.stringify(Ages));
    return this.ages;
  }

}
