import { Component, OnInit } from '@angular/core';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private logout_data:LagunaserviceService) { }

  ngOnInit(): void {
  }
 logout(){
  // alert("hello")
 
   this.logout_data.logout_service();
 }
 show_alert(){
   alert("hello")
 }
}
