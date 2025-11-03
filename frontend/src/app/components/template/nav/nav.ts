import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [MatSidenavModule, MatListModule, RouterModule, RouterOutlet],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}
