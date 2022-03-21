import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delightshop';
  activeMenu = 'recipe';

  onNavigate(selectedNavItem: string){
    this.activeMenu = selectedNavItem;
  }
}
