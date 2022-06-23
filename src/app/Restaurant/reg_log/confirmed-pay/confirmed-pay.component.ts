import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../../service/dataservice.service';
import { DatePipe } from '@angular/common';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-confirmed-pay',
  templateUrl: './confirmed-pay.component.html',
  styleUrls: ['./confirmed-pay.component.css']
})
export class ConfirmedPayComponent implements OnInit {

  id_rest: any;
  // menu_url:any="http://localhost:4200/menu/";
  menu_url=url_set.Redirect_url;
  res_nme:any;
  x: any;
  dashboardData:any=[];
  success:any;
  rest_nm:any;
  paymentData: any;
  pay_Check:any=[];
  openmodal:any;
  PAY:boolean=false;
  paycheck:any;
  time_dt_now:any;
  dt_now:any;
  time_now:any;
  URL=url_set.Api_url+'/#/login';
  now_datetime:any;
  breakupData:any;
  breakupsetup: any;
  breakupmonthly: any;
  breakupcal: any;
  breakupbirthday: any;
  breakupwindow: any;
  tabletop1: any;
  tabletop2: any;
  tabletop3: any;
  decoded_rest_id:any;
  table_total:any;
  grand_total:any;
  confirmorderData:any;
  constructor(private toaster:ToastrManager,private activatedroute: ActivatedRoute,private lagunaserve:LagunaserviceService, private router: Router, private _data: DataserviceService) { }

  ngOnInit(): void {
    var now_date = new Date();
    var datePipe = new DatePipe("en-US");
    this.now_datetime = datePipe.transform(now_date,"yyyy-MM-dd hh:mm:ss");
    // console.log(now_datetime);
    
    this.id_rest = this.activatedroute.snapshot.params['id'];
    localStorage.setItem('rest_id',this.id_rest);
    console.log(atob(this.id_rest).split('/')[0]);
   console.log(this.id_rest);
   console.log(atob(this.id_rest).split('/').length)
   this.decoded_rest_id=atob(this.id_rest).split('/')[0];

  if(atob(this.id_rest).split('/').length > 2){
    this.time_dt_now=atob(this.id_rest).split('/')[2];
    console.log({ct:this.time_dt_now, mt: this.now_datetime});
    if(this.time_dt_now >= this.now_datetime){
      this.lagunaserve.checkpayment(atob(this.id_rest).split('/')[0]).subscribe(data=>{
        console.log(data);
        this.pay_Check=data;
        if(this.pay_Check.msg[0].pay_flag==1){
              this.PAY=true;
              this.paycheck=document.getElementById('paycheck');
              this.paycheck.click();
        }
        else{
          this.PAY=false;
        }
      })
    }else{
     this.router.navigate(['/no_link'])
    }
  }else{console.log(this.time_dt_now);
   
   this.lagunaserve.checkpayment(atob(this.id_rest).split('/')[0]).subscribe(data=>{
     console.log(data);
     this.pay_Check=data;
     if(this.pay_Check.msg[0].pay_flag==1){
           this.PAY=true;
           this.paycheck=document.getElementById('paycheck');
           this.paycheck.click();
     }
     else{
       this.PAY=false;
     }
   })}
   this.lagunaserve.get_order_breakup(this.decoded_rest_id).subscribe(data=>{console.log(data)
    this.breakupData=data;
    this.breakupsetup=this.breakupData.msg[0].setup_fee;
    this.breakupmonthly=this.breakupData.msg[0].monthly_fee;
    this.breakupcal=this.breakupData.msg[0].cal_price;
    this.breakupbirthday=this.breakupData.msg[0].eve_price;
    this.breakupwindow=this.breakupData.msg[0].window_cling_9_price
    this.tabletop1=this.breakupData.msg[0].table_top_6_price;
    this.tabletop2=this.breakupData.msg[0].table_top_7_price;
    this.tabletop3=this.breakupData.msg[0].table_top_8_price;
    this.table_total=Number(this.tabletop1)+Number(this.tabletop2)+Number(this.tabletop3)
    this.grand_total=Number(this.breakupsetup)+Number(this.breakupmonthly)+Number(this.breakupcal)+Number(this.breakupbirthday)+Number(this.breakupwindow)+this.table_total
    })
  }
  go_to_login() {
    this.lagunaserve.get_specific_admin_dashboard(atob(this.id_rest).split('/')[0]).subscribe(data=>{console.log(data);
      this.dashboardData=data;
      this.dashboardData=this.dashboardData.msg;
      this.rest_nm=this.dashboardData[0].restaurant_name;
      this.rest_nm=this.rest_nm.replace(' ','_')
      console.log(this.rest_nm);
  
    console.log(this.rest_nm);

    var dt = {
      res_id: this.id_rest,
      url:this.menu_url= this.menu_url+this.rest_nm+'/'+btoa(this.id_rest)
      }
    console.log(dt);
     this._data.sendPaymentData(dt).subscribe(data => {
      console.log(data);
       this.success=data;
       console.log(this.success);
      //  show menus according to the package selected
       if(this.success.suc == 1){
        //  localStorage.setItem('breakfast','active');
        //  localStorage.setItem('launch','active');
        //  localStorage.setItem('dinner','active');
        //  localStorage.setItem('brunch','active');
        this.toaster.successToastr('Payment Successful , please check your email','');
        localStorage.setItem('No_of_menu',this.success.res.no_of_menu);
        localStorage.setItem('Restaurant_id',this.success.res.id);
        localStorage.setItem('Restaurant_email',this.success.res.email);
        localStorage.setItem('Restaurant_name',this.success.res.restaurant_name);
       this.myFunction();
      //  setTimeout(() => {
        //  if(localStorage.getItem('No_of_menu')=='U'){
        //   this.router.navigate(['/CreateMenus']);
  
        //  }
        //  else{
          this.router.navigate(['/menu_setup']);
        //  }
      // }, 3000)
       }
       else{
        this.toaster.errorToastr('Payment Successful , please check your email','');
       }
      
    })
  })
   

   
  }
  // function to show snackbar
  myFunction() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(() => { this.x.className = this.x.className.replace("show", ""); }, 3000);
  }

  goto_loginpage(){
    this.router.navigate(['/login']).then(()=>{
      location.reload();
    })
  }
}
