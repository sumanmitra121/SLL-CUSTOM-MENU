import {  Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';//For Image Cropper
import { url_set } from 'src/app/globalvar';
import { NgxSpinnerService } from "ngx-spinner";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class AdminOrderPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Venue_name', 'Option'];
  dataSource=new  MatTableDataSource();
  @ViewChild('MatPaginator1',{static:true}) MatPaginator1!: MatPaginator;
  @ViewChild('datasort1',{static:true}) datasort1!: MatSort;

  @ViewChild('MatPaginator2',{static:true}) MatPaginator2!: MatPaginator;
  @ViewChild('datasort2',{static:true}) datasort2!: MatSort;

  displayedColumns_menu: string[] = ['id', 'Venue_name', 'menu_name','Option'];
  dataSource_menu=new  MatTableDataSource();
 
  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: '15rem',
  //   minHeight: '5rem',
  //   placeholder: 'Enter text here...',
  //   translate: 'no',
  //   defaultParagraphSeparator: 'p',
  //   defaultFontName: 'Arial',
  //   toolbarHiddenButtons: [
  //     ['bold']
  //     ],
  //   customClasses: [
  //     {
  //       name: "quote",
  //       class: "quote",
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: "titleText",
  //       class: "titleText",
  //       tag: "h1",
  //     },
  //   ]
  // };


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
  rest=false;
  del_id_venue:any;
  create_menu:any='';
  create_venue:any='';
  coverImageName:any;
  windowcling_yes:any;
  emailtype:any;
  emailbodyData:any;
  coverimage=true;
  emailbodyreadonly=''
  pack:boolean=false;
  showWallData:any;
  menu_hide=true;
  venue_hide=true;
  promo:boolean=true;
  signhold:boolean=true;
  windowcl:boolean=true;
  mailbodydiv:boolean=true;
  instructions=true;
  styling=true;
  venue_name:any;
  menubodCol='#ffffff'
  menutextCol='#ffffff';
  greettextCol='#ffffff'
  insdiv:any;
  conf_text_readonly=''
  eventData:any;
  edit_id:any;
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
  vid:any;
  tab:any;
  cover_img:any;
  deleteId:any;
  stockImageName:any;
  del_menu_id:any;
  yes_stnd:any;
  no_stnd:any;
  set_value:any;
  Package:any=[];
  menuchoiceData1:any
  stanData:any;
  stanplusData:any;
  premiumData:any;
  windowData:any;
  edit_menu_id:any;
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
  stockimage=true;
  venueData:any;
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
 restaurant_tab:any;
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
 rest_web='';
 rest_setup='';
 rest_monthly='';
 rest_nm='';
 rest_phone='';
 rest_em='';
 rest_contact='';
 rest_add='';
 show_conf_email=true;
 postConfData:any;
 r_id:any
 defaultmenudiv:any;
 defaultvenuediv:any;
  dashboardData: any;
  url_nm: any;
  url2: any;
  getVenues:any;
  getMenus:any;
  signqty1:any
  signqty2:any
  signqty3:any
  winqty1:any
  show_add_update_button_for_menu=false;
  show_add_update_button_for_venue=false;
  constructor(private router:Router, private admin_data:LagunaserviceService,private activatedRoute:ActivatedRoute,private spinner:NgxSpinnerService,private laguna:LagunaserviceService) { }
  selectStock:any;
  gethelpText:any
  venueid=0;
  venueid_del:any;
  ngOnInit(): void {
    this.r_id=this.activatedRoute.snapshot.params['id'];
    this.r_id=atob(this.r_id);
    this.spinner.show();

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
    this.laguna.getpackagedata(this.r_id).subscribe(data=>{
    console.log(data);  //api call for fetching various packages 
      this.Package=data;

      this.stndpackage_setupfee=this.Package.msg[0].setup_fee;
      this.stndpacakge__monthlyfee=this.Package.msg[0].monthly_fee;
        this.stndpackage_desc=this.Package.msg[0].pack_description;
        this.stnd_numberofmenu=this.Package.msg[0].no_of_menu;
        console.log(this.stndpackage_setupfee,this.stndpacakge__monthlyfee);
        if(this.Package.msg[0].special_menu=="Y"){
        this.stnd_specialmenu_yes=document.getElementById('yes_stnd');
        this.stnd_specialmenu_yes.checked=true;
        }
        else{
        
          this.stnd_specialmenu_yes=document.getElementById('no_stnd');
        this.stnd_specialmenu_yes.checked=true;
        }

    //  for(let i=0;i<this.Package.msg.length;i++){
    //       if(this.Package.msg[i].pakage_name=='Custom'){
            

    //       }
          
    //       // console.log(this.premiumpacakge_specialmenu_yes.checked);
    //  }
    })
  
    //For SignHolder
    this.laguna.Getsignupholder(this.r_id).subscribe(data=>{
            this.signholder=data;
           
                 this.signholder_price1=this.signholder.msg[0].table_top_6_price;
                
                 this.signqty1=this.signholder.msg[0].table_top_6;
                 this.signqty2=this.signholder.msg[0].table_top_7;
                 this.signqty3=this.signholder.msg[0].table_top_8;
                 this.winqty1=this.signholder.msg[0].window_cling_9;
             
                   this.signholder_price2=this.signholder.msg[0].table_top_7_price;
             
            
                this.signholder_price3=this.signholder.msg[0].table_top_8_price;
             
            
    })
    //For Window Cling
    this.laguna.GetWindowCling(this.r_id).subscribe(data=>{
      // console.log(data);
      this.window=data;
      
          this.windowcling_price=this.window.msg[0].window_cling_9_price;
        
      

      // this.windowcling_description
    })
    // this.PACK=document.getElementById('package');
    // this.PACK.className='active';
    // this.PACK=document.getElementById('defaultOpen');
    // this.PACK.style.background='#3F51B5';
    // this.PACK.style.color='#fff';
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
      this.admin_data.get_admin_dashboard_custom(this.r_id).subscribe(data=>{console.log(data)
        this.dashboardData=data;
        // this.show_spinner=true;
        this.spinner.hide();
        this.dashboardData=this.dashboardData.msg;
        this.rest_nm=this.dashboardData[0].restaurant_name;
        this.url_nm=this.rest_nm.replace(/ /g,'_');
        this.url1=this.url1+this.url_nm+'/'+btoa(this.r_id);
        this.url2=this.dashboardData[0].bitly_url;
        console.log(this.url1+" "+this.url2)
        this.rest_contact=this.dashboardData[0].contact_name;
        this.rest_phone=this.dashboardData[0].phone_no;
        this.rest_em=this.dashboardData[0].email;
        this.rest_web=this.dashboardData[0].website;
        this.rest_monthly=this.dashboardData[0].monthly_fee;
        this.rest_setup=this.dashboardData[0].setup_fee;
        this.dashboardData[0].addr_line2=this.dashboardData[0].addr_line2?this.dashboardData[0].addr_line2:''
        this.rest_add=this.dashboardData[0].addr_line1+" "+this.dashboardData[0].addr_line2+" "+this.dashboardData[0].zip+" "+this.dashboardData[0].city+", "+this.dashboardData[0].country
        })

          //For Promo Calendar Tab
    this.laguna.GetPromoCalendar(this.r_id).subscribe(data=>{
      console.log(data);
      this.promocalendar=data; //api call to fetch facilities regarding the promo calendar
    
          this.promo_Birthdayprice=this.promocalendar.msg[0].birth_price;

            if(this.promocalendar.msg[0].birth_free_flag=='Y'){
          this.promo_Birthdaypriceyes=document.getElementById('yes_birth');
          this.promo_Birthdaypriceyes.checked=true;
          this.promo1=true;
         }
        else{
          this.promo_Birthdaypriceno=document.getElementById('no_birth');
          this.promo_Birthdaypriceno.checked=true;
          this.promo1=false;
        }
       
       
          this.promo_EventCalendarprice=this.promocalendar.msg[0].event_price;
          if(this.promocalendar.msg[0].event_free_flag=='Y'){
            console.log("event_free_flag_yes");
            this.promo_EventCalendarprice_yes=document.getElementById('yes_calend');
            this.promo_EventCalendarprice_yes.checked=true;
            this.promo2=true;
          }
          else{
            console.log("event_free_flag_no");
            this.promo_EventCalendarprice_no=document.getElementById('no_calend');
            this.promo_EventCalendarprice_no.checked=true;
            this.promo2=false;;

          }
    })
      this.fetchdata()
      this.fetchdata_menu(this.r_id, 0, null)
       this.spinner.hide()
      this.opencity('restaurants')
  }
//For Toggling from one tab to another
  opencity(e:any){
  //  console.log(e);
   
    if(e=='restaurants'){
      // alert(e)
      // console.log('i am here');
      this.menu_hide=true;
      this.venue_hide=true;
      this.pack=true;
      this.coverimage=true;
      this.rest=false;
      this.help_section=true
  this.promo=true;
  this.show_conf_email=true;
  this.eventimage=true
  this.styling=true;
  this.mailbodydiv=true;
  this.instructions=true;
  // this.stockimage=true
  this.signhold=true;
  this.styling=true;
  this.windowcl=true;
  this.bir_ins=true
  // console.log(this.stockimage)
  // this.PACK=document.getElementById('package');
  // this.PACK.style.background='';
  // this.PACK.style.color='black';
  this.PACK=document.getElementById('defaultOpen_rest');
  this.PACK.className='active';
  this.PACK.style.background="#3F51B5";
  this.PACK.style.color="white"
  this.defaultmenudiv=document.getElementById('defaultmenu');
  this.defaultmenudiv.className='';

  this.defaultmenudiv.style.background='';
  this.defaultmenudiv.style.color='black';
  this.defaultvenuediv=document.getElementById('defaultvenue');
  this.defaultvenuediv.className=''
  this.defaultvenuediv.style.background='';
  this.defaultvenuediv.style.color='black'
  this.PACK=document.getElementById('defaultOpen');
  this.PACK.className=''
  this.PACK.style.background='';
  this.PACK.style.color='black';
  this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='';
   this.PROMO.style.color='black';
   this.SIGNHOLD=document.getElementById('defaultsign');
   this.SIGNHOLD.style.background='';
   this.SIGNHOLD.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
 
  }
    //For package Tab

    else if(e=='package'){
      // alert("package")
        this.pack=false;
  this.coverimage=true;
  this.rest=true;
  this.menu_hide=true;
      this.venue_hide=true;
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
    this.restaurant_tab=document.getElementById('defaultOpen_rest');
  this.restaurant_tab.style.background='';
  this.restaurant_tab.style.color='black';
  this.restaurant_tab.className=''
  console.log(this.restaurant_tab)
  this.defaultmenudiv=document.getElementById('defaultmenu');
  this.defaultmenudiv.className='';

  this.defaultmenudiv.style.background='';
  this.defaultmenudiv.style.color='black';
  this.defaultvenuediv=document.getElementById('defaultvenue');
  this.defaultvenuediv.className=''

  this.defaultvenuediv.style.background='';
  this.defaultvenuediv.style.color='black'
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.className='active';
    // this.PACK=document.getElementById('defaultOpen');
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
    //  this.STOCKIMAGE=document.getElementById('defaultstock')
    //  this.STOCKIMAGE.style.background='';
    //  this.STOCKIMAGE.style.color='black';
    //  this.mailbody=document.getElementById('defaultemail')
    //  this.mailbody.style.background='';
    //  this.mailbody.style.color='black';
    //  this.insdiv=document.getElementById('ins')
    //  this.insdiv.style.background='';
    //  this.insdiv.style.color='black';
    //  this.stylediv=document.getElementById('menu_st')
    //  this.stylediv.style.background='';
    //  this.stylediv.style.color='black';
    //  this.stylediv=document.getElementById('help_sec')
    //  this.stylediv.style.background='';
    //  this.stylediv.style.color='black'
    //  this.eventdiv=document.getElementById('c_email')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    //  this.bir_ins_div=document.getElementById('b_e_ins')
    //  this.bir_ins_div.style.background='';
    //  this.bir_ins_div.style.color='black'
    //  this.eventdiv=document.getElementById('e_img')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    //  this.eventdiv=document.getElementById('c_img')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    }
    //For Promotion tab
    else if(e=='promo'){
       this.pack=true;
       this.menu_hide=true;
      this.venue_hide=true;
    this.show_conf_email=true;
    this.coverimage=true;
    this.rest=true;

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
   this.defaultmenudiv=document.getElementById('defaultmenu');
   this.defaultmenudiv.className='';

   this.defaultmenudiv.style.background='';
   this.defaultvenuediv.style.color='black';
   this.defaultvenuediv=document.getElementById('defaultvenue');
  this.defaultvenuediv.className=''

   this.defaultvenuediv.style.background='';
   this.defaultvenuediv.style.color='black'
   this.restaurant_tab=document.getElementById('defaultOpen_rest');
  this.restaurant_tab.style.background='';
  this.restaurant_tab.style.color='black';
  this.restaurant_tab.className=''
   this.PROMO=document.getElementById('promoCalendar');
   this.PROMO.className='active';
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='#3F51B5';
   this.PROMO.style.color='#fff';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.className=''
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.SIGNHOLD=document.getElementById('defaultsign')
   this.SIGNHOLD.style.background='';
   this.SIGNHOLD.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
  //  this.STOCKIMAGE=document.getElementById('defaultstock')
  //    this.STOCKIMAGE.style.background='';
  //    this.STOCKIMAGE.style.color='black';
  //    this.mailbody=document.getElementById('defaultemail')
  //    this.mailbody.style.background='';
  //    this.mailbody.style.color='black';
  //    this.insdiv=document.getElementById('ins')
  //    this.insdiv.style.background='';
  //    this.insdiv.style.color='black';
  //    this.stylediv=document.getElementById('menu_st')
  //    this.stylediv.style.background='';
  //    this.stylediv.style.color='black';
  //    this.stylediv=document.getElementById('help_sec')
  //    this.stylediv.style.background='';
  //    this.stylediv.style.color='black'
  //    this.bir_ins_div=document.getElementById('b_e_ins')
  //    this.bir_ins_div.style.background='';
  //    this.bir_ins_div.style.color='black'
  //    this.eventdiv=document.getElementById('e_img')
  //    this.eventdiv.style.background='';
  //    this.eventdiv.style.color='black'
  //    this.eventdiv=document.getElementById('c_email')
  //    this.eventdiv.style.background='';
  //    this.eventdiv.style.color='black'
  //    this.eventdiv=document.getElementById('c_img')
  //    this.eventdiv.style.background='';
  //    this.eventdiv.style.color='black'
    }
    //For signholder tab
    else if(e=='signholder'){
         this.pack=true;
         this.menu_hide=true;
      this.venue_hide=true;
    this.show_conf_email=true;
    this.coverimage=true;
    this.rest=true;

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
    this.defaultmenudiv=document.getElementById('defaultmenu');
    this.defaultmenudiv.className='';

    this.defaultmenudiv.style.background='';
    this.defaultvenuediv.style.color='black';
    this.defaultvenuediv=document.getElementById('defaultvenue');
  this.defaultvenuediv.className=''

    this.defaultvenuediv.style.background='';
    this.defaultvenuediv.style.color='black'
    this.restaurant_tab=document.getElementById('defaultOpen_rest');
    this.restaurant_tab.style.background='';
    this.restaurant_tab.style.color='black';
    this.restaurant_tab.className=''
    this.SIGNHOLD=document.getElementById('signHolder');
    this.SIGNHOLD.className='active';
    this.SIGNHOLD=document.getElementById('defaultsign')
    this.SIGNHOLD.style.background='#3F51B5';
    this.SIGNHOLD.style.color='#fff';
    this.PROMO=document.getElementById('defaultpromo');
    this.PROMO.style.background='';
    this.PROMO.style.color='black';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.className=''
    this.PACK.style.background='';
    this.PACK.style.color='black';
    this.WINDOWCL=document.getElementById('defaultwindow');
    this.WINDOWCL.style.background='';
    this.WINDOWCL.style.color='black';
    // this.STOCKIMAGE=document.getElementById('defaultstock')
    //  this.STOCKIMAGE.style.background='';
    //  this.STOCKIMAGE.style.color='black';
    //  this.mailbody=document.getElementById('defaultemail')
    //  this.mailbody.style.background='';
    //  this.mailbody.style.color='black';
    //  this.insdiv=document.getElementById('ins')
    //  this.insdiv.style.background='';
    //  this.insdiv.style.color='black';
    //  this.stylediv=document.getElementById('menu_st')
    //  this.stylediv.style.background='';
    //  this.stylediv.style.color='black';
    //  this.stylediv=document.getElementById('help_sec')
    //  this.stylediv.style.background='';
    //  this.stylediv.style.color='black'
    //  this.bir_ins_div=document.getElementById('b_e_ins')
    //  this.bir_ins_div.style.background='';
    //  this.bir_ins_div.style.color='black'
    //  this.eventdiv=document.getElementById('e_img')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    //  this.eventdiv=document.getElementById('c_email')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    //  this.eventdiv=document.getElementById('c_img')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    }
    //For Window tab
    else if(e=='window'){
      this.menu_hide=true;
      this.venue_hide=true;
        this.pack=true;
        this.styling=true
    this.show_conf_email=true;
    this.rest=true;
    this.defaultmenudiv=document.getElementById('defaultmenu');
    this.defaultmenudiv.className='';


    this.defaultmenudiv.style.background='';
    this.defaultmenudiv.style.color='black';
    this.defaultvenuediv=document.getElementById('defaultvenue');
  this.defaultvenuediv.className=''

    this.defaultvenuediv.style.background='';
    this.defaultvenuediv.style.color='black'
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
    this.restaurant_tab=document.getElementById('defaultOpen_rest');
  this.restaurant_tab.style.background='';
  this.restaurant_tab.style.color='black';
  this.restaurant_tab.className=''
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
    this.PACK.className=''
    this.PACK.style.background='';
    this.PACK.style.color='black';
    // this.STOCKIMAGE=document.getElementById('defaultstock')
    //  this.STOCKIMAGE.style.background='';
    //  this.STOCKIMAGE.style.color='black';
    //  this.mailbody=document.getElementById('defaultemail')
    //  this.mailbody.style.background='';
    //  this.mailbody.style.color='black';
    //  this.insdiv=document.getElementById('ins')
    //  this.insdiv.style.background='';
    //  this.insdiv.style.color='black';
    //  this.stylediv=document.getElementById('menu_st')
    //  this.stylediv.style.background='';
    //  this.stylediv.style.color='black';
    //  this.stylediv=document.getElementById('help_sec')
    //  this.stylediv.style.background='';
    //  this.stylediv.style.color='black'
    //  this.bir_ins_div=document.getElementById('b_e_ins')
    //  this.bir_ins_div.style.background='';
    //  this.bir_ins_div.style.color='black'
    //  this.eventdiv=document.getElementById('e_img')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    //  this.eventdiv=document.getElementById('c_email')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    //  this.eventdiv=document.getElementById('c_img')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'

    }
    else if(e=='venue'){
      this.pack=true;
      this.menu_hide=true;
      this.venue_hide=false;
      this.styling=true
  this.show_conf_email=true;
  this.rest=true;

      this.help_section=true
      this.bir_ins=true
      this.eventimage=true
      this.coverimage=true;

  this.promo=true;
  this.signhold=true;
  this.windowcl=true;
  this.stockimage=true
  this.mailbodydiv=true;
  this.instructions=true;
  this.defaultmenudiv=document.getElementById('defaultmenu');
  this.defaultmenudiv.className='';

  this.defaultmenudiv.style.background='';
  this.defaultmenudiv.style.color='black';
  this.defaultvenuediv=document.getElementById('defaultvenue');
  this.defaultvenuediv.className='active';
  this.defaultvenuediv.style.background='#3F51B5';
  this.defaultvenuediv.style.color='#fff';

  this.restaurant_tab=document.getElementById('defaultOpen_rest');
this.restaurant_tab.style.background='';
this.restaurant_tab.style.color='black';
this.restaurant_tab.className=''
  this.WINDOWCL=document.getElementById('windowCling');
  this.WINDOWCL.className='active';
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
  this.PACK.className=''

  this.PACK.style.background='';
  this.PACK.style.color='black';
  // this.STOCKIMAGE=document.getElementById('defaultstock')
  //  this.STOCKIMAGE.style.background='';
  //  this.STOCKIMAGE.style.color='black';
  //  this.mailbody=document.getElementById('defaultemail')
  //  this.mailbody.style.background='';
  //  this.mailbody.style.color='black';
  //  this.insdiv=document.getElementById('ins')
  //  this.insdiv.style.background='';
  //  this.insdiv.style.color='black';
  //  this.stylediv=document.getElementById('menu_st')
  //  this.stylediv.style.background='';
  //  this.stylediv.style.color='black';
  //  this.stylediv=document.getElementById('help_sec')
  //  this.stylediv.style.background='';
  //  this.stylediv.style.color='black'
  //  this.bir_ins_div=document.getElementById('b_e_ins')
  //  this.bir_ins_div.style.background='';
  //  this.bir_ins_div.style.color='black'
  //  this.eventdiv=document.getElementById('e_img')
  //  this.eventdiv.style.background='';
  //  this.eventdiv.style.color='black'
  //  this.eventdiv=document.getElementById('c_email')
  //  this.eventdiv.style.background='';
  //  this.eventdiv.style.color='black'
  //  this.eventdiv=document.getElementById('c_img')
  //  this.eventdiv.style.background='';
  //  this.eventdiv.style.color='black'

  }
  else if(e=='menu'){
    this.pack=true;
    this.styling=true
    this.menu_hide=false;
      this.venue_hide=true;
this.show_conf_email=true;
this.rest=true;

    this.help_section=true
    this.bir_ins=true
    this.eventimage=true
    this.coverimage=true;

this.promo=true;
this.signhold=true;
this.windowcl=true;
this.stockimage=true
this.mailbodydiv=true;
this.instructions=true;
this.restaurant_tab=document.getElementById('defaultOpen_rest');
this.restaurant_tab.style.background='';
this.restaurant_tab.style.color='black';
this.restaurant_tab.className=''
this.defaultmenudiv=document.getElementById('defaultmenu');
this.defaultmenudiv.className='active'
this.defaultmenudiv.style.background='#3F51B5';
this.defaultmenudiv.style.color='#fff';
this.defaultvenuediv=document.getElementById('defaultvenue');
this.defaultvenuediv.className=''

this.defaultvenuediv.style.background='';
this.defaultvenuediv.style.color='black'
this.WINDOWCL=document.getElementById('windowCling');
this.WINDOWCL.className='active';
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
this.PACK.className=''

this.PACK.style.background='';
this.PACK.style.color='black';
// this.STOCKIMAGE=document.getElementById('defaultstock')
//  this.STOCKIMAGE.style.background='';
//  this.STOCKIMAGE.style.color='black';
//  this.mailbody=document.getElementById('defaultemail')
//  this.mailbody.style.background='';
//  this.mailbody.style.color='black';
//  this.insdiv=document.getElementById('ins')
//  this.insdiv.style.background='';
//  this.insdiv.style.color='black';
//  this.stylediv=document.getElementById('menu_st')
//  this.stylediv.style.background='';
//  this.stylediv.style.color='black';
//  this.stylediv=document.getElementById('help_sec')
//  this.stylediv.style.background='';
//  this.stylediv.style.color='black'
//  this.bir_ins_div=document.getElementById('b_e_ins')
//  this.bir_ins_div.style.background='';
//  this.bir_ins_div.style.color='black'
//  this.eventdiv=document.getElementById('e_img')
//  this.eventdiv.style.background='';
//  this.eventdiv.style.color='black'
//  this.eventdiv=document.getElementById('c_email')
//  this.eventdiv.style.background='';
//  this.eventdiv.style.color='black'
//  this.eventdiv=document.getElementById('c_img')
//  this.eventdiv.style.background='';
//  this.eventdiv.style.color='black'

}
    else{
      console.log('else part');
      
    this.instructions=true;
    this.styling=true;
      this.pack=true;
    this.bir_ins=true
    this.eventimage=true
    this.show_conf_email=true;
    this.rest=true;

      this.promo=true;
  this.coverimage=true;

      this.mailbodydiv=true
      this.signhold=true;
      this.windowcl=true;
    // this.stockimage=true;
    this.defaultmenudiv=document.getElementById('defaultmenu');
    this.defaultmenudiv.style.background='';
    this.defaultmenudiv.className='';
    this.defaultmenudiv.style.color='black';
    this.defaultvenuediv=document.getElementById('defaultvenue');
  this.defaultvenuediv.className=''

    this.defaultvenuediv.style.background='';
    this.defaultvenuediv.style.color='black'
    this.PACK=document.getElementById('restaurants');
    this.PACK.style.background='#3F51B5';
    this.PACK.style.color='#fff';
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
    this.PACK.className=''

      this.PACK.style.background='';
      this.PACK.style.color='black';
    //   this.STOCKIMAGE=document.getElementById('stock')
    // this.STOCKIMAGE.className='active'
    //   this.STOCKIMAGE=document.getElementById('defaultstock')
    //  this.STOCKIMAGE.style.background='#3F51B5';
    //  this.STOCKIMAGE.style.color='white';
    //  this.insdiv=document.getElementById('ins')
    //  this.insdiv.style.background='';
    //  this.insdiv.style.color='black';
    //  this.stylediv=document.getElementById('menu_st')
    //  this.stylediv.style.background='';
    //  this.stylediv.style.color='black';
    //  this.stylediv=document.getElementById('help_sec')
    //  this.stylediv.style.background='';
    //  this.stylediv.style.color='black'
    //  this.bir_ins_div=document.getElementById('b_e_ins')
    //  this.bir_ins_div.style.background='';
    //  this.bir_ins_div.style.color='black'
    //  this.eventdiv=document.getElementById('e_img')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    //  this.eventdiv=document.getElementById('c_img')
    //  this.eventdiv.style.background='';
    //  this.eventdiv.style.color='black'
    }
  }
  fetchdata(){

    this.laguna.get_venue(this.r_id).subscribe(data=>{
      console.log(data);
      this.getVenues=data;
      if(this.getVenues.suc==1){
      this.putdata(this.getVenues.msg);}
      else{
        this.getVenues.length=0;
        this.putdata(this.getVenues);
      }
    })
  
  }
  fetchdata_menu(rid: any, id:any, vid:any){

    this.laguna.get_venue_menu(rid, id, vid).subscribe(data=>{
      console.log(data);
      this.getMenus=data;
      if(this.getMenus.suc == 1){
        this.putdata_menu(this.getMenus.msg);
      }
      else
      this.putdata_menu('');

    })
  
  }
  putdata_menu(v:any){
    console.log(v)
    this.dataSource_menu.paginator=this.MatPaginator2;
    this.dataSource_menu.sort=this.datasort2;
    this.dataSource_menu=new MatTableDataSource(v);
  }
  putdata(v:any){
    this.dataSource.paginator=this.MatPaginator1;
    this.dataSource.sort=this.datasort1;
    this.dataSource=new MatTableDataSource(v);
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
       "Serial_no":'Custom',
       "Special_Menu":this.set_value,
       "SetUp_Fee":v3,
       "Monthly_Fee":v4,
       "res_id":this.r_id
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
      "checked":'Y',
      "res_id":this.r_id,
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
      "checked":'Y',
      "res_id":this.r_id,
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
  opentabletop(v1:any,v2:any,v3:any){
    var dt={
      "res_id":this.r_id,
      "per_Holder_Price":v1,
       "serial_no":v2,
       "qty":v3
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
  openwallmount(v1:any,v2:any,v3:any){
    var dt={
      "res_id":this.r_id,
      "per_Holder_Price":v2,
       "serial_no":v1,
       "qty":v3
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
  showwall(v1:any,v2:any,v3:any){
    var dt={
      "res_id":this.r_id,
      "per_Holder_Price":v2,
       "serial_no":v1,
       "qty":v3
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
  showwindow(v1:any,v2:any,v3:any){
    var dt={
      "res_id":this.r_id,
      "per_Holder_Price":v2,
       "serial_no":v1,
       "qty":v3
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
get_sec_id_venue(id:any,desc:any){
  this.edit_id=id;
  this.create_venue=desc;
  this.show_add_update_button_for_venue=true
  // alert(this.edit_id+" "+this.create_venue)
  window.scrollTo(0, 0);

}
get_sec_id_menu(id:any,venue_id:any,desc:any){
  this.venue_name=venue_id;
  this.edit_menu_id=id;
  this.create_menu=desc;
  this.vid=venue_id;
  // alert(this.edit_menu_id+" "+this.create_menu)
  this.show_add_update_button_for_menu=true
  // alert(this.edit_id+" "+this.create_venue)
  window.scrollTo(0, 0);

}
addmenu(is_edit:any){
  // alert(this.venue_name)
  // alert(this.venue_name+" "+this.create_menu)
  var dt={
    "res_id":this.r_id,
    "venue_id":this.venue_name,
    "menu_name":this.create_menu,
    "user":"admin@gmail.com",
    "id":is_edit > 0 ? (this.edit_menu_id?this.edit_menu_id:0):0
  }
  this.laguna.submit_menu(dt).subscribe(data=>{console.log(data)
    this.show_add_update_button_for_menu=false;
    this.create_menu=''
    // this.venue_name=''
    // this.vid=''
    this.fetchdata_menu(this.r_id, 0, this.venue_name)
  })
}
updatemenu(is_edit:any){
  this.addmenu(is_edit)
}
addvenue(){
  var dt={
    "res_id":this.r_id,
    "venue_name":this.create_venue,
    "user":"admin@gmail.com",
    "id":this.edit_id?this.edit_id:0
  }
  this.laguna.submit_venue(dt).subscribe(data=>{console.log(data)
  this.venueData=data;
  this.create_venue=''
  this.show_add_update_button_for_venue=false

  this.fetchdata()
  })

}
updatevenue(){this.addvenue()}
getrow_id_venue(id:any){
   this.del_id_venue=id
}
delete_venue(){
  this.laguna.delete_venue(this.del_id_venue).subscribe(data=>{console.log(data)
    this.create_venue=''
  this.show_add_update_button_for_venue=false

    this.fetchdata()
  })
}
get_sec_id(id:any,desc:any){

}
check_empty(){
  if(this.create_menu==''){
    this.show_add_update_button_for_menu=false;
  }
}
check_empty_venue(){
  if(this.create_venue==''){
    this.show_add_update_button_for_venue=false;
  }
}
get_venue_name(id:any){
  this.venueid=id;
  this.getMenus.length=0;
  this.fetchdata_menu(this.r_id, 0, id);
  // alert(this.venueid)
  this.venue_name=id;
}
getrow_id_menu(id:any){
  this.del_menu_id=id;
  // this.venueid_del=v_id
}
delete_menu(){
  this.laguna.delete_venue_menu(this.del_menu_id).subscribe(data=>{console.log(data)
    this.show_add_update_button_for_menu=false;
    this.create_menu=''
    // this.venue_name=''
    // this.vid=''
    this.fetchdata_menu(this.r_id, 0, this.venueid);
  })
}
go_to_proposal(){
  this.router.navigate(['/payment',btoa(this.r_id + '/' + this.rest_em),0])
}
}
