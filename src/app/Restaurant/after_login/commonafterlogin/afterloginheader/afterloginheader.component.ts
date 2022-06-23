import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-afterloginheader',
  templateUrl: './afterloginheader.component.html',
  styleUrls: ['./afterloginheader.component.css']
})
export class AfterloginheaderComponent implements OnInit {
  Id:any="settings";
  zip:any="";
  city:any="";
  add1:any="";
  add2:any="";
  Email:any="";
  res_tel_no:any="";
  res_contact__name:any="";
  res_name:any="";
  new_pass:any="";
  old_pass:any="";
  website:any="";
  res_det:any=[];
  remove:any;
  con_pass:any="";
  img_url=url_set.api_url+'/';
  logo_res:any;
  x:any;
  Show:any;
  check_psw:any=[];
  pass_user:any;
  constructor(private laguna:LagunaserviceService,private  route:Router) { }

  ngOnInit(): void {
  // fetching restaurant data inside the modal
    this.laguna.get_specific_admin_dashboard(localStorage.getItem('Restaurant_id')).subscribe(data=>{
      console.log(data);
        this.res_det=data;
        this.zip=this.res_det.msg[0].zip;
        this.city=this.res_det.msg[0].city;
        this.add1=this.res_det.msg[0].addr_line1;
        this.add2=this.res_det.msg[0].addr_line2;
        this.Email=this.res_det.msg[0].email;
        this.res_tel_no=this.res_det.msg[0].phone_no;
        this.res_contact__name=this.res_det.msg[0].contact_name;
        this.res_name=this.res_det.msg[0].restaurant_name;;
    this.website=this.res_det.msg[0].website;
    })
     //For Getting password
    //   this.laguna.get_password(localStorage.getItem('Restaurant_id')).subscribe(data=>{
    //     this.res_det=data;
    //     this.old_pass=this.res_det.msg[0].old_password;
       
    // })


  }
  check_mail(event:any){
    console.log(event);
  }
  // opening tab name
  openCity(tabname:any){  
   this.Id=tabname;
  }
//update profile 
  submit_profile_data(){
    var dt={
     "zip":this.zip,
     "cityState":this.city,
      "Address1":this.add1,
      "Address2":this.add2,
      "Email":this.Email,
      "Telephone":this.res_tel_no,
      "Contact":this.res_contact__name,
      "Name":this.res_name,
      "Website":this.website,
      "res_id":localStorage.getItem('Restaurant_id')
    }
    console.log(dt);
    this.laguna.post_res_details(dt).subscribe(data=>{
      console.log(data);
      this.pass_user="Successfully Updated";
    this.myFunction();

    })
  }
// update password
  submit_password(){
    if(this.con_pass==this.new_pass){ 
    var dt={
     "old_psw":this.old_pass,
     "psw":this.new_pass,
     "res_id":localStorage.getItem('Restaurant_id')
    }
    console.log(dt);
   
    this.laguna.post_change_password(dt).subscribe(data=>{
      console.log(data);
      this.check_psw=data;
      if(this.check_psw.suc>0){
     this.pass_user="Successfully Updated";
      this.myFunction();   
     }
    else{
      this.pass_user="Please check your current password";
      this.myFunction();   
    }
    })   
  }
  else{
    this.pass_user="Passwords didn't match, Please Check";
    this.myFunction();
  }
  }
  // function to display snackbar
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  // show/hide password
  show_hide(event:any){
    if(event.target.checked==true){
 this.Show=document.getElementById('Pass1');
  this.Show.type='text';
  this.Show=document.getElementById('pass2');
  this.Show.type='text'
  this.Show=document.getElementById('pass3');
  this.Show.type='text'
  }
  else{
    this.Show=document.getElementById('Pass1');
    this.Show.type='password';
    this.Show=document.getElementById('pass2');
    this.Show.type='password'
    this.Show=document.getElementById('pass3');
    this.Show.type='password'
  }}
  // logging out 
  log_out(){
    this.route.navigate(['/'])
  }

}
