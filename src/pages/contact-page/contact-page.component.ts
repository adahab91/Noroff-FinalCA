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

      'firstName' : [null, Validators.compose([Validators.required, Validators.pattern("^[A-ZÆØÅa-zæøå -\.]+$")])],

      'lastName': [null, Validators.compose([Validators.required, Validators.pattern("^[A-ZÆØÅ]{1}[a-zæøå -\.]+$")])],

      'e-mail': [null, Validators.compose([Validators.required, Validators.pattern("^(([\\w-\\s]+)|([\\w-]+(?:\\.[\\w-]+)*)|([\\w-\\s]+)([\\w-]+(?:\\.[\\w-]+)*))(@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2[0-4][0-9]\\.|1[0-9]{2}\\.|[0-9]{1,2}\\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\]?$)")])],

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
