import {  Component, OnInit } from '@angular/core';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';//For Image Cropper
import { url_set } from 'src/app/globalvar';
import { NgxSpinnerService } from "ngx-spinner";
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-order-setup-new',
  templateUrl: './order-setup-new.component.html',
  styleUrls: ['./order-setup-new.component.css']
})
export class OrderSetupNewComponent implements OnInit {

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter the footer content...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter birthday instructions...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  config2: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter event instructions...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  configData:any;
  insData:any;
  get_configData:any;
  editorText='';
  editorText1='';
  editorText2='';
  coverImageName:any;
  windowcling_yes:any;
  emailtype:any;
  emailbodyData:any;
  coverimage=true;
  emailbodyreadonly=''
  pack:boolean=false;
  showWallData:any;
  promo:boolean=true;
  signhold:boolean=true;
  windowcl:boolean=true;
  mailbodydiv:boolean=true;
  instructions=true;
  styling=true;
  menubodCol='#ffffff'
  menutextCol='#ffffff';
  greettextCol='#ffffff'
  insdiv:any;
  conf_text_readonly=''
  eventData:any;
  concatdatalength2=0
  concatdatalength3=0
  PACK:any;
  img_cover: any;
  PROMO:any;
  SIGNHOLD:any;
  WINDOWCL:any;
  promo2:boolean=true
  promo1:boolean=true;
  sign2:boolean=true;
  tab:any;
  cover_img:any;
  deleteId:any;
  stockImageName:any;
  yes_stnd:any;
  no_stnd:any;
  set_value:any;
  Package:any=[];
  menuchoiceData1:any
  stanData:any;
  stanplusData:any;
  premiumData:any;
  windowData:any;
  stnd_specialmenu_yes:any
  stnd_numberofmenu:any
  stndpackage_setupfee:any;
  stndpackage_desc:any;
  stndpacakge__monthlyfee:any;
  tabletopData:any;
  stndplus_specialmenu_yes:any
  stndpluspacakge__numberofmenu:any;
  stndpluspackage_monthlyfee:any;
  stndpluspacakge_setupfee:any;
  stndpluspacakge_desc:any;
  birthdayData:any;
  premiumpacakge_specialmenu_yes:any;
  premiumpacakge_specialmenu_no:any;
  premiumpacakge_numberofmenu:any;
  premiumpacakge_monthlyfee:any;
  premiumpacakge_setupfee:any;
  premiumpacakge_des:any;
 wallData:any;
  promo_Birthdaypriceyes:any
  promo_Birthdaypriceno:any
  promo_Birthdayprice:any;
  promo_EventCalendarprice:any;
  promo_EventCalendarprice_yes:any
  promo_EventCalendarprice_no:any
  promocalendar:any=[];
  stockimage=false;
  m='';
  menu_instruction='';
  insbody:any;
  stylediv:any;
  signholder_price1:any;
  signholder_price2:any;
  signholder_price3:any;
  signholder:any=[];
  STOCKIMAGE:any;
  mailbody:any;
   url1=url_set.api_url+'/stock/'
  windowcling_price:any
  window:any=[];
  x: any;
  el: any;
  scale = 1;
 transform: ImageTransform = {};
 showCropper = false;
 menuchoiceData:any;
 hide=false;
 valu = true;
 Zoomout = true;
 ZoomIn = true;
 modal = true;
 croppedImage:any ;
 Modal:any;
 crop_height:any;
 crop_width:any;
 stock_file1:any;
 modal_close_oncrop:any;
 catData:any;
 imageData:any;
 previewImg:any;
 dispCross:any;
 select_div:any;
 file_div:any
 selectemail:any;
 selectemailbody:any;
 menuInsData:any;
 hlp_sec:any;
 event_img:any;
 help_section=true;
 helpdiv:any;
 menu_readonly='';
 calendar_readonly='';
 qrcs_readonly='';
 bdad_readonly='';
 circ_readonly='';
 helpData:any;
 bir_ins=true;
 bir_ins_div:any;
 eventimage=true;
 eventdiv:any;
 eventImageData:any;
 
