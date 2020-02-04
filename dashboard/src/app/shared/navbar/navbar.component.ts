import { AppConsts } from './../models/AppConst';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logged = false;
  LoggInForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.LoggInForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
}

  loggIn() {
    const valid = this.LoggInForm.value;
    if (valid.email === 'admin@admin.com' && valid.password === '123qwe') {
      this.logged = true;
      AppConsts.logged = true;
    } else {
      this.logged = false;
      AppConsts.logged = false;
    }

  }
}
