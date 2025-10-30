import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'

@Component({
  selector: 'app-nav',
  imports: [MatSidenavModule, MatListModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}
