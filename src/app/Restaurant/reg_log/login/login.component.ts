import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../../service/dataservice.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',

]
})
export class LoginComponent implements OnInit {
  v:any=0;
  message='';
  stor:any=[];
com:any=[];
comma:any;
show_alert:boolean=true;
   constructor(private spinner: NgxSpinnerService,private _data:DataserviceService,private router:Router,private lagunaserve:LagunaserviceService) { }
  logData:any;
  x:any;
  check_activity:any=[];
  confirm_modal:any;
  encrypted_res_id:any;
  ngOnInit(): void {
    localStorage.clear();
    localStorage.setItem('isloggedin','false');
    this.confirm_modal=document.getElementById('change_pass_modal');
    this.confirm_modal.style.display='none'
  }
  // function for sending the login credentials
  logSubmit(v:any){
    this.spinner.show()
    this._data.submit_log(v).subscribe(data=>{
      console.log(data);
      
      this.logData=data;
      // console.log(this.logData.msg.restaurant_id);
      if(this.logData.suc>0){
      localStorage.setItem('Restaurant_id',this.logData.msg.restaurant_id);
      localStorage.setItem('Email',this.logData.msg.email_id)
      // alert("hii")

      localStorage.setItem('Restaurant_name',this.logData.msg.restaurant_name);
      localStorage.setItem('Restaurant_email',this.logData.msg.email_id);
      // this.router.navigate(['/menu_setup']).then(()=>{
      //   location.reload();
      //   });
         this.lagunaserve.Check_active_status(this.logData.msg.restaurant_id).subscribe(data=>{
           console.log(data);
           this.check_activity=data;
           if(this.check_activity.msg[0].approval_flag=='A'){  
          this.router.navigate(['/restaurant/dashboard',btoa(this.logData.msg.restaurant_id)]);
           }
           else{
          // this.lagunaserve.getrestaurant_check_menu_setup(this.logData.msg.restaurant_id).subscribe(data=>{
          //   console.log(data);
          //   this.stor=data;
          //     localStorage.setItem('Menu',this.stor.msg[0].menu);
          //     localStorage.setItem('Restaurant_name',this.stor.msg[0].restaurant_name);
          //     localStorage.setItem('No_of_menu',this.stor.msg[0].menu_name);
          //     localStorage.setItem('Restaurant_email',this.stor.msg[0].email_id);
              // if(this.stor.msg[0].menu!=null){
              //   this.comma=this.stor.msg[0].menu;
              //   this.com=this.comma.split(',');
              //   console.log(this.com.length);
              //   console.log(this.com);
              // }
              // else {
                  this.router.navigate(['/menu_setup']).then(()=>{
                    location.reload();
                    });
              // }
          // })
       
                  
     
              }
            })
        }
        else{
          this.spinner.hide();
            this.myFunction_error();
        }
    

    },error=>{
      this.spinner.hide()
      this.message="An error occurred"
      this.myFunction()})
  }
  // snackbar
  myFunction() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 5000);
  }
  // route to change password on clicking on the link
  go_to_change()
  {
    this.router.navigate(['/changepass'])
  }
  // shows up when there is any error while logging in
  myFunction_error(){
     // Get the snackbar DIV
     this.x = document.getElementById("snackbar1");

     // Add the "show" class to DIV
     this.x.className = "show";
 
     // After 3 seconds, remove the show class from DIV
     setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 10000);
  }
}
