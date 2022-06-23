import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../Restaurant/service/dataservice.service';
import { LagunaserviceService } from '../Services/lagunaservice.service';
import { LagunafunBarComponent } from '../user/lagunafun-bar/lagunafun-bar.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  packageData:any;
  sp_setup: any;
  sp_monthly: any;
  sp_desc: any;
  spp_monthly: any;
  spp_desc: any;
  spp_setup:any
  p_monthly: any;
  p_setup: any;
  p_desc: any;
  menus_first: any;
  menus_second: any;
  menus_third: any;
  stnd_spl_menu: any;
  stnd_plus_spl_menu: any;
  premium_spl_menu: any;

  constructor(private _data:DataserviceService) { }

  ngOnInit(): void {
    this._data.getPackage(null).subscribe(data=>{
      this.packageData=data;
      console.log(data)
      // fetch dynamic data for various packages
      this.sp_setup=this.packageData.msg[0].setup_fee;
      this.sp_monthly=this.packageData.msg[0].monthly_fee;
      this.sp_desc=this.packageData.msg[0].pack_description;
      this.spp_setup=this.packageData.msg[1].setup_fee;
      this.spp_monthly=this.packageData.msg[1].monthly_fee;
      this.spp_desc=this.packageData.msg[1].pack_description;
      this.p_setup=this.packageData.msg[2].setup_fee;
      this.p_monthly=this.packageData.msg[2].monthly_fee;
      this.p_desc=this.packageData.msg[2].pack_description;
      //  this.menus1=this.packageData.msg[0].no_of_menu;
       if(this.packageData.msg[0].no_of_menu=='O'){
         this.menus_first="1 Menu";
       }
       else if(this.packageData.msg[0].no_of_menu=='T'){
        this.menus_first="2 Menus";
  
       }
       else{
        this.menus_first="Unlimited";
  
       }
       if(this.packageData.msg[1].no_of_menu=='O'){
        this.menus_second="1 Menu";
  
       }
       else if(this.packageData.msg[1].no_of_menu=='T'){
        this.menus_second="2 Menus";
     
       }
       else{
        this.menus_second="Unlimited";
    
       }
       if(this.packageData.msg[2].no_of_menu=='O'){
         this.menus_third="1 Menu";
       }
       else if(this.packageData.msg[2].no_of_menu=='T'){
        this.menus_third="2 Menus";
       
       }
       else{
        this.menus_third="Unlimited"
  
       }
      
        if(this.packageData.msg[0].special_menu=='N'){
            this.stnd_spl_menu=true;
        }
       if(this.packageData.msg[1].special_menu=='N'){
            this.stnd_plus_spl_menu=true;
         }
       if(this.packageData.msg[2].special_menu=='N')
         {
          this.premium_spl_menu=true;
  
         }
      
      })
      
  }

}
