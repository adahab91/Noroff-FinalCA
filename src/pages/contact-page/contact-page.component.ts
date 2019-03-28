import { Component } from '@angular/core';
// We will need to import a couple of specific API’s for dealing with reactive forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent{
  // The FormGroup object as you may remember from the simple form example exposes various API’s for dealing with forms. Here we are creating a new object and setting its type to FormGroup
  complexForm : FormGroup;

  // We are passing an instance of the FormBuilder to our constructor
  constructor(fb: FormBuilder){
    // Here we are using the FormBuilder to build out our form.
    this.complexForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'firstName' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
    })
  }

  

  // Again we’ll implement our form submit function that will just console.log the results of our form
  /* submitForm(value: any){
    console.log(value);
  } */

  validateForm() {
    if (this.complexForm.invalid) {
      this.complexForm.get('firstName').markAsTouched();
      this.complexForm.get('lastName').markAsTouched();
      return;
    }
    // do something else
}
}
