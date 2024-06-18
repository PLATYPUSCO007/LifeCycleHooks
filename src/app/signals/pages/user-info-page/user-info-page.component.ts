import { Component, OnInit, computed, inject, signal } from '@angular/core';
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
  public isFoundUser = signal<boolean>(true);
  public nameCompleteUser = computed(()=>{
    return (!this.userInfo()) ? 'Este usuario no tiene nombre' : `${this.userInfo()?.first_name} ${this.userInfo()?.last_name}`;
  })

  changeUser(num: number): void{
    if (num <= 0) return;
    this.idUser.set(num);
    this.userInfo.set(undefined);

    this.userService.getUsers(this.idUser())
      .subscribe({
        next: (user)=>{
          this.userInfo.set(user);
          this.isFoundUser.set(true);
        },
        error: (e)=>{
          this.isFoundUser.set(false);
          this.userInfo.set(undefined);
          console.error('Error en la consulta ', e);
        }
      })
  }

  ngOnInit(): void {
    this.changeUser(this.idUser());
  }
}
