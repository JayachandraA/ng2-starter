import { UserModule } from './../user/user.module';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() usersList: [UserModule];
  @Output() selectedUser = new EventEmitter();
  activeUser: UserModule;

  constructor() { }

  ngOnInit() {
  }

  onUserSelect(user) {
    // console.log(user);
    this.activeUser = user;
    this.selectedUser.emit({ selectedUser: this.activeUser });
  }

}
