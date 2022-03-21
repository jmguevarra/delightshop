import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navItemSelected = new EventEmitter<string>();
  
  constructor() { }
  ngOnInit(): void {}

  navSelected(navItem: string){
    this.navItemSelected.emit(navItem);
    console.log(navItem);
  }

}

