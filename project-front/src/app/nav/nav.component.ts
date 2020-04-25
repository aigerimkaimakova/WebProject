import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
appTitle = 'Gallery';
  public logged: boolean = false
  constructor() { }

  ngOnInit(): void {
    let user = localStorage.getItem('token')
    if(user) this.logged = true
  }

  

}
