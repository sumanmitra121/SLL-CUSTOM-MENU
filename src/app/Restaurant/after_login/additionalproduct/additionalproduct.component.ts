import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../../service/dataservice.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-additionalproduct',
  templateUrl: './additionalproduct.component.html',
  styleUrls: ['./additionalproduct.component.css']
})
export class AdditionalproductComponent implements OnInit {
  stnd_spl_menu:boolean=false;
  stnd_calendar:any;
  stnd_birth_day:any;

  stnd_plus_spl_menu:boolean=false;
  stnd_plus_calendar:any;
  stnd_plus_birth_day:any;


  premium_spl_menu:boolean=false;
  premium_calendar:any;
  premium_birth_day:any;

  m_calendar:any;
  b_calendar:any;
  e_calendar:any;
  a_calendar:any;
  s_calendar:any;
  value1:any=0;
  value2:any=0;
  value3:any=0;

  w:any;
  w2:any;
  t:any;
  o4:any;
  s:any;
  p1:any;
  p2:any;
  p3:any;
  m:any;
  sp_setup:any;
  sp_monthly:any;
  sp_desc:any;
  spp_setup:any;
  spp_monthly:any;
  spp_desc:any;
  p_setup:any;
  p_monthly:any;
  p_desc:any;
  enable_button= true;
  packageData:any;
  promoData:any;
  price_b='';
  price_e='';
  id_rest:any;
  orderData:any;
  tbl: any;
  wall: any;
  wall2: any;
  self: any;
  menus_first:any;
  menus_second:any;
  menus_third:any
  clingData:any;
  cling_data1='';
  cling_data2='';
  cling_data3='';
  cling_data4='';
  modedata:any;
  op2:any;
  op1:any;
  package_mode:any;
  birthday_mode:any;
  event_mode:any;
  wall_mode:any;
  enable_next=true;
  enable_birthday_tab=true;
  enable_event_tab=true;
  enable_wall_tab=true;
  pkg:any;
  standard=false;
  standardplus=false;
  premium=false;
  birthday:any;
  x:any;
  // RES_ID:any=localStorage.getItem('RES_id');
  RES_ID:any;
  entertainment:any;
  catch_selected_order:any=[];
  Tabletop_Sign_Holder:any='';
  Wall_Mount_Sign_Holder1:any='';
  Wall_Mount_Sign_Holder2:any='';
  Window_Clings:any='';
  constructor(public toastr: ToastrManager,private _data:DataserviceService,private router:Router,private lagunaserve:LagunaserviceService) { }
  id:any="updatepackage";
  ngOnInit(): void {
    
    // var rest=this.route.snapshot.params['id'];
    this.RES_ID=localStorage.getItem('Restaurant_id');
    console.log(this.RES_ID);

    this.id_rest=localStorage.getItem('Restaurant_id');
    console.log(this.id_rest);
    // retrieving the package data for order page
    this._data.getPackage(this.RES_ID).subscribe(data=>{
    this.packageData=data;
    console.log(data)
    // fetching data for all the package data
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
    // fetching promo data 
    this._data.getPromo(this.RES_ID).subscribe(data=>{console.log(data)
    this.promoData=data;
    console.log(data)
    if(this.promoData.msg[0].free_flag=='Y')
    {
      this.price_b='FREE'
    }
    else
    {
      this.price_b='$'+this.promoData.msg[0].price;
    }
    if(this.promoData.msg[1].free_flag=='Y')
    {
      this.price_e='FREE'
    }
    else
    {
      this.price_e='$'+this.promoData.msg[1].price;
    }
    
    })
    // fetching data for holdercling
    this._data.getHoldercling(this.RES_ID).subscribe(data=>{console.log(data)
    this.clingData=data;
    console.log(data);
    if(this.clingData.msg[0].free_flag=='Y'){
      this.cling_data1='FREE'
    }
    else
    {
      this.cling_data1='$'+this.clingData.msg[0].price+' per holder';
    }
    if(this.clingData.msg[1].free_flag=='Y'){
      this.cling_data2='FREE'
    }
    else
    {
      this.cling_data2='$'+this.clingData.msg[1].price+' per holder';
    }
    if(this.clingData.msg[2].free_flag=='Y'){
      this.cling_data3='FREE'
    }
    else
    {
      this.cling_data3='$'+this.clingData.msg[2].price+' per holder';
    }
    if(this.clingData.msg[3].free_flag=='Y'){
      this.cling_data4='FREE'
    }
    else
    {
      this.cling_data4='$'+this.clingData.msg[3].price+' per holder';
    }

    
    })
     this.lagunaserve.get_selectedd_order(this.RES_ID).subscribe(data=>{
     console.log(data);
     this.catch_selected_order=data;
     if(this.catch_selected_order.msg!=''){
    console.log(this.catch_selected_order.msg[0].package_id)

    this.value1=1;
    this.value2=2;
    this.value3=3;
    this.enable_birthday_tab = false
    this.enable_wall_tab=false;
    this.enable_event_tab=false;
    
    console.log(this.catch_selected_order.msg[0].package_id)
     if(this.catch_selected_order.msg[0].package_id==1){
      console.log("package1");
   this.pkg=this.catch_selected_order.msg[0].package_id;
       this.standard=true;
       this.enable_next=false;
     }
     if(this.catch_selected_order.msg[0].package_id==2){
      console.log("package2");
      this.pkg=this.catch_selected_order.msg[0].package_id;


      this.standardplus=true;
      this.enable_next=false;


     }
     if(this.catch_selected_order.msg[0].package_id==3){
      console.log("package3");
      this.pkg=this.catch_selected_order.msg[0].package_id;

      this.premium=true;
      this.enable_next=false;


     }
    this.Tabletop_Sign_Holder=this.catch_selected_order.msg[0].table_top_6;
     this.tbl=this.Tabletop_Sign_Holder;
    this.Wall_Mount_Sign_Holder1=this.catch_selected_order.msg[0].table_top_7;
    this.wall=this.Wall_Mount_Sign_Holder1
    this.Wall_Mount_Sign_Holder2=this.catch_selected_order.msg[0].table_top_8; 
    this.wall2=this.Wall_Mount_Sign_Holder2;
    this.Window_Clings=this.catch_selected_order.msg[0].window_cling_9;
    this.self= this.Window_Clings;
    if(this.catch_selected_order.msg[0].event_calendar=='Y'){
      // this.entertainment=document.getElementById('option2a');
      // console.log(this.entertainment)
      // this.entertainment.checked=true;
      this.op2='Y';
 
      }
      else{
      //  this.entertainment=document.getElementById('option2a');
       
      //  this.entertainment.checked=false;
      this.op2='N';
 
      }
      if(this.catch_selected_order.msg[0].birth_calendar_flag=='Y'){
      //  this.birthday=document.getElementById('option1a');
      //  this.birthday.checked=true;
       this.op1='Y';
      }
     else{
      //  this.birthday=document.getElementById('option1a');
      //  this.birthday.checked=false;
       this.op1='N';
 
     }
     }

   })
  //  checking for existing package
if("activetab" in localStorage){
  if(localStorage.getItem('activetab')=='updatepackage'){
    this.id=localStorage.getItem('activetab');
  }
  else{
    this.id=localStorage.getItem('activetab');
  }
}
  }
  // opening tab
  openCity(tabname:any){
  this.id=tabname;
  localStorage.setItem('activetab',this.id)
  }
  // update packages
  enable_birthday(){
    this.value1=1;
    this.enable_birthday_tab=false;
    console.log(this.pkg);
    var dt={
       "package":this.pkg,
       "email":localStorage.getItem('Email'),
       "res_id":localStorage.getItem('Restaurant_id')
    } 
    this.lagunaserve.afterlogin_update_packege(dt).subscribe(data=>{
      console.log(data);
      this.myFunction();
   this.toastr.successToastr('Update Successful!','',{position:'bottom-center',animate:'slideFromBottom'})

    })
  }
//check which package has been selected
  getcheckvalue(event:any){
    if(event.target.id=='option1a'){
      console.log("option1a");     
      if(event.target.checked==true){
        this.op1="Y";
      }
      else {
        this.op1="N"
      }
    }
   else if(event.target.id=='option2a'){
    console.log("option2a");

      if(event.target.checked==true){
        this.op2="Y";
      }
      else {
        this.op2="N"
      }
    }
  }
// open tabs
  enable_event(v:any){
    this.enable_event_tab=false;
    this.value1=1;
    if(v==true)
    this.op1='Y';
    else
    this.op1='N'
    console.log(this.op1);
    // this.mode1='entertainment'
    this.birthday_mode=document.getElementById('defaultOpen1');
    this.birthday_mode.style.background="white";
    this.birthday_mode.style.color='black'
    this.event_mode=document.getElementById('defaultOpen2');
    this.event_mode.style.background='#00477E';
    this.event_mode.style.color='white'
    this.wall_mode=document.getElementById('defaultOpen3');
    this.wall_mode.style.background='white';
    this.wall_mode.style.color='black'
    this.package_mode=document.getElementById('defaultOpen');
    this.package_mode.style.background='white';
    this.package_mode.style.color='black'
  }
  // select new package
  enable_package_next(v:any){
    this.value2=2;

    if(v==1)
    {
      this.standard=true;
      this.standardplus=false;
      this.premium=false;
    }
    else if(v==2){
      this.standard=false;
      this.standardplus=true;
      this.premium=false;
    }
    else if(v==3){
      this.standard=false;
      this.standardplus=false;
      this.premium=true;
    }
    else{}
    this.pkg=v;
    console.log(this.pkg)
    this.enable_next=false;
    // alert(this.enable_next);
  }
  // update new facilities
  submit_text_data(v1:any,v2:any,v3:any,v4:any){
    this.value1=1;
    console.log(this.RES_ID,localStorage.getItem('encoded_data'));
    
    this.lagunaserve.pay_email(this.RES_ID,localStorage.getItem('encoded_data')).subscribe(data=>{
      console.log(data);
    });
    this.tbl=v1;
    this.wall=v2;
    this.wall2=v3;
    this.self=v4;
    var dt = {
      "res_id":this.id_rest,
      "package": this.pkg,
      "birthday": this.op1,
      "event": this.op2,
      "acrylic": 'Y',
      "tabletop": this.tbl,
      "wall_mount1": this.wall,
      "wall_mount2": this.wall2,
      "self": 'Y',
      "window": this.self
    }
    console.log(dt);
    this._data.sendOrderData(dt).subscribe(data=>{console.log(data)
      this.orderData=data;
      if(this.orderData.suc==1)
      this.router.navigate(['/payment',this.id_rest])
      else
      this.myFunction()
      },
      error=>{this.myFunction()})
  }
  // 
  enable_wall(v:any){
    this.value3=3;
    if(v==true)
   this.op2='Y';
   else
   this.op2='N'
   console.log(this.op2);
   this.enable_wall_tab=false;
  //  this.mode1='wallSignHolder'
   this.birthday_mode=document.getElementById('defaultOpen1');
   this.birthday_mode.style.background="white";
   this.birthday_mode.style.color='black'
   this.event_mode=document.getElementById('defaultOpen2');
   this.event_mode.style.background='white';
   this.event_mode.style.color='black'
   this.wall_mode=document.getElementById('defaultOpen3');
   this.wall_mode.style.background='#00477E';
   this.wall_mode.style.color='white'
   this.package_mode=document.getElementById('defaultOpen');
   this.package_mode.style.background='white';
   this.package_mode.style.color='black'
  }
 
//function to open help options at the bottom of the page
// openCityHelp(v:any){
//   this.mode=v;
// }
// function to enable the submit button whenever a radio button is clicked
enable(){
  this.enable_button=false;
}
// function to submitting order details
submitOrder(pkg:any,op1:any,op2:any,op3:any,tbl:any,wall:any,wall2:any,op4:any,self:any){
  // alert("hello");
  if(op1==true)
  op1='Y'
  else
  op1='N'
  if(op2==true)
  op2='Y'
  else
  op2='N'
  if(op3==true)
  op3='Y'
  else
  op3='N'
  if(op4==true)
  op4='Y'
  else
  op4='N'
  this.p1=document.getElementById('pack1');
  this.p2=document.getElementById('pack2');
  this.p3=document.getElementById('pack3');
if(this.p1.checked==true)
pkg=this.p1.value;
if(this.p2.checked==true)
pkg=this.p2.value;
if(this.p3.checked==true)
pkg=this.p3.value;
//sending the json data

  // console.log(dt);
 
}
// function for reseting the form
clear_all(){
  // this.m_calendar=document.getElementById('menu1a');
  // this.m_calendar.checked=false;
  this.b_calendar=document.getElementById('option1a');
  this.b_calendar.checked=false;
  this.e_calendar=document.getElementById('option2a');
  this.e_calendar.checked=false;
  this.a_calendar=document.getElementById('option3');
  this.a_calendar.checked=false;
  this.s_calendar=document.getElementById('option4');
  this.s_calendar.checked=false;
  this.t=document.getElementById('tblsign');
  this.t.value='';
  this.w=document.getElementById('wallsign1');
  this.w.value='';
  this.w2=document.getElementById('wallsign2');
  this.w2.value='';
  this.p1=document.getElementById('pack1');
  this.p1.checked=false;
  this.p2=document.getElementById('pack2');
  this.p2.checked=false;
  this.p3=document.getElementById('pack3');
  this.p3.checked=false;
  this.m=document.getElementById('selfcling');
  this.m.value='';
  this.enable_button=true;
}
myFunction() {
  // console.log("hello")
  // Get the snackbar DIV
  this.x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  this.x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(()=>{ this.x.className =this.x.className.replace("show", ""); }, 3000);
} 

update_package(){
  console.log(this.op1,this.op2,this.Window_Clings,this.Wall_Mount_Sign_Holder2,this.Wall_Mount_Sign_Holder1,this.Tabletop_Sign_Holder);
  var dt={
    "birthday":this.op1,
"event":this.op2,
"tabletop":this.Tabletop_Sign_Holder,
"wall_mount1":this.Wall_Mount_Sign_Holder1,
"wall_mount2":this.Wall_Mount_Sign_Holder2,
"window":this.Window_Clings,
"email":localStorage.getItem('Email'),
"res_id":localStorage.getItem('Restaurant_id')
  }
  this.lagunaserve.afterlogin_update_window(dt).subscribe(data=>{
    console.log(data);
    this.myFunction() 
    console.log(this.RES_ID);
     var res_id={
       "res_id":localStorage.getItem('Restaurant_id')
     }
   this.toastr.successToastr('Update Successful!','',{position:'bottom-center',animate:'slideFromBottom'})
    
    this.router.navigate(['/additionalpayment']);      

  })
}
}
