import { UserModule } from './user/user.module';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  // template: '<p>Helloo</p>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users: [UserModule] = [
    { name: 'Jayachandra', id: 100, username: 'ajchandra' },
    { name: 'Rama', id: 101, username: 'ram12' },
    { name: 'Shiva', id: 102, username: 'shiv124' },
    { name: 'Sekhar', id: 103, username: 'sekhar3' },
    { name: 'Geetha', id: 104, username: 'geet34' }
  ]
  newUser: UserModule;
  selectedUser: UserModule;

  constructor() {
    console.log('hello');
  }

  onCreatedNewUser(event) {
    console.log(event)
    // this.newUser = event.user;
    this.users.push(event.user);
  }

  onShowUserDetail(event) {
    // console.log(event.selectedUser.name);
    this.selectedUser = event.selectedUser;
  }
}
