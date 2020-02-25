import { Injectable } from '@angular/core';

@Injectable()
export class SimpleServiceService {
  values: any = [];
  valuesLogIn: any = [];
  constructor() { 

  }

  saveToService(values) {
    this.values = values;
   
  }
  getFromService(values){
    return this.values;
  }
    saveToServices(valuesLogIn) {
    this.valuesLogIn = valuesLogIn;
  
  }
  getFromServices(valuesLogIn){
    return this.valuesLogIn;
  }
 }

