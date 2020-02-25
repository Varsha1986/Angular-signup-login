import { Component, OnInit } from '@angular/core';
import { SimpleServiceService } from '../simple-service.service';
import {  Router  } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
	name:String;
  	lastname:String;
  	email:String;
  	password:String;
	values: any = [];
	valuesLogIn: any = [];
  constructor(private router: Router, private SimpleServiceService: SimpleServiceService) { }


 onSubmit(form) { 
  if(form.valid) {
    this.values.push({name: this.name,lastname: this.lastname, email: this.email,password: this.password});
    form.reset()
  }
}
 ngOnInit() {
   this.valuesLogIn = this.SimpleServiceService.getFromServices(this.valuesLogIn);
  }
mySave(){
    this.SimpleServiceService.saveToService(this.values);
  }
}
