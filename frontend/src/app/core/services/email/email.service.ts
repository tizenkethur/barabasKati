import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { UserData } from 'src/app/shared/models/UserData';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  sendForm(userData: UserData) {
    emailjs
      .send(
        'service_hvvr4ee',
        'template_om3fl8o',
        {
          from_name: userData.name,
          from_email: userData.email,
          phone_number: userData.phoneNumber,
          selected_date: userData.selectedDate,
          selected_event: userData.selectedEvent,
        },
        'QK-7djy4z04ErHMCF'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Form has been sent.');
        },
        (error: Error) => {
          console.log(error.message);
        }
      );
  }
}
