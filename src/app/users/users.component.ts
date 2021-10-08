import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUsers;
  title = 'Users';
  constructor() {
    this.allUsers = [];
  }
  ngOnInit(): void {
  }

}
