import { Component } from '@angular/core';
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
export class DatepickerComponent {
  selectedEvent: Date | null;
  selectedDate: string;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
  });

  get name(): AbstractControl | null {
    return this.form.get('name');
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get phoneNumber(): AbstractControl | null {
    return this.form.get('phoneNumber');
  }

  sendForm(): void {
    if (this.form.valid) {
      let userData = {
        ...this.form.getRawValue(),
        selectedEvent: this.selectedEvent,
        selectedDate: this.selectedDate,
      };
      console.log(userData);
    }
  }
}
