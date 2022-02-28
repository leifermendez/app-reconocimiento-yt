import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu:Array<any> = [
    {
      name:'Github',
      link:'//github.com/leifermendez',
      icon:'uil uil-github-alt'
    },
    {
      name:'Youtube',
      link:'//youtube.com/leifermendez',
      icon:'uil uil-medium-m'
    },
    {
      name:'Telegram',
      link:'//t.me/leifermendez',
      icon:'uil uil-telegram-alt'
    },
    {
      name:'Blog',
      link:'//codigoencasa.com',
      icon:'uil uil-medium-m'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
