import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent{
complexForm : FormGroup;

  constructor(fb: FormBuilder, protected router: Router){
    this.complexForm = fb.group({

      'firstName' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],

      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],

      'e-mail': [null, Validators.compose([Validators.required, Validators.email, Validators.maxLength(20)])],

      'phone': [null, Validators.compose([Validators.required, Validators.pattern("([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})")])],

      "submitted": false,
    })
  }

  validateForm() {
    if (this.complexForm.invalid) {
      this.complexForm.get('firstName').markAsTouched();
      this.complexForm.get('lastName').markAsTouched();
      this.complexForm.get('e-mail').markAsTouched();
      this.complexForm.get('phone').markAsTouched();
      return;
    } else {
      this.complexForm.get('submitted').markAsTouched();
      setTimeout(function(){ 
        window.location.reload();
      }, 3000);
    }
}
}
