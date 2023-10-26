import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
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

