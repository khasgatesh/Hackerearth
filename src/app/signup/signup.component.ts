import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,public router:Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
      mobileno: ['', Validators.required,Validators.maxLength(10)],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          tickets:['',Validators.required]
      });
  }

  onSubmit() {
      this.submitted = true;

      // stop the process here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

       this.router.navigate(['success'])
  }

}
