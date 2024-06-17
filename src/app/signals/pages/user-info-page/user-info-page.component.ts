import { Component, OnInit, inject, signal } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/UserData.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{

  private userService = inject(UserServiceService);
  public idUser = signal(1);
  public userInfo = signal<User | undefined>(undefined);

  changeUser(num: number): void{
    if (num <= 0) return;
    this.idUser.update(val=> val = num);

    this.userService.getUsers(this.idUser())
      .subscribe(result => this.userInfo.set(result))
  }

  ngOnInit(): void {
    this.changeUser(this.idUser());
  }
}
