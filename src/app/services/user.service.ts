import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // initializing properties
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Dan',
        lastName: 'Malone',
        email: 'Dan@gmail.com',
        isActive: false,
        registered: new Date('03/02/2018 06:30:00'),
        hide: true
      },
      {
        firstName: 'Melissa',
        lastName: 'Doe',
        email: 'Melissa@gmail.com',
        isActive: true,
        registered: new Date('11/02/2017 10:30:00'),
        hide: true
      }
    ];
   }
   // example where 1, 2, 3, 4 will be printed after 2000 seconds in the console when the users section is brought up
   getData() {
     this.data = new Observable(observer => {
        setTimeout(() => {
          observer.next(1);
        }, 1000);

        setTimeout(() => {
          observer.next(2);
        }, 2000);

        setTimeout(() => {
          observer.next(3);
        }, 3000);

        setTimeout(() => {
          observer.next(4);
        }, 4000);
     });

     return this.data;
   }

   getUsers(): Observable<User[]> {
      return of(this.users);
   }

   addUser(user: User) {
      this.users.unshift(user);
   }
}
