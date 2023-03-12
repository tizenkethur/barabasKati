import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  selected: Date | null;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  sendForm(): void {
    if (this.form.valid) {
      let userData = {
        ...this.form.getRawValue(),
        selected: this.selected,
      };
      console.log(userData);
    }
  }
}
