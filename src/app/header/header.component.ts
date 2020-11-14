import { Component, OnInit } from '@angular/core';
const MENU_ITEMS: { name: string, href?: string }[] = [
  { name: "Home", href: "/" },
  { name: "Today's Session", href: "/today" },
  { name: "Next Sessions", href: "/next" },
  { name: "All Sessions", href: "/all-sessions" },
  { name: "Team", href: "/team" }  
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuDropdownOpen: boolean = false;
  menuItems = MENU_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
