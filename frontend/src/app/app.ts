import { Component } from '@angular/core';
import { Header } from './components/template/header/header';
import { Footer } from './components/template/footer/footer';
import { Nav } from './components/template/nav/nav';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Nav],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class App {

}
