import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-section',
  templateUrl: './common-section.component.html',
  styleUrls: ['./common-section.component.css']
})
export class CommonSectionComponent implements OnInit {

  constructor(private router: Router) { }
  sideDiv: any;
  sideMain: any;
  url: any;
  ngOnInit(): void {
    this.url = localStorage.getItem('menu_url')
    // this.admin_data.get_menu_urls(this.rid, null).subscribe((data)=>{console.log(data)
    //   this.logoData=data;
    //   console.log(this.logoData) //fetching the logo image to be shown on sidebar
    //   this.logo_img=this.url+this.logoData.logo_dt[0].logo_path;})
  }
  openNav() { //opening side bar
    this.sideDiv = document.getElementById("mySidebar")
    this.sideDiv.style.width = "250px";
    this.sideMain = document.getElementById("main")
    this.sideMain.style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() { //closing the sidebar 
    this.sideDiv = document.getElementById("mySidebar")
    this.sideDiv.style.width = "0";
    this.sideMain = document.getElementById("main")
    this.sideMain.style.marginLeft = "0";
  }
  go_to_user_cal() { //fetching the user calendar
    // alert("hello")
    this.router.navigate(['/user_calendar', localStorage.getItem('rid'), 0])

  }
  go_to_menu() {
    location.href = this.url
  }
  go_to_user_restaurant() {
    // this.router.navigate(['/laguna_fun_rest',localStorage.getItem('rid')])
  }
}
