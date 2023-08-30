import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  // Signals
  public menuItems = signal<MenuItem[]>([
    { title: 'Counter', route: 'counter' },
    { title: 'Users', route: 'user-info' },
    { title: 'Mutations', route: 'properties' },
  ]);

  // Traditional way
  // public menuItems: MenuItem[] = [
  //   { title: 'Counter', route: 'counter' },
  //   { title: 'Users', route: 'user-info' },
  //   { title: 'Mutations', route: 'properties' },
  // ];
}
