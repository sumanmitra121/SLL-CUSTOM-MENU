import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url_set } from 'src/app/globalvar';
import { DataserviceService } from 'src/app/Restaurant/service/dataservice.service';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-afterloginsidebar',
  templateUrl: './afterloginsidebar.component.html',
  styleUrls: ['./afterloginsidebar.component.css']
})
export class AfterloginsidebarComponent implements OnInit {
   res:any=localStorage.getItem('encode');
   event:boolean=false;
   laguna:any=[];
   log:any=[];
   birthday:any=[];
   show_promo:any;
   logo_res:any;
   img_url=url_set.api_url+'/';
   RES_ID:any=localStorage.getItem('Restaurant_id')
  constructor(private router:Router,private lagunaserve:LagunaserviceService) {
    // localStorage.setItem('Restaurant_id',atob(this.res));

   }

  ngOnInit(): void {
    // fetching the birthday/anniversary information
    // this.lagunaserve.checkactivity(this.RES_ID).subscribe(data=>{console.log(data)})
    this.lagunaserve.get_selectedd_order(this.RES_ID).subscribe(data=>{console.log(data)
    this.birthday=data;
    this.show_promo=this.birthday.msg[0].birth_calendar_flag;
    console.log(this.show_promo);
  });
    // to check whether the restaurant has opted for calendar
    this.lagunaserve.check_calender(this.RES_ID).subscribe(data=>{
      console.log(data);
      this.laguna=data;
      if(this.laguna.msg[0].event_calendar=='Y'){
        this.event=false;
      }    
      else{
        this.event=true;

      }
    })
//  fetching the menu on choice
    this.lagunaserve.get_menu_urls(this.RES_ID,null,null).subscribe(data=>{
      console.log(data);
       this.log=data;
       if(this.log.logo_dt.length!=0){

       for(let i=0;i<this.log.logo_dt.length;i++){
          if(this.log.logo_dt[i].logo_path!=''){
            this.logo_res=this.img_url+this.log.logo_dt[i].logo_path
          }

      }

  
       }
})

  }
  go_to_res(){
    // function called when the control flow goes to the restaurant dashboard
     this.router.navigate(['/restaurant/dashboard',this.res])
  }
  go_out(){
    // function triggered when the control logs out
    this.router.navigate(['/login']);
  }

}
