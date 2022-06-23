import { Component, OnInit } from '@angular/core';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  id="data";
  dashboardData:any=[];
  rest_nm:any;
  url_nm:any;
  url1=url_set.Redirect_url;
  rest_contact:any;
  rest_phone:any;
  rest_em:any;
  rest_web:any;
  rest_monthly:any;
  rest_setup:any;
  r_id:any=localStorage.getItem('Restaurant_id');
  rest_add:any;


  constructor(private admin_data:LagunaserviceService) { }

  ngOnInit(): void {
    // account data for restaurants
    this.admin_data.get_specific_admin_dashboard(localStorage.getItem('Restaurant_id')).subscribe(data=>{
      console.log(data);      
      this.dashboardData=data;
      this.dashboardData=this.dashboardData.msg;
      this.rest_nm=this.dashboardData[0].restaurant_name;
      this.url_nm=this.rest_nm.replace(/ /g,'_');
      this.url1=this.url1+this.url_nm+'/'+btoa(this.r_id);
      console.log(this.url1)
      this.rest_contact=this.dashboardData[0].contact_name;
      this.rest_phone=this.dashboardData[0].phone_no;
      this.rest_em=this.dashboardData[0].email;
      this.rest_web=this.dashboardData[0].website;
      this.rest_monthly=this.dashboardData[0].monthly_fee;
      this.rest_setup=this.dashboardData[0].setup_fee;
      this.rest_add=this.dashboardData[0].addr_line1+" "+this.dashboardData[0].addr_line2+" "+this.dashboardData[0].zip+" "+this.dashboardData[0].city+", "+this.dashboardData[0].country
    })
  }
  // opening tabs
  openCity(tabname:any){
    console.log(tabname);
     this.id=tabname;
  }

}
