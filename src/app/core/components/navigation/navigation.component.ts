import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  hiddenNav:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.hiddenNav = !this.hiddenNav
    console.log(this.hiddenNav)
    return this.hiddenNav
  }

}
