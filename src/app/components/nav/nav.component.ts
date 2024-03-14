import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  activeMenu = false;

  toggleNavBar() {
    this.activeMenu = !this.activeMenu;
  }

}
