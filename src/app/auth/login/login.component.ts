import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  starCount = new Array(500); // Number of stars

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      const payload = {
        email: this.form.controls['email'].value,
        password: this.form.controls['password'].value
      }
      this.api.apiPostCall(payload, 'login').subscribe(data => {
        console.log(data)
      })
    }
  }
}
