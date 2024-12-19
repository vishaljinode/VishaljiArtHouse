import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  onSubmit(): void {
    // You can handle the form submission here (e.g., sending data to a backend or showing a success message)
    console.log('Form submitted!', this.contact);

    // Clear the form after submission (optional)
    this.contact = { name: '', email: '', message: '' };
  }
}
