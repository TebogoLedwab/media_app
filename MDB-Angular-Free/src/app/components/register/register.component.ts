import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  firstName: String = '';
  lastName: String;
  email: String;
  password: String;
  phone: number;
  Register: FormGroup;
  loading = false;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder) { }



  ngOnInit() {
    //Form Validation
    this.Register = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', Validators.required]
    });

    this.Register.valueChanges.subscribe(value => {
      console.table(value)
    })

  };

  register(firstName?, lastName?, email?, password?, phone?): void {

    //console.log(this.user.firstName === firstName)
    // this.user.lastName === lastName
    // this.user.email === email
    // this.user.password === password
    // this.user.phone === phone 
    // for (let i = 0; 1 < this.user.length; i++) {
    //   if () {
    //     this.router.navigate(["login"]);
    //     return;
    //   }
    // }
    alert("Successfully Registered");
    console.table(this.Register.value);
  }
  if(register) {
    this.router.navigate(["login"]);
    return;
  }



}
