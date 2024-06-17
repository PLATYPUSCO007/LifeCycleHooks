import { Component, signal } from '@angular/core';
import { MenuInterface } from '../../interfaces/Menu.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = signal<MenuInterface[]>([
    {title: 'Contador', route: 'counter'},
    {title: 'Usuario', route: 'user'},
    {title: 'Mutaciones', route: 'props'},
  ]);

  // public MenuItems: MenuInterface[] = [
  //   {title: 'Contador', route: 'counter'},
  //   {title: 'Usuario', route: 'user'},
  //   {title: 'Mutaciones', route: 'props'},
  // ]
}
