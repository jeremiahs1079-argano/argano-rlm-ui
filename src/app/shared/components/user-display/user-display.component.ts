import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

  myUser: User = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    imageUrl: '',
  };
  
  userSubscription: Subscription;

  constructor(
    private userService: UserService,
  ) { 
    this.userSubscription = this.userService.getCurrentUser().subscribe(
      user => this.myUser = user,
    );
  }

  ngOnInit(): void {
    
  }

}
