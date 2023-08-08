import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmailService } from 'src/app/core/services/email/email.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  selectedEvent: string;
  selectedDate: Date;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(9),
      Validators.maxLength(11),
    ]),
  });

  constructor(private emailService: EmailService) {}

  get name(): AbstractControl | null {
    return this.form.get('name');
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get phoneNumber(): AbstractControl | null {
    return this.form.get('phoneNumber');
  }

  get dateOfEvent(): AbstractControl | null {
    return this.form.get('dateOfEvent');
  }

  sendForm() {
    if (this.form.valid) {
      let userData = {
        ...this.form.getRawValue(),
        selectedDate: this.selectedDate,
        selectedEvent: this.selectedEvent,
      };
      this.emailService.sendForm(userData);
    }
  }
}
