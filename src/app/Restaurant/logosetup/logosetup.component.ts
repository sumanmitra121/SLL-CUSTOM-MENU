import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { Observable, Observer } from 'rxjs';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../service/dataservice.service';



@Component({
  selector: 'app-logosetup',
  templateUrl: './logosetup.component.html',
  styleUrls: ['./logosetup.component.css']
})
export class LogosetupComponent implements OnInit {
  // url_reg='https://shoplocal-lagunabeach.com/';
  // url_reg='https://localhost:4200/';
  url_reg=url_set.Api_url+'/';

  constructor(private toastr:ToastrManager,private router:Router,private Logo:DataserviceService,private lagunaserve:LagunaserviceService) { }
  name:any=localStorage.getItem('Restaurant_name');
  base64Image: any;
  logo:any;
  clearvalue:any;
  log:any=[];
  log_url:any='';
  value_logo_url=false;
  x:any;
  check:any=[];
  break_button:boolean=false;
  logo_preview:boolean=true;
  img_logo:any;
  img_showing=url_set.api_url;
  // resid=10;
  common:any;
  common_image:any;
  currentInput:any;
  resid:any=localStorage.getItem('Restaurant_id');

  //Image Cropper
 scale = 1;
 transform: ImageTransform = {};
 showCropper = false;
 hide=false;
 valu = true;
 Zoomout = true;
 ZoomIn = true;
 modal = true;
 croppedImage:any ;
 Modal:any;
 common_for_all:any;
 common_value:any;
 logo_fileName:any;
 logo_design:any;
//  width:any=200;
//  height:any=130;
width=1800;
 height=2560;
 common_size_check:any;
 show_toast:boolean=true;
 getVenues:any;
 venueid:any;
  ngOnInit(): void {
    this.lagunaserve.get_venue(this.resid).subscribe((data:any)=>{
      console.log(data);
      this.getVenues=data;
      // this.putdata(this.getVenues.msg);
    })
              //For Checking approval flag is on or not
              this.lagunaserve.checkactivity(this.resid).subscribe(data=>{
                console.log(data);
                this.check=data;
                if(this.check.msg[0].approval_flag=='U'){
                  this.show_toast=true;
              
                }
                else{
              
                   this.show_toast=false;
                  this.break_button=true;
                  this.value_logo_url=true;
              
                }
              })

    console.log( this.value_logo_url);
// fetch already uploaded logo
//     this.lagunaserve.get_menu_urls(this.resid,null,this.venueid).subscribe(data=>{
//       console.log(data);
//        this.log=data;
//        if(this.log.logo_dt.length!=0){

//        for(let i=0;i<this.log.logo_dt.length;i++){
//           if(this.log.logo_dt[i].logo_path!=''){
//            this.logo_preview=false;
//            this.img_logo=this.img_showing+'/'+this.log.logo_dt[i].logo_path;
//            this.logo=this.img_showing+'/'+this.log.logo_dt[i].logo_path;
//           //  this.logo_design=document.getElementById('myfile');
//            this.logo_fileName=this.log.logo_dt[i].logo_path;

//           this.currentInput='1 file';
//           //  console.log(this.logo_design);
//          }
//          if(this.log.logo_dt[i].logo_url!=null){

//          this.logo=this.url_reg + this.log.logo_dt[i].logo_path;
//          this.log_url=this.log.logo_dt[i].logo_url;
//         //  this.value_logo_url=false;

//          }
//          else {
//         //  this.value_logo_url=true;
//          this.log_url='';
//          }
//        }


//       }


//               //For Checking approval flag is on or not
// this.lagunaserve.checkactivity(this.resid).subscribe(data=>{
//   console.log(data);
//   this.check=data;
//   if(this.check.msg[0].approval_flag=='U'){
//     this.show_toast=true;

//   }
//   else{

//      this.show_toast=false;
//     // this.toastr.warningToastr('Set up mode is on , you can not update or insert','Alert!!',{
//     //   dismiss:'click',
//     //   maxShown:'1',
//     //   toastTimeout:'5000'
//     // })

//     this.break_button=true;
//     this.value_logo_url=true;

//   }
// })
//     })



  }
  open_venue(id:any){
    // alert(id);
    // this.venueid='';
    this.venueid=id;
    
    this.lagunaserve.get_menu_urls(this.resid,null,this.venueid).subscribe(data=>{
      console.log(data);
       this.log=data;
       if(this.log.logo_dt.length!=0){

       for(let i=0;i<this.log.logo_dt.length;i++){
          if(this.log.logo_dt[i].logo_path!=''){
           this.logo_preview=false;
           this.img_logo=this.img_showing+'/'+this.log.logo_dt[i].logo_path;
           this.logo=this.img_showing+'/'+this.log.logo_dt[i].logo_path;
          //  this.logo_design=document.getElementById('myfile');
           this.logo_fileName=this.log.logo_dt[i].logo_path;

          this.currentInput='1 file';
          //  console.log(this.logo_design);
         }
         if(this.log.logo_dt[i].logo_url!=null){

         this.logo=this.url_reg + this.log.logo_dt[i].logo_path;
         this.log_url=this.log.logo_dt[i].logo_url;
        //  this.value_logo_url=false;

         }
         else {
        //  this.value_logo_url=true;
         this.log_url='';
         }
       }


      }



    })
    // this.lagunaserve.get_venue_menu(this.resid, null, id).subscribe(data=>{
    //   console.log(data);
    //   this.getMenus=data;
    //   this.getMenus=this.getMenus.msg
    //   for(let i=0;i<this.getMenus.length;i++){
    //     if(i!=pos){
    //       this.posDiv=document.getElementById('venue'+i);
    //       this.posDiv.className="";
    //       this.posDiv.style.background ='#f1f1f1';
    //       this.posDiv.style.color = 'black';  
    //     }
    //     else{
    //       this.posDiv=document.getElementById('venue'+i);
    //       this.posDiv.className = 'active  tabcontent m-1';
  
    //     }
    //   }
  
    // })
  }
  // move to menudata page on successful update of logo
  goto_MenuDatapage(e:any){
    console.log(e,this.logo,this.resid,this.logo_fileName);

   this.Logo.logosubmit(e,this.logo,this.resid,this.name,this.logo_fileName,this.venueid).subscribe((data:any)=>{
     console.log(data);
     if(data.suc==1){
      //  this.clearvalue=document.getElementById('url');
      //  this.clearvalue.value=''
    //  this.router.navigate(['/menudata']);
     }
     else{
          // this.myFunction();
     }
   })

  }
  // change event triggered on selecting a particular image
  selectimage(event:any){
   if(event.target.files[0].size>2097152 ){
   this.common_size_check=document.getElementById('myfile');
   this.common_size_check.value='';
   this.myFunction_for_size();
   console.log("asdad");
  //  this.value_logo_url=true;
   }
   else{

   if(event.target.files.length!=0){
 this.logo_fileName=event.target.files[0].name;
    // this.logo=event.target.files[0];
    this.common_image=event;
    this.common=document.getElementById('id01');
 this.common.style.display='block';

    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.img_logo = reader.result as string;
    //  }
    // reader.readAsDataURL(this.logo)
    // this.logo_preview=false;
   }
   else{
    this.logo_preview=true;

   }

  }

 }
//  snackbar
 myFunction() {
  // Get the snackbar DIV
  this.x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  this.x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
}
checkvalidity(event:any){
  if(event.target.value!=''){
    // this.value_logo_url=false;
    this.log_url=event.target.value;

  }
  else{
    // this.value_logo_url=true;

  }
}
// delete the chosen photo
deletephoto(e:any){
  this.logo_preview=true;
  this.common=document.getElementById('myfile');
  this.common.value=null;
}

//For file size greater than 2mb
myFunction_for_size() {
  // Get the snackbar DIV
  this.x = document.getElementById("snackbar1");

  // Add the "show" class to DIV
  this.x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
}
//Image Cropper

zoomOut() {
  this.scale -= .1;
  this.transform = {
    ...this.transform,
    scale: this.scale
  };
}

zoomIn() {
  this.scale += .1;
  this.transform = {
    ...this.transform,
    scale: this.scale
  };
}
imageLoaded() {
  console.log("image loaded")
  this.showCropper = true;
  this.modal = false;
  this.hide = false;
  this.valu = false;
  // this.Zoomout = false;
  // this.ZoomIn = false;
}
imageCropped(event: ImageCroppedEvent) {
  console.log('imagecropped');
  console.log("width:" + event.width);
  console.log("height:" + event.height)
  this.croppedImage = event.base64;
  console.log(this.croppedImage);
}
cropperReady(sourceImageDimensions: Dimensions) {
 console.log('Cropper ready', sourceImageDimensions);
  console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
}
loadImageFailed() {
  console.log('Load failed');
}
// clicking on save
click_it(e:any){
  // this.cover_change=true;
  this.common_for_all=document.getElementById('id01');
  this.common_for_all.style.display='none';
    this.valu = true;
    this.logo_preview=false;
    this.logo=this.croppedImage;
    this.img_logo=this.croppedImage;
   console.log(this.logo);

}
// closing the modal after cropping
close_it(){
  this.valu=true;
  this.logo_preview=true;
    this.logo='';
    this.img_logo='';
    this.common_for_all=document.getElementById('myfile');
    this.common_for_all.value=''
  this.common_for_all=document.getElementById('id01');
  this.common_for_all.style.display='none';



}

openmodal(){
 this.common=document.getElementById('id01');
 this.common.style.display='block';
}
}
