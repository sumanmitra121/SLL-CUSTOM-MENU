import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrManager } from 'ng6-toastr-notifications';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}




@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit,AfterViewInit  {
  displayedColumns: string[] = ['id', 'customer_Name', 'Email','Mobile_No', 'Birthday','Anniversery','view'];
  dataSource=new  MatTableDataSource;
  role:any=0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id:any="Intro";
  intro_current:any='';
  intro_update:any='';
  confirm_mail_current:any='';
  confirm_mail_update:any='';
  Free_Offer_Title_current:any='';
  Free_Offer_Title_update:any='';
  Free_Offer_Body_Text_current:any='';
  Free_Offer_Body_Text_update:any='';
  Additional_Question_1_current:any='';
  Additional_Question_1_update:any='';
  Additional_Question_2_current:any=''
  Additional_Question_2_update:any=''
  Additional_Question_3_current:any=''
  Additional_Question_3_update:any=''
  Mailing_Email_current:any='';
  Mailing_Email_update:any='';
  Mailing_Email_subject_current:any='';
  Mailing_Email_subject_update:any='';
  openstockimages:any;
  spdescData:any=[];
  stockImg1:any;
  apiurlset=url_set.api_url+'/';
  imgcat:any;
  m:any;
  st_img:any=[];
  category_name:any=[];
  previous_id:any;
  common_for_special_menu:any;
  image_getelement:any;
  menu:any='';
  section:any='';
  Status:any='';
 get_promo_data:any=[];
 Menu_id:any;
 Section_id:any;
 status_id:any;
get_admin_promotion:any=[];
get_customer_details:any;
 x:any;
 url1=url_set.Redirect_url;
 dashboardData:any=[];
 url_nm:any;
 rest_nm:any;
 role_offer_title:any=0;
 role_offer_body:any=0;
 role_q1:any;
 role_q2:any;
 role_q3:any;
 tab_name:any;
 r_id:any=localStorage.getItem('Restaurant_id');
  constructor(public toastr: ToastrManager,private admin_data:LagunaserviceService,private spinner: NgxSpinnerService,) { 
   
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    //fetch stock image for promotions
    this.admin_data.get_sp_desc(localStorage.getItem('Restaurant_id'),5).subscribe(data=>{console.log(data)
    
      this.spdescData=data;
      this.spdescData=this.spdescData.msg
    
      this.stockImg1=this.apiurlset+'stock/'+this.spdescData[0].img_path;
      console.log(this.stockImg1);
      
      this.imgcat=this.spdescData[0].img_catg
      console.log(this.stockImg1);
      })
       //  For getting category Id
  this.admin_data.get_promo_category_list().subscribe(data=>{
    console.log(data);
    this.category_name=data;
    this.category_name=this.category_name.msg;
  })
 
  this.admin_data.getpromo_image(24).subscribe(data=>{
    console.log(data);
    this.st_img=data;
    this.st_img=this.st_img.msg;
  })
  //get restaurant promotion data
  this.admin_data.get_restaurant_promotion(localStorage.getItem('Restaurant_id')).subscribe(data=>{
    console.log(data); 
    this.get_promo_data=data;
    if(this.get_promo_data.msg!=""){
    
    this.intro_current=this.get_promo_data.msg[0].intro;
    this.confirm_mail_current=this.get_promo_data.msg[0].confirm_email;
    this.Free_Offer_Title_current=this.get_promo_data.msg[0].pop_up_offer_title;
    this.role_offer_title=this.Free_Offer_Title_current.length;
    this.Free_Offer_Title_update=this.get_promo_data.msg[0].pop_up_offer_title;
    this.Free_Offer_Body_Text_current=this.get_promo_data.msg[0].pop_up_offer_body;
    this.role_offer_body= this.Free_Offer_Body_Text_current.length;
    this.Free_Offer_Body_Text_update=this.get_promo_data.msg[0].pop_up_offer_body;
    this.Additional_Question_1_current=this.get_promo_data.msg[0].questions1;
    this.role_q1=this.Additional_Question_1_current.length;
    this.Additional_Question_1_update= this.Additional_Question_1_current;
    this.Additional_Question_2_current=this.get_promo_data.msg[0].questions2;
    this.role_q2=this.Additional_Question_2_current.length;
    this.Additional_Question_2_update= this.Additional_Question_2_current;
    this.Additional_Question_3_current=this.get_promo_data.msg[0].questions3;
    this.role_q3= this.Additional_Question_3_current.length;
    this.Additional_Question_3_update= this.Additional_Question_3_current;
    if(this.get_promo_data.msg[0].image==""){
      this.stockImg1='';
    }
    else {
    this.stockImg1=this.apiurlset+'stock/'+this.get_promo_data.msg[0].image;
    }
    this.Mailing_Email_current=this.get_promo_data.msg[0].mailing_email_body;
    this.Mailing_Email_update=this.get_promo_data.msg[0].mailing_email_body;
    this.Mailing_Email_subject_current=this.get_promo_data.msg[0].mailing_email_subject;
    this.Mailing_Email_subject_update=this.get_promo_data.msg[0].mailing_email_subject;
    this.Menu_id=this.get_promo_data.msg[0].menu_id;
    this.menu=this.get_promo_data.msg[0].menu_id;
    this.Section_id=this.get_promo_data.msg[0].month_day;
    this.section=this.Section_id;
    this.status_id=this.get_promo_data.msg[0].status_id;
    this.Status=this.get_promo_data.msg[0].status_id;
     
  }
  })
  // opening tabs accordingly
  if('Tabname' in localStorage){
    if(localStorage.getItem('Tabname')=='Intro'){
      this.id="Intro";
    }
    else if(localStorage.getItem('Tabname')=='Confirm'){
      this.id="Confirm";
    }
    else if(localStorage.getItem('Tabname')=='Image'){
      this.id="Image";
    }
    else if(localStorage.getItem('Tabname')=='Offer'){
      this.id="Offer";
    }
    else if(localStorage.getItem('Tabname')=='Questions'){
      this.id="Questions";
    }
    else if(localStorage.getItem('Tabname')=='Status'){
      this.id="Status";
    }
    else if(localStorage.getItem('Tabname')=='Mailing'){
      this.id="Mailing";
    }
    else if(localStorage.getItem('Tabname')=='Customers'){
      this.id="Customers";
    }
 }
//  creating url in order to view the menus
 this.admin_data.get_specific_admin_dashboard(localStorage.getItem('Restaurant_id')).subscribe(data=>{console.log(data);
 
   this.dashboardData=data;
   this.rest_nm=this.dashboardData.msg[0].restaurant_name;
   this.url_nm=this.rest_nm.replace(/ /g,'_');
   this.url1=this.url1+this.url_nm+'/'+btoa(this.r_id);
   console.log(this.url1)
 })

this.fetchdata();
  }
  //open the menu
  openwindow(){
   console.log(this.url1);
   
   window.open(this.url1,'popup','width=400,height=500')
 }
 //fetch dates for customer dashboard
 fetchdata(){

   this.admin_data.Get_promotion_dt(localStorage.getItem('Restaurant_id')).subscribe(data=>{
     console.log(data);
     this.get_customer_details=data;
    //  console.log(this.get_customer_details.msg)
    for(let i=0;i<this.get_customer_details.msg.length;i++){

      this.get_customer_details.msg[i].birth_dt=this.get_customer_details.msg[i].birth_dt?this.get_customer_details.msg[i].birth_dt.split('T')[0]:"";
      this.get_customer_details.msg[i].anniversary_dt=this.get_customer_details.msg[i].anniversary_dt?this.get_customer_details.msg[i].anniversary_dt.split('T')[0]:"";

    }
     this.putdata(this.get_customer_details.msg);
   })
 }

 putdata(v:any){
  //  console.log(v)
  this.dataSource=new MatTableDataSource(v);
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this.sort;
 }
//  open tabs accordingly
  openCity(tabname:any){
    this.id=tabname;
    localStorage.setItem('Tabname',this.id);
  }
  getval(e:any,v1:any){
    if(v1=='menu'){
      this.menu=e;
    }
    else if(v1=='section'){
        this.section=e;
    }
    else {
       this.Status=e;
    }
  }
  // submit data for promotions
  submitpromotion(tabname:any){

    if(tabname=='introduction'){
      var dt={
           "flag":1,
           "user":localStorage.getItem('Restaurant_id'),
           "intro":this.intro_update,
           "res_id":localStorage.getItem('Restaurant_id')

      }
      this.admin_data.post_promo_intro(dt).subscribe(data=>{
        console.log(data);
      
      })
      console.log({information_current:this.intro_current,information_update:this.intro_update}); 
      this.intro_current=this.intro_update;
      this.intro_update='';
      this.role=0;
    }
    else if(tabname=='confirm'){
      var dt1={
        "flag":1,
        "user":localStorage.getItem('Restaurant_id'),
        "conf_email":this.confirm_mail_update,
        "res_id":localStorage.getItem('Restaurant_id')

   }
   this.admin_data.post_promo_conf(dt1).subscribe(data=>{
     console.log(data);

     
   })
      console.log({confirmation_current:this.confirm_mail_current,confirmation_current_update:this.confirm_mail_update}); 
     this.confirm_mail_current=this.confirm_mail_update;
     this.confirm_mail_update='';
    }
    else if(tabname=='offer'){
      var dt2={
        "flag":1,
        "user":localStorage.getItem('Restaurant_id'),
        "pop_body":this.Free_Offer_Body_Text_update,
        "pop_title":this.Free_Offer_Title_update,
        "res_id":localStorage.getItem('Restaurant_id')
      }
      this.admin_data.post_promo_popup(dt2).subscribe(data=>{
        console.log(data);
   
      })
      this.Free_Offer_Title_current=this.Free_Offer_Title_update;
      // this.Free_Offer_Title_update='';
      this.Free_Offer_Body_Text_current=this.Free_Offer_Body_Text_update;
      // this.Free_Offer_Body_Text_update='';
      console.log({free_Offer_Title_current:this.Free_Offer_Title_current,free_Offer_Title_update:this.Free_Offer_Title_update,
        free_Offer_Body_Text_current:this.Free_Offer_Body_Text_current,free_Offer_Body_Text_update:this.Free_Offer_Body_Text_update}); 
   }
   else if(tabname=='Questions'){
     console.log("sasa");
     
     var dt3={
      "flag":1,
      "user":localStorage.getItem('Restaurant_id'),
      "qn_1":this.Additional_Question_1_update,
      "qn_2":this.Additional_Question_2_update,
      "qn_3":this.Additional_Question_3_update,
      "res_id":localStorage.getItem('Restaurant_id')
     }
     this.admin_data.post_promo_qn(dt3).subscribe(data=>{
       console.log(data);
   
       
     })
    this.Additional_Question_3_current=this.Additional_Question_3_update;
    // this.Additional_Question_3_update='' ;
    this.Additional_Question_2_current=this.Additional_Question_2_update;
    // this.Additional_Question_2_update='';
    this.Additional_Question_1_current=this.Additional_Question_1_update;
    // this.Additional_Question_1_update=''
   }
   else if(tabname=='Mailing'){
     var dt4={
      "flag":1,
      "user":localStorage.getItem('Restaurant_id'),
      "mail_email_body":this.Mailing_Email_update,
      "mail_email_sub":this.Mailing_Email_subject_update,  
      "res_id":localStorage.getItem('Restaurant_id')
     }
     this.admin_data.post_promo_email(dt4).subscribe(data=>{
       console.log(data);
 
       
     })
    this.Mailing_Email_current=this.Mailing_Email_update;
    // this.Mailing_Email_update='';
    this.Mailing_Email_subject_current=this.Mailing_Email_subject_update;
    // this.Mailing_Email_subject_update='';
   }
   else if(tabname=='status'){
     console.log(this.Status,this.menu,this.section);
       var dt6={
        "flag":1,
        "user":localStorage.getItem('Restaurant_id'),
         "menu_id":this.menu,
         "sec_id":this.section,
         "status":this.Status , 
        "res_id":localStorage.getItem('Restaurant_id')
       }
       this.admin_data.post_promo_status(dt6).subscribe(data=>{
         console.log(data);
        
       })
    

   }
   else if(tabname=='Image'){
     console.log(this.common_for_special_menu);
     
    var dt5={
      "flag":1,
      "user":localStorage.getItem('Restaurant_id'),
       "img":this.common_for_special_menu,
      "res_id":localStorage.getItem('Restaurant_id')
     }
     this.admin_data.post_promo_img(dt5).subscribe(data=>{
       console.log(data);
       console.log("image");
  // this.myFunction();
  // this.myFunction_date_check();
 
     })
   } 
   this.m="Submitted Successfully";
   this.toastr.successToastr(this.m,'',{position:'bottom-center',animate:'slideFromBottom'})

   this.myFunction_date_check();   
  }

  //For Snackbar
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
 selectwhichtab(tabname:any){
  this.tab_name=tabname
 }

  //For getting data from admin promotion
  getdatafromadmin(){

    this.admin_data.get_admin_promotion().subscribe(data=>{
      console.log(data);
      this.get_admin_promotion=data;
      if(this.tab_name=='Intro'){
        // this.intro_update="Sas";
        this.intro_update=this.get_admin_promotion.msg[0].intro;
        this.role=this.intro_update.length;
       }
       else if(this.tab_name=='Confirm')
       {
          this.confirm_mail_update=this.get_admin_promotion.msg[0].confirm_email;
       }
       else if(this.tab_name=='offer'){
         this.Free_Offer_Title_update=this.get_admin_promotion.msg[0].pop_up_offer_title;
         this.Free_Offer_Body_Text_update=this.get_admin_promotion.msg[0].pop_up_offer_body;
         this.role_offer_body=this.Free_Offer_Body_Text_update.length;
         this.role_offer_title=this.Free_Offer_Title_update.length;
       }
       else if(this.tab_name=='Questions'){
          this.Additional_Question_1_update=this.get_admin_promotion.msg[0].questions1;
          this.Additional_Question_2_update=this.get_admin_promotion.msg[0].questions2;
          this.Additional_Question_3_update=this.get_admin_promotion.msg[0].questions3;
        this.role_q3= this.Additional_Question_3_update.length;
        this.role_q2= this.Additional_Question_2_update.length;
        this.role_q1= this.Additional_Question_1_update.length;
       }
       else if(this.tab_name=='Mailing'){
       this.Mailing_Email_update=this.get_admin_promotion.msg[0].mailing_email_body;
       this.Mailing_Email_subject_update=this.get_admin_promotion.msg[0].mailing_email_subject;
       }
    })
   
  }


  getStockimageonselectcategory(cat_id:any){
    //  For getting Image on load
    console.log(cat_id);
    
    this.admin_data.getpromo_image(cat_id).subscribe(data=>{
      console.log(data);
      this.st_img=data;
      this.st_img=this.st_img.msg;
    })
  }
// open stock image modal for preview
  openstockmodal(){
    this.openstockimages=document.getElementById('id02');
    this.openstockimages.style.display='block'
  }
// close the modal after preview
  save_it(e:any){
    if(e=='close'){
      // this.see_photo=true;
      this.common_for_special_menu='';
      // this.previous_id='';
      this.imgcat=''
   }
    else{
      // this.see_photo=false;
      
      // this.common_for_special_menu=
      this.stockImg1= url_set.api_url+'/stock/'+this.common_for_special_menu;
      console.log(this.stockImg1);
      
    }
    this.openstockimages=document.getElementById('id02');
    this.openstockimages.style.display='none'
  }
//select image from the available categories
  selectedimage(index:any,image_path:any,catg:any,length:any){
    
    this.previous_id=catg;
    this.imgcat=catg;
    this.stockImg1=image_path;
   
    this.common_for_special_menu=image_path;
    console.log(this.common_for_special_menu);
    
    for(let i=0;i<length;i++){
      this.image_getelement=document.getElementById('image_'+i);
      this.image_getelement.style.border='';
    }
    this.image_getelement=document.getElementById('image_'+index);
   this.image_getelement.style.border='3px solid #00477e';
  }
// restrict characters for intro message
  prevent_limited_length(event:any){
    console.log(event);
    
    this.role=event.target.value.length;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
// restrict characters for offer title and offer body
  checkoffer(event:any,tabname:any){
    if(tabname=='offertittle'){
      this.role_offer_title=event.target.value.length;
    }
    else if(tabname=='offerbody'){
      this.role_offer_body=event.target.value.length;
 
    }
  }
  // restrict characters for questions
  check_question_length(event:any,tabname:any){
    if(tabname=='Q1'){
       this.role_q1=event.target.value.length;
    }
    else if(tabname=='Q2'){
      this.role_q2=event.target.value.length;
    }
    else{
      this.role_q3=event.target.value.length;
    }
  }
  // get data for customer database
  get_corrospond_data(date_from:any,date_to:any){
    console.log(date_from,date_to);
    this.spinner.show();
    if(date_from>date_to){
      this.spinner.hide();
      this.m="Please provide valid date range"
       this.myFunction_date_check();   
    }
    else{
      this.admin_data.get_prormo_dt(localStorage.getItem('Restaurant_id'),date_from,date_to).subscribe(data=>{
        console.log(data);
        this.get_customer_details=data;
        for(let i=0;i<this.get_customer_details.msg.length;i++){
          this.get_customer_details.msg[i].birth_dt=this.get_customer_details.msg[i].birth_dt?this.get_customer_details.msg[i].birth_dt.split('T')[0]:"";
          this.get_customer_details.msg[i].anniversary_dt=this.get_customer_details.msg[i].anniversary_dt?this.get_customer_details.msg[i].anniversary_dt.split('T')[0]:"";
        }
      this.spinner.hide();   
      this.putdata(this.get_customer_details.msg);
      })
    }
  }
  myFunction_date_check() {
    this.x = document.getElementById("snackbar1");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }

}