 show_conf_email=true;
 postConfData:any;
  constructor(private spinner:NgxSpinnerService,private laguna:LagunaserviceService) { }
  selectStock:any;
  gethelpText:any
  ngOnInit(): void {
    this.opencity('stockimage')
   this.laguna.get_help_text().subscribe(data=>{console.log(data)
    this.gethelpText=data; //api call to fetch help section, menu instructions, calendar, birthday, default cover image, default event image
    this.gethelpText=this.gethelpText.msg;
    this.menu_readonly=this.gethelpText[0].menu_help;
    this.calendar_readonly=this.gethelpText[0].calender_help;
    this.qrcs_readonly=this.gethelpText[0].qr_help;
    this.bdad_readonly=this.gethelpText[0].birthday_help;
    this.circ_readonly=this.gethelpText[0].cantact_info_help;
    this.editorText1=this.gethelpText[0].birthday_body;
    this.editorText2=this.gethelpText[0].event_body;
    this.event_img=url_set.api_url+'/'+this.gethelpText[0].event_img
    this.cover_img=url_set.api_url+'/'+this.gethelpText[0].cover_img

    this.conf_text_readonly=this.gethelpText[0].order_conf
    
  })
    this.laguna.get_config_menu().subscribe(data=>{console.log(data)
      this.get_configData=data; //api call to fetch footer color, greeting color and navigation bar
      this.get_configData=this.get_configData.msg;
      this.menubodCol=this.get_configData[0].footer_color;
      this.menutextCol=this.get_configData[0].text_color;
      this.greettextCol=this.get_configData[0].greet_text_color;
      this.editorText=this.get_configData[0].footer_content
      
    })

    this.selectStock=document.getElementById('pickup_place_stock')
  //For Package Tab
  this.laguna.get_category_list().subscribe(data=>{console.log(data)
   this.catData=data;
   this.catData=this.catData.msg;
  })
  
  this.laguna.get_email_type().subscribe(data=>{console.log(data)
    this.emailtype=data;  //api call to fetch email categories
    this.emailtype=this.emailtype.msg
  })
  this.laguna.getStockImages('').subscribe(data=>{console.log(data)
    this.imageData=data; //fetching the stock images for various categories
    this.imageData=this.imageData.msg
    console.log(this.imageData)
    
    })
    this.laguna.getpackagedata(null).subscribe(data=>{
    console.log(data);  //api call for fetching various packages 
      this.Package=data;

     for(let i=0;i<this.Package.msg.length;i++){
          if(this.Package.msg[i].pakage_name==1){
            this.stndpackage_setupfee=this.Package.msg[i].setup_fee;
            this.stndpacakge__monthlyfee=this.Package.msg[i].monthly_fee;
             this.stndpackage_desc=this.Package.msg[i].pack_description;
             this.stnd_numberofmenu=this.Package.msg[i].no_of_menu;
             console.log(this.stndpackage_setupfee,this.stndpacakge__monthlyfee);
             if(this.Package.msg[i].special_menu=="Y"){
             this.stnd_specialmenu_yes=document.getElementById('yes_stnd');
             this.stnd_specialmenu_yes.checked=true;
             }
             else{
              
               this.stnd_specialmenu_yes=document.getElementById('no_stnd');
              this.stnd_specialmenu_yes.checked=true;
             }

          }
          else if(this.Package.msg[i].pakage_name==2){
            this.stndpluspacakge__numberofmenu=this.Package.msg[i].no_of_menu;
            this.stndpluspackage_monthlyfee=this.Package.msg[i].monthly_fee;
            this.stndpluspacakge_setupfee=this.Package.msg[i].setup_fee;
               this.stndpluspacakge_desc=this.Package.msg[i].pack_description;
               if(this.Package.msg[i].special_menu=='Y'){
                       this.stndplus_specialmenu_yes=document.getElementById('yes');
                       this.stndplus_specialmenu_yes.checked=true;  
               }
               else{
                this.stndplus_specialmenu_yes=document.getElementById('no');
                this.stndplus_specialmenu_yes.checked=true;
               }
          }
          else if(this.Package.msg[i].pakage_name==3){
            // this.premiumpacakge_specialmenu_yes=
            this.premiumpacakge_numberofmenu=this.Package.msg[i].no_of_menu;
              this.premiumpacakge_monthlyfee=this.Package.msg[i].monthly_fee;
              this.premiumpacakge_setupfee=this.Package.msg[i].setup_fee;
             this.premiumpacakge_des=this.Package.msg[i].pack_description;
             if(this.Package.msg[i].special_menu=='Y'){
              this.premiumpacakge_specialmenu_yes=document.getElementById('yes_premium');
              this.premiumpacakge_specialmenu_yes.checked=true;
             }
             else{
              this.premiumpacakge_specialmenu_no=document.getElementById('no_premium');
               this.premiumpacakge_specialmenu_no.checked=true;
             }

          }
          else{

          }
          
          // console.log(this.premiumpacakge_specialmenu_yes.checked);
     }
    })
    //For Promo Calendar Tab
    this.laguna.GetPromoCalendar(null).subscribe(data=>{
      // console.log(data);
      this.promocalendar=data; //api call to fetch facilities regarding the promo calendar
      for(let i=0;i<this.promocalendar.msg.length;i++){
        if(this.promocalendar.msg[i].id==4){
          this.promo_Birthdayprice=this.promocalendar.msg[i].price;

            if(this.promocalendar.msg[i].free_flag=='Y'){
          this.promo_Birthdaypriceyes=document.getElementById('yes_birth');
          this.promo_Birthdaypriceyes.checked=true;
          this.promo1=true;
         }
        else{
          this.promo_Birthdaypriceno=document.getElementById('no_birth');
          this.promo_Birthdaypriceno.checked=true;
          this.promo1=false;

        }
       
         
       
        }
        else if(this.promocalendar.msg[i].id==5){
          this.promo_EventCalendarprice=this.promocalendar.msg[i].price;
          if(this.promocalendar.msg[i].free_flag=='Y'){
            this. promo_EventCalendarprice_yes=document.getElementById('yes_calend');
            this. promo_EventCalendarprice_yes.checked=true;
            this.promo2=true;
          }
          else{
            this.promo_EventCalendarprice_no=document.getElementById('no_calend');
            this.promo_EventCalendarprice_no.checked=true;
            this.promo2=false;;

          }
        }
        else{

        }
      
      
     
      
      }

    })
    //For SignHolder
    this.laguna.Getsignupholder(null).subscribe(data=>{
            this.signholder=data;
            for(let i=0;i<this.signholder.msg.length;i++){
              if(this.signholder.msg[i].id==6){
                 this.signholder_price1=this.signholder.msg[i].price;
                
              }
              else if(this.signholder.msg[i].id==7){
                   this.signholder_price2=this.signholder.msg[i].price;
              }
              else if(this.signholder.msg[i].id==8){
                this.signholder_price3=this.signholder.msg[i].price;
              }
            }
    })
    //For Window Cling
    this.laguna.GetWindowCling(null).subscribe(data=>{
      // console.log(data);
      this.window=data;
      for(let i=0;i<this.window.msg.length;i++){
        if(this.window.msg[i].id==9){
          this.windowcling_price=this.window.msg[i].price;
        }
      }

      // this.windowcling_description
    })
    this.PACK=document.getElementById('package');
    this.PACK.className='active';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='#3F51B5';
    this.PACK.style.color='#fff';
    var v = 0;
    this.laguna.get_all_menu(v).subscribe(data=>{console.log(data)

      this.menuchoiceData=data;
     
      this.menuchoiceData=this.menuchoiceData.msg;
     
      // this.mncdata=this.menuchoiceData[0].menu_id;
      console.log(this.menuchoiceData)
      // console.log('bkmenu'+this.menuchoiceData[0].menu_id)
      // this.bkmenuid=document.getElementById('bkmenu'+this.menuchoiceData[0].menu_id);
      // console.log(this.bkmenuid)
     // this.bkmenuid.checked=true;
      })

  }
//For Toggling from one tab to another
  opencity(e:any){
    //For package Tab
    if(e=='package'){
        this.pack=false;
  this.coverimage=true;

        this.help_section=true
    this.promo=true;
    this.show_conf_email=true;
    this.eventimage=true
    this.styling=true;
    this.mailbodydiv=true;
    this.instructions=true;
    this.stockimage=true
    this.signhold=true;
    this.styling=true;
    this.windowcl=true;
    this.bir_ins=true
    this.PACK=document.getElementById('package');
    this.PACK.className='active';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='#3F51B5';
    this.PACK.style.color='#fff';
    this.PROMO=document.getElementById('defaultpromo');
     this.PROMO.style.background='';
     this.PROMO.style.color='black';
     this.SIGNHOLD=document.getElementById('defaultsign');
     this.SIGNHOLD.style.background='';
     this.SIGNHOLD.style.color='black';
     this.WINDOWCL=document.getElementById('defaultwindow');
     this.WINDOWCL.style.background='';
     this.WINDOWCL.style.color='black';
     this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='';
     this.STOCKIMAGE.style.color='black';
     this.mailbody=document.getElementById('defaultemail')
     this.mailbody.style.background='';
     this.mailbody.style.color='black';
     this.insdiv=document.getElementById('ins')
     this.insdiv.style.background='';
     this.insdiv.style.color='black';
     this.stylediv=document.getElementById('menu_st')
     this.stylediv.style.background='';
     this.stylediv.style.color='black';
     this.stylediv=document.getElementById('help_sec')
     this.stylediv.style.background='';
     this.stylediv.style.color='black'
     this.eventdiv=document.getElementById('c_email')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
     this.bir_ins_div=document.getElementById('b_e_ins')
     this.bir_ins_div.style.background='';
     this.bir_ins_div.style.color='black'
     this.eventdiv=document.getElementById('e_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
     this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
    }
    //For Promotion tab
    if(e=='promo'){
       this.pack=true;
    this.show_conf_email=true;
    this.coverimage=true;

       this.help_section=true
       this.bir_ins=true
       this.eventimage=true

   this.promo=false;
   this.stockimage=true
   this.mailbodydiv=true;
   this.instructions=true;
this.styling=true;
   this.signhold=true;
   this.windowcl=true;
   this.PROMO=document.getElementById('promoCalendar');
   this.PROMO.className='active';
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='#3F51B5';
   this.PROMO.style.color='#fff';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.SIGNHOLD=document.getElementById('defaultsign')
   this.SIGNHOLD.style.background='';
   this.SIGNHOLD.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
   this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='';
     this.STOCKIMAGE.style.color='black';
     this.mailbody=document.getElementById('defaultemail')
     this.mailbody.style.background='';
     this.mailbody.style.color='black';
     this.insdiv=document.getElementById('ins')
     this.insdiv.style.background='';
     this.insdiv.style.color='black';
     this.stylediv=document.getElementById('menu_st')
     this.stylediv.style.background='';
     this.stylediv.style.color='black';
     this.stylediv=document.getElementById('help_sec')
     this.stylediv.style.background='';
     this.stylediv.style.color='black'
     this.bir_ins_div=document.getElementById('b_e_ins')
     this.bir_ins_div.style.background='';
     this.bir_ins_div.style.color='black'
     this.eventdiv=document.getElementById('e_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
     this.eventdiv=document.getElementById('c_email')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
     this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
    }
    //For signholder tab
    if(e=='signholder'){
         this.pack=true;
    this.show_conf_email=true;
    this.coverimage=true;

        this.help_section=true
        this.bir_ins=true
        this.eventimage=true

    this.promo=true;
    this.styling=true;
    this.stockimage=true
    this.mailbodydiv=true;
    this.instructions=true;

    this.signhold=false;
    this.windowcl=true;
    this.SIGNHOLD=document.getElementById('signHolder');
    this.SIGNHOLD.className='active';
    this.SIGNHOLD=document.getElementById('defaultsign')
    this.SIGNHOLD.style.background='#3F51B5';
    this.SIGNHOLD.style.color='#fff';
    this.PROMO=document.getElementById('defaultpromo');
    this.PROMO.style.background='';
    this.PROMO.style.color='black';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='';
    this.PACK.style.color='black';
    this.WINDOWCL=document.getElementById('defaultwindow');
    this.WINDOWCL.style.background='';
    this.WINDOWCL.style.color='black';
    this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='';
     this.STOCKIMAGE.style.color='black';
     this.mailbody=document.getElementById('defaultemail')
     this.mailbody.style.background='';
     this.mailbody.style.color='black';
     this.insdiv=document.getElementById('ins')
     this.insdiv.style.background='';
     this.insdiv.style.color='black';
     this.stylediv=document.getElementById('menu_st')
     this.stylediv.style.background='';
     this.stylediv.style.color='black';
     this.stylediv=document.getElementById('help_sec')
     this.stylediv.style.background='';
     this.stylediv.style.color='black'
     this.bir_ins_div=document.getElementById('b_e_ins')
     this.bir_ins_div.style.background='';
     this.bir_ins_div.style.color='black'
     this.eventdiv=document.getElementById('e_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
     this.eventdiv=document.getElementById('c_email')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
     this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
    }
    //For Window tab
    else if(e=='window'){
        this.pack=true;
        this.styling=true
    this.show_conf_email=true;

        this.help_section=true
        this.bir_ins=true
        this.eventimage=true
        this.coverimage=true;

    this.promo=true;
    this.signhold=true;
    this.windowcl=false;
    this.stockimage=true
    this.mailbodydiv=true;
    this.instructions=true;

    this.WINDOWCL=document.getElementById('windowCling');
    this.WINDOWCL.className='active';
    this.WINDOWCL=document.getElementById('defaultwindow');
    this.WINDOWCL.style.background='#3F51B5';
    this.WINDOWCL.style.color='#fff';

    this.SIGNHOLD=document.getElementById('defaultsign')
    this.SIGNHOLD.style.background='';
    this.SIGNHOLD.style.color='black';

    this.PROMO=document.getElementById('defaultpromo');
    this.PROMO.style.background='';
    this.PROMO.style.color='black';

    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='';
    this.PACK.style.color='black';
    this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='';
     this.STOCKIMAGE.style.color='black';
     this.mailbody=document.getElementById('defaultemail')
     this.mailbody.style.background='';
     this.mailbody.style.color='black';
     this.insdiv=document.getElementById('ins')
     this.insdiv.style.background='';
     this.insdiv.style.color='black';
     this.stylediv=document.getElementById('menu_st')
     this.stylediv.style.background='';
     this.stylediv.style.color='black';
     this.stylediv=document.getElementById('help_sec')
     this.stylediv.style.background='';
     this.stylediv.style.color='black'
     this.bir_ins_div=document.getElementById('b_e_ins')
     this.bir_ins_div.style.background='';
     this.bir_ins_div.style.color='black'
     this.eventdiv=document.getElementById('e_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
     this.eventdiv=document.getElementById('c_email')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
     this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'

    }
  else if(e=='mail_body'){
    this.instructions=true;
    this.help_section=true
    this.bir_ins=true
    this.eventimage=true
    this.show_conf_email=true;
    this.coverimage=true;

   this.styling=true;
    this.pack=true;
    this.promo=true;
    this.mailbodydiv=false;
    this.signhold=true;
    this.windowcl=true;
  this.stockimage=true;
  this.mailbody=document.getElementById('mailid');
  this.mailbody.className='active';
  this.SIGNHOLD=document.getElementById('defaultsign')
  this.SIGNHOLD.style.background='';
  this.SIGNHOLD.style.color='black';
  this.PROMO=document.getElementById('defaultpromo');
  this.PROMO.style.background='';
  this.PROMO.style.color='black';
  this.PACK=document.getElementById('defaultOpen');
  this.PACK.style.background='';
  this.PACK.style.color='black';
  this.WINDOWCL=document.getElementById('defaultwindow');
  this.WINDOWCL.style.background='';
  this.WINDOWCL.style.color='black';
  this.STOCKIMAGE=document.getElementById('defaultstock')
   this.STOCKIMAGE.style.background='';
   this.STOCKIMAGE.style.color='black';
   this.mailbody=document.getElementById('defaultemail')
   this.mailbody.style.background='#3F51B5';
   this.mailbody.style.color='white';
   this.insdiv=document.getElementById('ins')
   this.insdiv.style.background='';
   this.insdiv.style.color='black';
   this.stylediv=document.getElementById('menu_st')
   this.stylediv.style.background='';
   this.stylediv.style.color='black';
   this.stylediv=document.getElementById('help_sec')
   this.stylediv.style.background='';
   this.stylediv.style.color='black'
   this.bir_ins_div=document.getElementById('b_e_ins')
   this.bir_ins_div.style.background='';
   this.bir_ins_div.style.color='black'
   this.eventdiv=document.getElementById('e_img')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_email')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
  
  }
  else if(e=='instructions'){
    // alert("you are in instructions")
    this.instructions=false;
    this.help_section=true
    this.bir_ins=true
    this.eventimage=true
    this.show_conf_email=true;
    this.coverimage=true;

   this.styling=true
    this.pack=true;
    this.promo=true;
    this.mailbodydiv=true;
    this.signhold=true;
    this.windowcl=true;
  this.stockimage=true;
  // this.mailbody=document.getElementById('mailid');
  // this.mailbody.style.background='';
  //  this.mailbody.style.color='black';
  // this.SIGNHOLD.style.background='#3F51B5';
  // this.SIGNHOLD.style.color='#fff';
  this.PROMO=document.getElementById('defaultpromo');
  this.PROMO.style.background='';
  this.PROMO.style.color='black';
  this.PACK=document.getElementById('defaultOpen');
  this.PACK.style.background='';
  this.PACK.style.color='black';
  this.WINDOWCL=document.getElementById('defaultwindow');
  this.WINDOWCL.style.background='';
  this.WINDOWCL.style.color='black';
  this.STOCKIMAGE=document.getElementById('defaultstock')
   this.STOCKIMAGE.style.background='';
   this.STOCKIMAGE.style.color='black';
   this.mailbody=document.getElementById('defaultemail')
   this.mailbody.style.background='';
   this.mailbody.style.color='black';
   this.insdiv=document.getElementById('ins')
   this.insdiv.style.background='#3F51B5';
   this.insdiv.style.color='white';
  this.insbody=document.getElementById('menu_ins');
  this.insbody.className="active tabcontent";
  this.insbody.style.display='block'
  this.stylediv=document.getElementById('menu_st')
  this.stylediv.style.background='';
  this.stylediv.style.color='black';
  this.stylediv=document.getElementById('help_sec')
  this.stylediv.style.background='';
  this.stylediv.style.color='black'
  this.bir_ins_div=document.getElementById('b_e_ins')
  this.bir_ins_div.style.background='';
  this.bir_ins_div.style.color='black'
  this.eventdiv=document.getElementById('e_img')
  this.eventdiv.style.background='';
  this.eventdiv.style.color='black'
  this.eventdiv=document.getElementById('c_email')
  this.eventdiv.style.background='';
  this.eventdiv.style.color='black'
  this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
  }
  else if(e=='menu_style'){
    this.instructions=true;
    this.styling=false
    this.help_section=true
    this.bir_ins=true
    this.eventimage=true
    this.show_conf_email=true;
    this.coverimage=true;

     this.pack=true;
     this.promo=true;
     this.mailbodydiv=true;
     this.signhold=true;
     this.windowcl=true;
   this.stockimage=true;
   // this.mailbody=document.getElementById('mailid');
   // this.mailbody.style.background='';
   //  this.mailbody.style.color='black';
   // this.SIGNHOLD.style.background='#3F51B5';
   // this.SIGNHOLD.style.color='#fff';
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='';
   this.PROMO.style.color='black';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
   this.STOCKIMAGE=document.getElementById('defaultstock')
    this.STOCKIMAGE.style.background='';
    this.STOCKIMAGE.style.color='black';
    this.mailbody=document.getElementById('defaultemail')
    this.mailbody.style.background='';
    this.mailbody.style.color='black';
    this.insdiv=document.getElementById('ins')
    this.insdiv.style.background='';
    this.insdiv.style.color='black';
   this.insbody=document.getElementById('menu_bod');
  //  this.insbody.className="active";
   this.insbody.style.display='block'
   this.stylediv=document.getElementById('menu_st')
   this.stylediv.style.background='#3F51B5';
   this.stylediv.style.color='white';
   this.stylediv=document.getElementById('help_sec')
   this.stylediv.style.background='';
   this.stylediv.style.color='black'
   this.bir_ins_div=document.getElementById('b_e_ins')
   this.bir_ins_div.style.background='';
   this.bir_ins_div.style.color='black'
   this.eventdiv=document.getElementById('e_img')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_email')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
  }
  else if(e=='help_sec'){
    this.instructions=true;
    this.styling=false
    this.help_section=false
    this.bir_ins=true
    this.eventimage=true
    this.show_conf_email=true;
    this.coverimage=true;

     this.pack=true;
     this.promo=true;
     this.mailbodydiv=true;
     this.signhold=true;
     this.windowcl=true;
   this.stockimage=true;
   // this.mailbody=document.getElementById('mailid');
   // this.mailbody.style.background='';
   //  this.mailbody.style.color='black';
   // this.SIGNHOLD.style.background='#3F51B5';
   // this.SIGNHOLD.style.color='#fff';
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='';
   this.PROMO.style.color='black';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
   this.STOCKIMAGE=document.getElementById('defaultstock')
    this.STOCKIMAGE.style.background='';
    this.STOCKIMAGE.style.color='black';
    this.mailbody=document.getElementById('defaultemail')
    this.mailbody.style.background='';
    this.mailbody.style.color='black';
    this.insdiv=document.getElementById('ins')
    this.insdiv.style.background='';
    this.insdiv.style.color='black';
   this.insbody=document.getElementById('menu_bod');
   this.insbody.style.display='none'
  //  this.insbody.className="active";
  //  this.insbody.style.display='block'
   this.stylediv=document.getElementById('menu_st')
   this.stylediv.style.background='';
   this.stylediv.style.color='black';
   this.stylediv=document.getElementById('help_ins');
   this.stylediv.style.display='block'

  //  this.stylediv.style.color='white';
   this.stylediv=document.getElementById('help_sec')
   this.stylediv.style.background='#3F51B5';
   this.stylediv.style.color='white'
   this.bir_ins_div=document.getElementById('b_e_ins')
   this.bir_ins_div.style.background='';
   this.bir_ins_div.style.color='black'
   this.eventdiv=document.getElementById('e_img')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_email')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
  }
  else if(e=='birthday_ins'){
    // alert("you are in birthday events")
    this.instructions=true;
    this.styling=true
    this.help_section=true
    this.bir_ins=false
    this.eventimage=true
    this.coverimage=true;

     this.pack=true;
     this.promo=true;
     this.mailbodydiv=true;
     this.signhold=true;
     this.windowcl=true;
   this.stockimage=true;
   // this.mailbody=document.getElementById('mailid');
   // this.mailbody.style.background='';
   //  this.mailbody.style.color='black';
   // this.SIGNHOLD.style.background='#3F51B5';
   // this.SIGNHOLD.style.color='#fff';
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='';
   this.PROMO.style.color='black';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
   this.STOCKIMAGE=document.getElementById('defaultstock')
    this.STOCKIMAGE.style.background='';
    this.STOCKIMAGE.style.color='black';
    this.mailbody=document.getElementById('defaultemail')
    this.mailbody.style.background='';
    this.mailbody.style.color='black';
    this.insdiv=document.getElementById('ins')
    this.insdiv.style.background='';
    this.insdiv.style.color='black';
   this.insbody=document.getElementById('menu_bod');
   this.insbody.style.display='none'
  //  this.insbody.className="active";
  //  this.insbody.style.display='block'
   this.stylediv=document.getElementById('menu_st')
   this.stylediv.style.background='';
   this.stylediv.style.color='black';
   this.stylediv=document.getElementById('be_ins');
   this.stylediv.style.display='block'

  //  this.stylediv.style.color='white';
   this.stylediv=document.getElementById('help_sec')
   this.stylediv.style.background='';
   this.stylediv.style.color='black'
   this.bir_ins_div=document.getElementById('b_e_ins')
   this.bir_ins_div.style.background='#3F51B5';
   this.bir_ins_div.style.color='white'
   this.eventdiv=document.getElementById('e_img')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_email')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
  }
  else if(e=='event_img'){
    // alert("you are in birthday events")
    this.instructions=true;
    this.styling=true
    this.help_section=true
    this.bir_ins=true
    this.eventimage=false;
    this.show_conf_email=true;
    this.coverimage=true;

     this.pack=true;
     this.promo=true;
     this.mailbodydiv=true;
     this.signhold=true;
     this.windowcl=true;
   this.stockimage=true;
   // this.mailbody=document.getElementById('mailid');
   // this.mailbody.style.background='';
   //  this.mailbody.style.color='black';
   // this.SIGNHOLD.style.background='#3F51B5';
   // this.SIGNHOLD.style.color='#fff';
   this.eventdiv=document.getElementById('c_email')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='';
   this.PROMO.style.color='black';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
   this.STOCKIMAGE=document.getElementById('defaultstock')
    this.STOCKIMAGE.style.background='';
    this.STOCKIMAGE.style.color='black';
    this.mailbody=document.getElementById('defaultemail')
    this.mailbody.style.background='';
    this.mailbody.style.color='black';
    this.insdiv=document.getElementById('ins')
    this.insdiv.style.background='';
    this.insdiv.style.color='black';
   this.insbody=document.getElementById('menu_bod');
   this.insbody.style.display='none'
  //  this.insbody.className="active";
  //  this.insbody.style.display='block'
   this.stylediv=document.getElementById('menu_st')
   this.stylediv.style.background='';
   this.stylediv.style.color='black';
   this.stylediv=document.getElementById('be_ins');
   this.stylediv.style.display='none'

  //  this.stylediv.style.color='white';
   this.stylediv=document.getElementById('help_sec')
   this.stylediv.style.background='';
   this.stylediv.style.color='black'
   this.bir_ins_div=document.getElementById('b_e_ins')
   this.bir_ins_div.style.background='';
   this.bir_ins_div.style.color='black'
   this.eventdiv=document.getElementById('e_img')
   this.eventdiv.style.background='#3F51B5';
   this.eventdiv.style.color='white'
   this.eventdiv=document.getElementById('event_image');
   this.eventdiv.style.display='block'
   this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
  }
  else if(e=='conf_email'){
    // alert("you are in birthday events")
    this.instructions=true;
    this.styling=true
    this.help_section=true
    this.bir_ins=true
    this.eventimage=false;
    this.show_conf_email=false;
    this.coverimage=true;

     this.pack=true;
     this.promo=true;
     this.mailbodydiv=true;
     this.signhold=true;
     this.windowcl=true;
   this.stockimage=true;
   // this.mailbody=document.getElementById('mailid');
   // this.mailbody.style.background='';
   //  this.mailbody.style.color='black';
   // this.SIGNHOLD.style.background='#3F51B5';
   // this.SIGNHOLD.style.color='#fff';
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='';
   this.PROMO.style.color='black';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
   this.STOCKIMAGE=document.getElementById('defaultstock')
    this.STOCKIMAGE.style.background='';
    this.STOCKIMAGE.style.color='black';
    this.mailbody=document.getElementById('defaultemail')
    this.mailbody.style.background='';
    this.mailbody.style.color='black';
    this.insdiv=document.getElementById('ins')
    this.insdiv.style.background='';
    this.insdiv.style.color='black';
   this.insbody=document.getElementById('menu_bod');
   this.insbody.style.display='none'
  //  this.insbody.className="active";
  //  this.insbody.style.display='block'
   this.stylediv=document.getElementById('menu_st')
   this.stylediv.style.background='';
   this.stylediv.style.color='black';
   this.stylediv=document.getElementById('be_ins');
   this.stylediv.style.display='none'

  //  this.stylediv.style.color='white';
   this.stylediv=document.getElementById('help_sec')
   this.stylediv.style.background='';
   this.stylediv.style.color='black'
   this.bir_ins_div=document.getElementById('b_e_ins')
   this.bir_ins_div.style.background='';
   this.bir_ins_div.style.color='black'
   this.eventdiv=document.getElementById('e_img')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_email')
   this.eventdiv.style.background='#3F51B5';
   this.eventdiv.style.color='white'
   this.eventdiv=document.getElementById('confemail')
   this.eventdiv.style.display='block'

   this.eventdiv=document.getElementById('event_image');
   this.eventdiv.style.display='none'
   this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
  }
  else if(e=='cover_img'){
    // alert("you are in birthday events")
    this.instructions=true;
    this.styling=true
    this.help_section=true
    this.bir_ins=true
    this.eventimage=true;
    this.show_conf_email=true;
    this.coverimage=false;

     this.pack=true;
     this.promo=true;
     this.mailbodydiv=true;
     this.signhold=true;
     this.windowcl=true;
   this.stockimage=true;
   // this.mailbody=document.getElementById('mailid');
   // this.mailbody.style.background='';
   //  this.mailbody.style.color='black';
   // this.SIGNHOLD.style.background='#3F51B5';
   // this.SIGNHOLD.style.color='#fff';
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='';
   this.PROMO.style.color='black';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
   this.STOCKIMAGE=document.getElementById('defaultstock')
    this.STOCKIMAGE.style.background='';
    this.STOCKIMAGE.style.color='black';
    this.mailbody=document.getElementById('defaultemail')
    this.mailbody.style.background='';
    this.mailbody.style.color='black';
    this.insdiv=document.getElementById('ins')
    this.insdiv.style.background='';
    this.insdiv.style.color='black';
   this.insbody=document.getElementById('menu_bod');
   this.insbody.style.display='none'
  //  this.insbody.className="active";
  //  this.insbody.style.display='block'
   this.stylediv=document.getElementById('menu_st')
   this.stylediv.style.background='';
   this.stylediv.style.color='black';
   this.stylediv=document.getElementById('be_ins');
   this.stylediv.style.display='none'

  //  this.stylediv.style.color='white';
   this.stylediv=document.getElementById('help_sec')
   this.stylediv.style.background='';
   this.stylediv.style.color='black'
   this.bir_ins_div=document.getElementById('b_e_ins')
   this.bir_ins_div.style.background='';
   this.bir_ins_div.style.color='black'
   this.eventdiv=document.getElementById('e_img')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('c_email')
   this.eventdiv.style.background='';
   this.eventdiv.style.color='black'
   this.eventdiv=document.getElementById('confemail')
   this.eventdiv.style.display='none'

   this.eventdiv=document.getElementById('event_image');
   this.eventdiv.style.display='none'
   this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='#3F51B5';
     this.eventdiv.style.color='white'
     this.eventdiv=document.getElementById('c_image')
     this.eventdiv.style.display='block'
  }
    else{
    this.instructions=true;
    this.styling=true;
      this.pack=true;
    this.bir_ins=true
    this.eventimage=true
    this.show_conf_email=true;

      this.promo=true;
  this.coverimage=true;

      this.mailbodydiv=true
      this.signhold=true;
      this.windowcl=true;
    this.stockimage=false
    this.mailbody=document.getElementById('defaultemail')
    this.mailbody.style.background='';
    this.mailbody.style.color='black';
    this.eventdiv=document.getElementById('c_email')
    this.eventdiv.style.background='';
    this.eventdiv.style.color='black'
      // this.WINDOWCL=document.getElementById('windowCling');
      // this.WINDOWCL.className='active';
      this.WINDOWCL=document.getElementById('defaultwindow');
      this.WINDOWCL.style.background='';
      this.WINDOWCL.style.color='black';
  
      this.SIGNHOLD=document.getElementById('defaultsign')
      this.SIGNHOLD.style.background='';
      this.SIGNHOLD.style.color='black';
  
      this.PROMO=document.getElementById('defaultpromo');
      this.PROMO.style.background='';
      this.PROMO.style.color='black';
  
      this.PACK=document.getElementById('defaultOpen');
      this.PACK.style.background='';
      this.PACK.style.color='black';
      this.STOCKIMAGE=document.getElementById('stock')
    this.STOCKIMAGE.className='active'
      this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='#3F51B5';
     this.STOCKIMAGE.style.color='white';
     this.insdiv=document.getElementById('ins')
     this.insdiv.style.background='';
     this.insdiv.style.color='black';
     this.stylediv=document.getElementById('menu_st')
     this.stylediv.style.background='';
     this.stylediv.style.color='black';
     this.stylediv=document.getElementById('help_sec')
     this.stylediv.style.background='';
     this.stylediv.style.color='black'
     this.bir_ins_div=document.getElementById('b_e_ins')
     this.bir_ins_div.style.background='';
     this.bir_ins_div.style.color='black'
     this.eventdiv=document.getElementById('e_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
     this.eventdiv=document.getElementById('c_img')
     this.eventdiv.style.background='';
     this.eventdiv.style.color='black'
    }
  }
  //Admin order set up page package tab first row
  submit(v1:any,v2:any,v3:any,v4:any){
    this.yes_stnd=document.getElementById('yes_stnd');
    this.no_stnd=document.getElementById('no_stnd');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
     
    }
    else{
      this.set_value='N';
      
    }
    var dt={
       "Menu_number":v1,
       "Serial_no":v2,
       "Special_Menu":this.set_value,
       "SetUp_Fee":v3,
       "Monthly_Fee":v4,
      //  "Description":v5
    }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.laguna.postpackagedata(dt).subscribe(data=>{
      console.log(data);
      this.stanData=data;
      if(this.stanData.suc==1){
        this.m="Update successful";
        this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    });
  }
    //Admin order set up page package tab second row
  submitstndplus(v1:any,v2:any,v3:any,v4:any){
    this.yes_stnd=document.getElementById('yes');
    this.no_stnd=document.getElementById('no');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
     
    }
    else{
      this.set_value='N';
     
    }
    var dt={
      "Menu_number":v1,
      "Serial_no":v2,
      "Special_Menu":this.set_value,
      "SetUp_Fee":v3,
      "Monthly_Fee":v4,
      // "Description":v5
   }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.laguna.postpackagedata(dt).subscribe(data=>{
      console.log(data);
      this.stanplusData=data;
      if(this.stanplusData.suc==1){
        this.m="Updatesuccessful";
        this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    });
  }
    //Admin order set up page package tab third row
  submitpremium(v1:any,v2:any,v3:any,v4:any){
    this.yes_stnd=document.getElementById('yes_premium');
    this.no_stnd=document.getElementById('no_premium');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
      
    }
    else{
      this.set_value='N';
     
    }
    var dt={
      "Menu_number":v1,
      "Serial_no":v2,
      "Special_Menu":this.set_value,
      "SetUp_Fee":v3,
      "Monthly_Fee":v4,
      // "Description":v5
   }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.laguna.postpackagedata(dt).subscribe(data=>{
      console.log(data);
      this.premiumData=data;
      if(this.premiumData.suc==1){
        this.m="Update successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    });

  }
    //Admin order set up page Promo&calendar tab first row
  showeventcalendar(v1:any,v2:any){
    this.yes_stnd=document.getElementById('yes_calend');
    this.no_stnd=document.getElementById('no_calend');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    var dt={
     "serial_no":v1,
     "price":v2,
     "free":this.set_value
    }

    console.log(v1,v2,this.set_value);
    console.log(dt);
    this.laguna.PostPromoCalendar(dt).subscribe(data=>{
      console.log(data);
      this.eventData=data;
      if(this.eventData.suc==1){
        this.m="Update successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
      
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    })
  }
//Admin order set up page Promo&calendar tab second row
  birthdayaniversery(v1:any,v2:any){
    this.yes_stnd=document.getElementById('yes_birth');
    this.no_stnd=document.getElementById('no_birth');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    console.log(v1,v2,this.set_value);
    var dt={
      "serial_no":v1,
      "price":v2,
      "free":this.set_value
     }
     console.log(v1,v2,this.set_value);
     console.log(dt);
      this.laguna.PostPromoCalendar(dt).subscribe(data=>{
        console.log(data);
        this.birthdayData=data;
        if(this.birthdayData.suc==1){
       
          this.m="Update successful";
        this.myFunction()
        }
        else{
          this.m="Failed to update";
          this.myFunction()
        }
      },error=>{
        this.m="Failed to update";
        this.myFunction()
      })
     

  }
 //Admin order set up page signholder tab first row
  opentabletop(v1:any,v2:any){
    var dt={
      "per_Holder_Price":v1,
       "serial_no":v2
    }
    console.log(v1,v2);
    console.log(dt);
    this.laguna.Postsignupholder(dt).subscribe(data=>{
      console.log(data);
      this.tabletopData=data;
      if(this.tabletopData.suc==1){
       
        this.m="Update successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
      
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    })
  }
   //Admin order set up page signholder tab second row
  openwallmount(v1:any,v2:any){
    var dt={
      "per_Holder_Price":v2,
       "serial_no":v1
    }
    console.log(v1,v2);
    console.log(dt);
    this.laguna.Postsignupholder(dt).subscribe(data=>{
      console.log(data);
      this.wallData=data;
      if(this.wallData.suc==1){
       
        this.m="Update successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    })
  }
   //Admin order set up page signholder tab third row
  showwall(v1:any,v2:any){
    var dt={
      "per_Holder_Price":v2,
       "serial_no":v1
    }
    console.log(v1,v2);
    console.log(dt);
    this.laguna.Postsignupholder(dt).subscribe(data=>{
      console.log(data);
      this.showWallData=data
      if(this.showWallData.suc==1){
       
        this.m="Update successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
        this.myFunction()
    })
  }
  //Admin order set up page windowCling tab first row
  showwindow(v1:any,v2:any){
    var dt={
      "per_Holder_Price":v2,
       "serial_no":v1
    }
   console.log(v1,v2);
   console.log(dt);
   this.laguna.PostWIndowCling(dt).subscribe(data=>{
     console.log(data);
     this.windowData=data
     if(this.windowData.suc==1){
       
      this.m="Update successful";
    this.myFunction()
    }
    else{
      this.m="Failed to update";
      this.myFunction()
    }
   },error=>{
    this.m="Failed to update";
    this.myFunction()
   })
  }
  //For Disabled the Price on Enable the yes radio button in Promo&Calendar Tab
  verify(e:any){
    if(e=='y'){
      this.promo1=true;
      this.windowcling_yes=document.getElementById('birthday');
      this.windowcling_yes.value=0;
    }
    else{
      this.promo1=false;
    }
  }
  verifytre(e:any){
    if(e=='yes'){
      this.promo2=true;
      this.windowcling_yes=document.getElementById('eventcalnedar');
      this.windowcling_yes.value=0;
    }
    else{
         this.promo2=false;
    }
  }
//For character key Input Disabled
  preventNonNumericalInput(e:any){
    e = e || window.event;
    
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^[0-9]+$/))
     { e.preventDefault();}

  }
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  cat_select(){}
// zooming options
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
  // function called when the image to be cropped is loaded
  imageLoaded() {
    console.log("image loaded")
    this.showCropper = true;
    this.modal = false;
    this.hide = false;
    this.valu = false;
    this.Zoomout = false;
    this.ZoomIn = false;
  }
  // function called when the image is cropped
  imageCropped(event: ImageCroppedEvent) {
    console.log('imagecropped');
    // event.width=this.crop_width;
    // event.width=this.crop_height;
    console.log("width:" + event.width);
    console.log("height:" + event.height)
    this.croppedImage = event.base64;
    // this.preview_for_stock=this.croppedImage
    console.log(this.croppedImage);
  }
  cropperReady(sourceImageDimensions: Dimensions) {
   console.log('Cropper ready', sourceImageDimensions);
    console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
  }
  loadImageFailed() {
    console.log('Load failed');
  }
  // clicking on the save button after cropping the image
  click_it(){
    // this.cover_change=true;
      this.valu = true;
      this.img_cover=this.croppedImage;
      console.log("Cropped Image:" +this.croppedImage);
      // this.Breakfast_cover_preview=false;
      this.el.style.display='none'
  }
  close_it(){
    this.valu=true;
    this.Modal=document.getElementById('myfile');
    this.Modal.value=null;
  
  }
  open_crop_modal(){ //to open the modal for cropping
    this.el=document.getElementById('id01');
    this.el.style.display='block'
  
  }
  open_preview_modal(v:any){ //to show preview of the image uploaded
    this.previewImg=v;
    this.el=document.getElementById('id02');
    this.el.style.display='block'
  
  }
  // change event triggered when an event image is chosen
  event_image_change(e:any){
    this.crop_width=1800;
    this.crop_height=500;
    console.log(this.crop_width+" "+this.crop_height)
    this.stockImageName=e.target.files[0].name;
    // console.log(this.cropround)
    console.log(e.target.files[0])
    // this.logoname=e.target.files[0].name;
    // this.logo_file=e.target.files[0];
    this.img_cover=e;
    this.stock_file1=document.getElementById('logo_crop');
    this.stock_file1.click();
    console.log("hello")
  }
  // change event triggered when a default cover image is chosen
 cover_image_change(e:any){
    this.crop_width=1800;
    this.crop_height=500;
    console.log(this.crop_width+" "+this.crop_height)
    this.coverImageName=e.target.files[0].name;
    // console.log(this.cropround)
    console.log(e.target.files[0])
    // this.logoname=e.target.files[0].name;
    // this.logo_file=e.target.files[0];
    this.img_cover=e;
    this.stock_file1=document.getElementById('logo_crop');
    this.stock_file1.click();
    console.log("hello")
  }
  // change event triggered when a stock image is chosen
  stock_image_change(e:any){
    this.crop_width=1800;
    this.crop_height=500;
    console.log(this.crop_width+" "+this.crop_height)
    this.stockImageName=e.target.files[0].name;
    // console.log(this.cropround)
    console.log(e.target.files[0])
    // this.logoname=e.target.files[0].name;
    // this.logo_file=e.target.files[0];
    this.img_cover=e;
    this.stock_file1=document.getElementById('logo_crop');
    this.stock_file1.click();
    console.log("hello")
  }
  close_modal_on_crop(){
    this.modal_close_oncrop=document.getElementById('id01');
    this.modal_close_oncrop.style.display='none'
  }
  close_preview_modal(){
    this.el=document.getElementById('id02');
    this.el.style.display='none'
    // console.log("lallalalallalaei poth jodi na shesh hoy")
  }
  // posting the stock image
  submit_stock_image(v:any){
    
    if(v&&this.img_cover){
      this.spinner.show()
      console.log("Submitted"+" "+this.stockImageName);
      console.log(this.img_cover);
      this.laguna.uploadStockImage(v,this.img_cover,this.stockImageName).subscribe(data=>{console.log(data)
         this.spinner.hide();
        this.laguna.getStockImages('').subscribe(data=>{console.log(data)
          this.imageData=data;
          this.imageData=this.imageData.msg
          this.reset_stock();
          })
      
      })
     
    //  this.selectStock.value='';
   
    }
    else{
      
      this.m="Sorry! You can't keep an empty field"
      this.myFunction()
      // console.log("Empty Field")
    }

  }
  // posting the event image
  submit_event_image(){
    
    if(this.img_cover){
      this.spinner.show()
      console.log("Submitted"+" "+this.stockImageName);
      console.log(this.img_cover);
      this.laguna.uploadEventImage(this.img_cover,this.stockImageName).subscribe(data=>{console.log(data)
         this.spinner.hide();
         this.laguna.get_help_text().subscribe(data=>{console.log(data)
          this.gethelpText=data;
          this.gethelpText=this.gethelpText.msg;
          this.event_img=url_set.api_url+'/'+this.gethelpText[0].event_img
         
        })
      
      })
     
    //  this.selectStock.value='';
   
    }
    else{
      
      this.m="Sorry! You can't keep an empty field"
      this.myFunction()
      // console.log("Empty Field")
    }

  }
  // posting the cover image
  submit_cover_image(){
    
    if(this.img_cover){
      this.spinner.show()
      console.log("Submitted"+" "+this.coverImageName);
      console.log(this.img_cover);
      this.laguna.post_cov_img(this.img_cover,this.coverImageName).subscribe(data=>{console.log(data)
         this.spinner.hide();
         this.laguna.get_help_text().subscribe(data=>{console.log(data)
          this.gethelpText=data;
          this.gethelpText=this.gethelpText.msg;
          this.cover_img=url_set.api_url+'/'+this.gethelpText[0].cover_img
         
        })
      
      })
     
    //  this.selectStock.value='';
   
    }
    else{
      
      this.m="Sorry! You can't keep an empty field"
      this.myFunction()
      // console.log("Empty Field")
    }

  }
  // fetching the stock images by category
  pic_select(v:any){
    this.imageData.length=0;
    console.log(v);
    this.laguna.getStockImages(v).subscribe(data=>{console.log(data)
      this.imageData=data;
      this.imageData=this.imageData.msg
      
      })
  }
  // delete modal before deleting a stock image
  openDeleteModal(){
    this.el=document.getElementById('id03');
    this.el.style.display='block'
  }
  closeDeleteModal(){
    this.el=document.getElementById('id03');
    this.el.style.display='none'
  }
  // showing the delete option on hover
  show_cross(){
    this.dispCross=false;
  }
  hide_cross(){
    this.dispCross=true
  }
  // assign the image id of the image to be deleted
  deleteImg(v:any){
    console.log(v)
    this.deleteId=v;
  }
  // deleting the stock image
  delete_stock_image(){
    console.log(this.deleteId);
    this.laguna.deleteStockImages(this.deleteId).subscribe(data=>{console.log(data)
      this.laguna.getStockImages('').subscribe(data=>{console.log(data)
        this.imageData=data;
        this.imageData=this.imageData.msg
        
        })
    })
  }
  // restrict textarea to a particular number of characters
  restrict2(e:any){
    this.concatdatalength2=e.target.value.length;
    console.log(this.concatdatalength2)
  }
  restrict3(e:any){
    this.concatdatalength3=e.target.value.length;
    console.log(this.concatdatalength2)
  }
  // refreshing the input fields of the stock image section
  reset_stock(){
    this.select_div=document.getElementById('pickup_place_stock_img');
    this.file_div=document.getElementById('headTitle_stock');
    this.select_div.value='';
    this.file_div.value=null;
  }
  // fetching the email body based on the category type
  em_select(v:any){
    this.emailbodyreadonly=''
    this.laguna.get_email_body(v).subscribe(data=>{console.log(data)
      this.emailbodyData=data;
      this.emailbodyreadonly=this.emailbodyData.msg[0].email_body
    })

  }
  // submitting the email body based on the category type
  post_em_body(type:any,body:any){
    var dt={
      "email_type":type,
      "body":body,
      "user":"admin@gmail.com"
    }
    this.laguna.post_email(dt).subscribe(data=>{console.log(data)
      this.em_select(type);
    //   this.selectemail=document.getElementById('pickup_place_email_body');
    // this.selectemail.value='';
    this.selectemailbody=document.getElementById('em_bd');
    this.selectemailbody.value='';
    this.concatdatalength2=0;
    })
  }
  // resetting the fields of email submit section
  reset_email_body(){
    this.selectemail=document.getElementById('pickup_place_email_body');
    this.selectemail.value='';
    this.selectemailbody=document.getElementById('em_bd');
    this.selectemailbody.value='';
    this.emailbodyreadonly='';
    this.concatdatalength2=0
  }
  // selecting the menus for writing instructions
  menu_sel(v:any){
  console.log(v)
  this.menu_instruction=''
  this.laguna.get_all_menu(v).subscribe(data=>{console.log(data)

    this.menuchoiceData1=data;
   
    this.menuchoiceData1=this.menuchoiceData1.msg;
     this.menu_instruction=this.menuchoiceData1[0].info
    // this.mncdata=this.menuchoiceData[0].menu_id;
    console.log(this.menuchoiceData1)
    // console.log('bkmenu'+this.menuchoiceData[0].menu_id)
    // this.bkmenuid=document.getElementById('bkmenu'+this.menuchoiceData[0].menu_id);
    // console.log(this.bkmenuid)
   // this.bkmenuid.checked=true;
    })
  }
  // submitting the instructions based on the menu selected
  post_ins_body(v1:any,v2:any){
    // alert(v1+" "+v2);
    var dt={
      "info":v2,
      "id":v1,
      "user":"admin@gmail.com"
    }
    this.laguna.post_menu_ins(dt).subscribe(data=>{console.log(data)
    this.menuInsData=data;
    if(this.menuInsData.suc==1)
    {
      this.reset_ins();
      this.m="Insertion successful";
      this.myFunction()
      this.laguna.get_all_menu(v1).subscribe(data=>{console.log(data)

        this.menuchoiceData1=data;
       
        this.menuchoiceData1=this.menuchoiceData1.msg;
         this.menu_instruction=this.menuchoiceData1[0].info
        // this.mncdata=this.menuchoiceData[0].menu_id;
        console.log(this.menuchoiceData1)
        // console.log('bkmenu'+this.menuchoiceData[0].menu_id)
        // this.bkmenuid=document.getElementById('bkmenu'+this.menuchoiceData[0].menu_id);
        // console.log(this.bkmenuid)
       // this.bkmenuid.checked=true;
        })
    }
    else{
      this.m="Failed to update";
      this.myFunction()
    }
    
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    })
  }
  //resetting instruction field
  reset_ins(){
    this.selectemail=document.getElementById('pickup_place_menu_ins');
    this.selectemail.value='';
    this.selectemailbody=document.getElementById('em_ins');
    this.selectemailbody.value='';
    this.emailbodyreadonly='';
    this.concatdatalength3=0
  }
  // submitting the style dat footer color, greeting color and navigation bar color
  post_style(bodcol:any,txtcol:any,greetcol:any){
    // alert(bodcol+" "+txtcol+" "+this.editorText+" "+greetcol)
    var dt={
 "foo_col":bodcol,
 "foo_con":this.editorText,
 "txt_col":txtcol,
 "greet_col":greetcol
      }
      
  this.laguna.post_config_menu(dt).subscribe(data=>{console.log(data)
  this.configData=data;
  if(this.configData.suc==1)
  {
    this.laguna.get_config_menu().subscribe(data=>{console.log(data)
      this.get_configData=data;
      this.get_configData=this.get_configData.msg
      this.menubodCol=this.get_configData[0].footer_color;
      this.menutextCol=this.get_configData[0].text_color;
      this.greettextCol=this.get_configData[0].greet_text_color;
      this.editorText=this.get_configData[0].footer_content
      this.m="Updated successfully!";
      this.myFunction()
    })
  }
  else{
    this.m="Failed to update!";
    this.myFunction()
  }
  
  },error=>{
    this.m="Failed to update!";
    this.myFunction()
  })
  }
  // submitting data for help section
  post_help(menu:any,cal:any,qr:any,bdad:any,contact_info:any){
    // alert(cal)
    var dt={
      "menu_help":menu,
      "cal_help":cal,
      "qr_help":qr,
      "bir_help":bdad,
      "con_help":contact_info,
      "user":"admin@gmail.com"
    }
    this.laguna.post_help_text(dt).subscribe(data=>{console.log(data)
    this.helpData=data;
    if(this.helpData.suc==1){
      this.m="Update successful!";
      this.myFunction();
      this.laguna.get_help_text().subscribe(data=>{console.log(data)
        this.gethelpText=data;
        this.gethelpText=this.gethelpText.msg;
        this.menu_readonly=this.gethelpText[0].menu_help;
        this.calendar_readonly=this.gethelpText[0].calender_help;
        this.qrcs_readonly=this.gethelpText[0].qr_help;
        this.bdad_readonly=this.gethelpText[0].birthday_help;
        this.circ_readonly=this.gethelpText[0].cantact_info_help;
        this.editorText1=this.gethelpText[0].birthday_body;
        this.editorText2=this.gethelpText[0].event_body
       this.conf_text_readonly=this.gethelpText[0].order_conf
        
      })
    }
    else{
      this.m="Failed to update!";
      this.myFunction()
    }
    },error=>{
      this.m="Failed to update!";
      this.myFunction()
    })
  }
  // submitting the instructions for events in the menu setup page
  post_ev_ins(){ //for uploading events for instruction concerning birthdays and events
    // alert(this.editorText1+" "+this.editorText2)
    var dt={
      "bir_text":this.editorText1,
      "event_text":this.editorText2,
      "user":"admin@gmail.com"
    }
    this.laguna.post_ev_ins(dt).subscribe(data=>{console.log(data)
      this.insbody=data;
      if(this.insbody.suc==1)
      {
        this.m="Update successful!";
        this.myFunction();
        
        this.laguna.get_help_text().subscribe(data=>{console.log(data)
        this.gethelpText=data;
        this.gethelpText=this.gethelpText.msg;
       
        this.editorText1=this.gethelpText[0].birthday_body;
        this.editorText2=this.gethelpText[0].event_body
      })
    
    }
      else{
        this.m="Failed to update!";
        this.myFunction();

      }
    },error=>{this.m="Failed to update!";
    this.myFunction();})
  }
  // submitting the pdf content
  post_conf_msg(v:any){
    // alert(v);
    var dt={"order_conf":v,"user":"admin@gmail.com"};
    this.laguna.post_order_conf(dt).subscribe(data=>{console.log(data)
      this.postConfData=data;
      if(this.postConfData.suc==1){
        this.m="Update successful!"
        this.myFunction();

      }
      else{
        this.m="Update failed!"
        this.myFunction();

      }
      this.laguna.get_help_text().subscribe(data=>{console.log(data)
        this.gethelpText=data;
        this.gethelpText=this.gethelpText.msg;
      
       this.conf_text_readonly=this.gethelpText[0].order_conf
        
      })
  },error=>{
    this.m="Update failed!"
    this.myFunction();
  })
}

}
