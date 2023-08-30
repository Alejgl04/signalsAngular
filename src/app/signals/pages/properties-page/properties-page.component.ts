import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/users-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg'
  });

  onFieldUpdated( field: keyof User, value: string ) {

    this.user.mutate( current => {
      switch( field ) {
        case 'email':
          current.email = value;
        break;
        case 'first_name':
          current.first_name = value;
        break;
        case 'last_name':
          current.last_name  = value;
        break;
      }
    });

  }
}
