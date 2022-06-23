import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-laguna-fun',
  templateUrl: './laguna-fun.component.html',
  styleUrls: ['./laguna-fun.component.css']
})
export class LagunaFunComponent implements OnInit {

  constructor(private admin_data:LagunaserviceService, private router:Router,private activatedRoute:ActivatedRoute) { }
  sideDiv:any;
  url=url_set.api_url+'/'
  rid:any;
  sideMain:any
  logoData:any;
  logo_img:any
  ngOnInit(): void {
    this.rid=this.activatedRoute.snapshot.params['id']; //fetching the restaurant ID
    this.admin_data.get_menu_urls(this.rid, null,null).subscribe((data)=>{console.log(data)
      this.logoData=data;
      console.log(this.logoData) //fetching the logo image to be shown on sidebar
      this.logo_img=this.url+this.logoData.logo_dt[0].logo_path;})
  }
  openNav() { //opening side bar
    this.sideDiv=document.getElementById("mySidebar")
    this.sideDiv.style.width = "250px";
    this.sideMain=document.getElementById("main")
    this.sideMain.style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() { //closing the sidebar 
    this.sideDiv=document.getElementById("mySidebar")
    this.sideDiv.style.width = "0";
    this.sideMain=document.getElementById("main")
    this.sideMain.style.marginLeft = "0";
  }
  go_to_user_cal(){ //fetching the user calendar
// alert("hello")
  this.router.navigate(['/user_calendar',this.rid,0])

  }
  go_to_menu(){ //going back to the landing page on clicking on the menu option in the sidebar
    window.history.go(-1);
  }
}
