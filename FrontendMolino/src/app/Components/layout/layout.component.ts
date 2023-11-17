import { Component, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatDividerModule, MatListModule, RouterLink, RouterOutlet]
})
export class LayoutComponent implements OnInit {
  showMenu1 = false;
  showMenu2 = false;
  showMenu3 = false;
  showMenu4 = false;
  constructor() {}
  ngOnInit(): void {
    this.toggleMenu2();
  }
toggleMenu1() {
this.showMenu1 = !this.showMenu1;
 }
 toggleMenu2() {
  this.showMenu2 = !this.showMenu2;
}
toggleMenu3() {
  this.showMenu3 = !this.showMenu3;
}
toggleMenu4() {
  this.showMenu4 = !this.showMenu4;
}
}

