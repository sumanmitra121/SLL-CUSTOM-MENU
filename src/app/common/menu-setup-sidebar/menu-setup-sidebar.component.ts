import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-setup-sidebar',
  templateUrl: './menu-setup-sidebar.component.html',
  styleUrls: ['./menu-setup-sidebar.component.css']
})
export class MenuSetupSidebarComponent implements OnInit {

  constructor(private router:Router) { }
   No_of_menu:any=localStorage.getItem('No_of_menu');
   
  ngOnInit(): void {
  }
  go_t_logOut(){
    this.router.navigate(['/'])
    localStorage.clear();
    localStorage.setItem('isloggedin','false');
  }

}
