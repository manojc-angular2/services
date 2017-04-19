import { Injectable } from '@angular/core';

import { Names } from "app/model/mock/test-list";

@Injectable()
export class GlobalService {

  constructor() {
    console.log("global created!");
  }

  getNames() {
    return Names;
  }

}
