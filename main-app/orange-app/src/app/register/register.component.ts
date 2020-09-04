import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
 // public faAirFreshener = faAirFreshener;
 public faBook=faBook;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['',[ Validators.required ,Validators.minLength(3),Validators.maxLength(15) ]],
    password: ['', [Validators.required ]],
    email: ['', [Validators.required ,Validators.email]],
    mobile: ['',[ Validators.required,,Validators.minLength(3),Validators.maxLength(15)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);
  }
}
