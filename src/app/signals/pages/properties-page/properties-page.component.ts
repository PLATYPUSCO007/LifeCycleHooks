import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/UserData.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public userinfo = signal<User>({
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  });

  public counter = signal<number>(0);

  public userEffectChange = effect(()=>{
    console.log(`${this.userinfo().email} - ${this.counter()}`);
  });

  updateInfoUser(key: keyof User, val: string){
    this.userinfo.update(current=>{
      const userCopy = current;
      current = {...userCopy, [key]: val};
      return current;
    })
  }

  updateCounter(val: number){
    this.counter.update(current=>current + val);
  }
}
