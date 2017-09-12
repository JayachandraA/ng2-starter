import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModule } from './../user/user.module';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  newUser: UserModule = new UserModule();
  isFormActive = true;
  @Output() newUserCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.newUserCreated.emit({user: this.newUser})
    this.newUser = new UserModule();
    this.isFormActive = false;
    setTimeout(function () {
      this.isFormActive = true;
    }, 0);
  }
}
