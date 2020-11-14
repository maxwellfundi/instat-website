import { Component, OnInit } from '@angular/core';
const MENU_ITEMS: { name: string, href?: string }[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/today" },
  { name: "Download", href: "/next" },
  { name: "Support", href: "/all-sessions" },
  { name: "Developers", href: "/team" },
  { name: "Contact Us", href: "/contact" }, 
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
