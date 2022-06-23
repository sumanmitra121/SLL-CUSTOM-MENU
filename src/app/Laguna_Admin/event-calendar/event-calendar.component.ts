import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Calendar, CalendarOptions } from '@fullcalendar/core';

import interactionPlugin, { ThirdPartyDraggable } from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';//For Image Cropper
import { url_set } from 'src/app/globalvar';
import listPlugin from '@fullcalendar/list';
import { rendererTypeName } from '@angular/compiler';
import tippy from 'tippy.js';
import 'tippy.js/animations/scale.css';
export interface event{
  id:any,
  title: string;
  date: any;
  Time: any;
  headliner:any,
  tkt_url:any,
  description:any,
  imageUrl:any;
  approval_flag:any;
  allDay:boolean,
  event_title:any;
  backgroundColor:any
}
@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventcalendarComponent implements OnInit {
  cal_flag:any;
  det:any;
  mod:any;
  show_rest=true;
  eventData:any;
  hiddeneventid:any;
  event_id:any;
  fileDiv:any;
  transform: ImageTransform = {};
 showCropper = false;
 hide=false;
 x:any;
 valu = true;
 start_time:any;
 end_time:any;
 show_event_img=true
 Zoomout = true;
 spstockImg:any;
 ZoomIn = true;
 modal = true;
 croppedImage:any ;
 Modal:any;
  el:any;
  moddo:any;
  logoname:any;
  img_file:any;
  img_cover1: any;
  title = 'myproject';
  start_date:any;
  // img_file:any;
  event_img:any;
  inp:any
  event_name:any='';
  desc:any='';
  Url:any='';
  img_prop:any;
  headliner:any='';
  today=new Date();
  time:any;
  crop_height:any;
  img_cover:any;
  imageFile: any;
 scale = 1;

  logo_file1:any;
  crop_width:any;
  RES_ID:any=localStorage.getItem('Restaurant_id');
  geteve:any=[];
  // Event:any=[]
  Event:event[]=[]
  openstockimages:any;
  restdiv:any;
  check_tab:any=1;
  m:any;
    // { title: 'event 1', start: '2021-09-22',end: '2021-09-30'},
    // { title: 'event 2', start: '2021-06-30',end:'2021-07-01' }
  
  calendarOptions!: CalendarOptions;
  modal_close_oncrop: any;
  is_event:any;
  constructor(private spinner: NgxSpinnerService,private router: Router,private activatedRoute: ActivatedRoute,private lagunaserve:LagunaserviceService) {
    const name = Calendar.name;

  }

  ngOnInit(): void {
    this.RES_ID = this.activatedRoute.snapshot.params['id'];
    this.RES_ID = atob(this.RES_ID);
    
    // console.log(Event)
  //  console.log("hello");

  // fetch events in the calendar
    this.lagunaserve.calender_dtls(this.RES_ID,this.check_tab, null).subscribe(data=>{
      // console.log(data);
      console.log(data);
      this.geteve=data;
      this.Event.length=0;
      for(let i=0;i<this.geteve.msg.length;i++){
       this.Event= this.Event.concat({
            id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,
            event_title:this.geteve.msg[i].event_name,
            title:'',
             date:this.geteve.msg[i].event_date,
             Time:this.geteve.msg[i].event_time,
             headliner:this.geteve.msg[i].event_title,
             tkt_url:this.geteve.msg[i].tkt_url,
             description:this.geteve.msg[i].description,
             imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
             approval_flag:this.geteve.msg[i].approval_flag,
             allDay:true,
             backgroundColor:this.geteve.msg[i].approval_flag=='N'?'#c768b7':'#188038',
           })
      }
    })
        setInterval(()=>{
       this.calendarOptions= {
            weekends:true,
            // eventBackgroundColor:'red',
            eventDurationEditable:true,
            eventStartEditable:true,
            aspectRatio: 3.25,
            initialView: 'dayGridMonth',
            displayEventTime:false,
            eventDisplay:'list-item',
            dayMaxEventRows: true, // for all non-TimeGrid views
views: {
timeGrid: {
dayMaxEventRows: 0 // adjust to 6 only for timeGridWeek/timeGridDay
}
},
            validRange: {
              start: this.today,
            },
            headerToolbar: {
              start: 'prev,next today',
              center: 'title',
              end: 'dayGridMonth,dayGridWeek,dayGridDay'
            },
        
            eventClick:this.eventclick.bind(this),
            droppable:false,
            selectable: true,
            navLinks:true,
            editable: false,
        
            nextDayThreshold: '00:00:00',
            plugins: [ listPlugin,interactionPlugin, dayGridPlugin ],
          
            dateClick: this.handleDateClick.bind(this),
            // eventMouseEnter:this.showEvent.bind(this),
            // eventMouseLeave:this.hideEvent.bind(this),
            eventDidMount: (info) => {
              tippy(info.el, {
               
                 content: info.event._def.extendedProps.event_title+": "+info.event._def.extendedProps.description,
              })
           },
            events:this.Event,
            height:500
        };
        },500)
      }

      // fetching data on an event click
      eventclick(arg:any) {
        console.log(arg);
        this.mod=document.getElementById('modalbutton');
        this.mod.click();
        this.event_name=arg.event._def.extendedProps.event_title;
        console.log(this.event_name);
        this.start_date=arg.event.startStr;
        this.mod=document.getElementById('date');
        this.mod.value=arg.event.startStr;
        console.log(arg.event.startStr);
        this.headliner=arg.event._def.extendedProps.headliner;
        this.Url=arg.event._def.extendedProps.tkt_url;
        this.desc=arg.event._def.extendedProps.description;
         this.mod=document.getElementById('time');
         this.mod.value=arg.event._def.extendedProps.Time;
        this.time=arg.event._def.extendedProps.Time;
        this.img_prop = document.getElementById('imgeve');
        console.log({img_prop: this.img_prop});
        if(this.img_prop){
          this.show_event_img=true
          this.img_prop.src=url_set.api_url+'/'+arg.event._def.extendedProps.imageUrl
        }    
        this.show_event_img=arg.event._def.extendedProps.imageUrl!=''?true:false
        this.hiddeneventid=document.getElementById('eventid');
        this.hiddeneventid.value=arg.event._def.publicId;
        this.event_id=arg.event._def.publicId;
        this.cal_flag=arg.event._def.extendedProps.approval_flag;
        // this.show_event_img=arg.event._def.extendedProps.imageUrl? true : false
        // console.log(this.img_prop.src+" "+this.event_id);
        
       }
      //  event triggered on clicking on the date and adding event
       handleDateClick(arg:any) {
        if(this.check_tab!=0){
         this.is_event = document.getElementById('event');
        this.event_id= this.is_event.value != '' ? arg.event._def.publicId : 0;
      this.show_event_img=false
//       if(arg._def==undefined||arg._def==null)
// this.show_event_img=false
         this.start_date=arg.dateStr;
        this.mod=document.getElementById('modalbutton');
         this.mod.click();
        }
         
      }
      // showing the event in a modal
    showEvent(arg:any){
      // alert(arg.event._def.extendedProps.event_title)
      this.event_name=arg.event._def.extendedProps.event_title;

      this.det=document.getElementById('ev_dt');
      // this.det.style.display('block');
      this.det.click();

    }
    hideEvent(arg:any){
      // alert(arg.event._def.extendedProps.event_title)
      this.det=document.getElementById('ev_dt');
      // this.det.click();


    }
    
    
    
       changedatetime(event:any){
         console.log(event.target.value);
         this.time=event.target.value;
       }
    
       reloadCurrentRoute() {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
    }
    // resetting the
    clear_all(){
      this.inp=document.getElementById('event');
      this.inp.value='';
      this.fileDiv=document.getElementById('myfile');
      this.fileDiv.value=null
      this.inp=document.getElementById('time');
      this.inp.value='';
     this.headliner=''
     this.Url='';
     this.desc='';
     this.event_name='';
     if(this.img_prop)
     this.img_prop.src=''
     this.show_event_img=true
    }
    // not needed
    openstockmodal(){
      this.openstockimages=document.getElementById('id02');
      this.openstockimages.style.display='block'
    }
    // not needed
    open_crop_modal(){
      this.el=document.getElementById('id01');
      this.el.style.display='block'
    
    }
    // uploading event image
    upload_logo(e:any){
      // this.cropround=true;
      this.crop_width=1800;
      this.crop_height=2560;
      console.log(this.crop_width+" "+this.crop_height)
    
      // console.log(this.cropround)
      console.log(e.target.files[0])
      this.logoname=e.target.files[0].name;
      this.img_file=e.target.files[0];
      this.img_cover=e;
      this.logo_file1=document.getElementById('logo_crop');
      this.logo_file1.click();
      console.log("hello")
    }
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
// triggered when image is loaded
imageLoaded() {
  console.log("image loaded")
  this.showCropper = true;
  this.modal = false;
  this.hide = false;
  this.valu = false;
  this.Zoomout = false;
  this.ZoomIn = false;
}
// triggered when image is cropped
imageCropped(event: ImageCroppedEvent) {
  console.log('imagecropped');
  this.show_event_img=true
  // event.width=this.crop_width;
  // event.width=this.crop_height;
  console.log("width:" + event.width);
  console.log("height:" + event.height)
  this.croppedImage = event.base64;
  // if(this.show_tab=='tab4')
  // this.preview_for_section=this.croppedImage
  // console.log(this.croppedImage);
}

cropperReady(sourceImageDimensions: Dimensions) {
 console.log('Cropper ready', sourceImageDimensions);
  console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
}
loadImageFailed() {
  console.log('Load failed');
}
// when the cropped image is saved
click_it(){
  // this.cover_change=true;
    this.valu = true;
    this.img_cover=this.croppedImage;
    console.log("Cropped Image:" +this.croppedImage);
    // this.Breakfast_cover_preview=false;
    this.el.style.display='none'
    const base64 = this.croppedImage;
    const imageName = this.logoname
    const imageBlob = this.dataURItoBlob(base64);
    this.imageFile = new File([imageBlob], imageName, { type: 'image/png' });
    // console.log({imageFile, imageBlob});
    this.img_cover=this.imageFile;
    // this.img_cover1=imageFile;

    const reader=new FileReader();
    reader.onload = () => {
      this.img_cover = reader.result as string;

    }
    reader.readAsDataURL(this.img_cover)
    this.img_cover=this.croppedImage;
    // this.dinnercoverimage=this.img_brunch_cover;
    // this.Brunch_cover_preview=false;
}
// when the modal is closed
close_it(){
  this.valu=true;
  this.Modal=document.getElementById('myfile');
  this.Modal.value=null;

}
close_modal_on_crop(){
  this.modal_close_oncrop=document.getElementById('id01');
  this.modal_close_oncrop.style.display='none'
}
// formatting the data
dataURItoBlob(dataURI:any) {
  var byteString = atob(dataURI.toString().split(',')[1]);

      
      const array=[];
   
        for (var i = 0; i < byteString.length; i++) {
      
            array.push(byteString.charCodeAt(i));
        }
        
        return new Blob([new Uint8Array(array)],
        {
          type:'image/png'
        },
        );
}
// adding the event
addevent(v2:any){
  this.spinner.show()
  this.start_date=this.start_date.split("T")[0];
  this.Event.length=0;
  console.log(this.event_name+" "+v2+ " "+this.start_date,this.Event+" "+this.headliner+" "+this.Url+" "+this.desc );
  
  var dt={
    "event_name":this.event_name,
    "event_date":this.start_date,
    "event_time":this.time,
    "event_title":this.headliner,
    "tkt_url":this.Url,
    "description":this.desc,
    "res_id":this.RES_ID,
    "user":"admin@gmail.com",
    "id": this.event_id,
    "user_type":this.check_tab > 0 ? 'A' : 'U',
    "approval_flag":this.cal_flag != '' && this.cal_flag != undefined && this.cal_flag != null ? this.cal_flag : 'Y'
    
  }
  console.log({cov: this.imageFile});
  
  this.lagunaserve.post_calender_dtls(dt,this.imageFile).subscribe(data=>{
    console.log(data);   
    this.lagunaserve.calender_dtls(this.RES_ID,this.check_tab, null).subscribe(data=>{
      // console.log(data);
      console.log(data);
      this.geteve=data;
      console.log(this.geteve.msg)
      this.Event.length=0;
      for(let i=0;i<this.geteve.msg.length;i++){
        console.log(this.geteve.msg[i].event_name)
        this.Event=this.Event.concat({
          id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,

          event_title:this.geteve.msg[i].event_name,
          title:'',
             date:this.geteve.msg[i].event_date,
             Time:this.geteve.msg[i].event_time,
             headliner:this.geteve.msg[i].event_title,
             tkt_url:this.geteve.msg[i].tkt_url,
             description:this.geteve.msg[i].description,
             imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',

             approval_flag:this.geteve.msg[i].approval_flag,
             backgroundColor:this.geteve.msg[i].approval_flag=='N'?'#c768b7':'#188038',
             allDay:true
           })
           console.log(this.Event[i])
        // this.Event[i].title=this.geteve.msg[i].event_name;
        // this.Event[i].date=this.geteve.msg[i].event_date;
        // this.Event[i].Time=this.geteve.msg[i].event_time;
        // this.Event[i].headliner=this.geteve.msg[i].event_title;
        // this.Event[i].tkt_url=this.geteve.msg[i].tkt_url;
        // this.Event[i].description=this.geteve.msg[i].description

}
// this.router.navigate(['/eventcalendar',btoa(this.RES_ID)])

    
        this.calendarOptions= {
             weekends:true,
             eventDurationEditable:true,
             eventBackgroundColor:'red',
             eventStartEditable:true,
             aspectRatio: 3.25,
             eventDisplay:'list-item',
             initialView: 'dayGridMonth',
             displayEventTime:false,
             dayMaxEventRows: true, // for all non-TimeGrid views
views: {
timeGrid: {
dayMaxEventRows: 0 // adjust to 6 only for timeGridWeek/timeGridDay
}
},
             validRange: {
               start: this.today,
             },
             headerToolbar: {
               start: 'prev,next today',
               center: 'title',
               end: 'dayGridMonth,dayGridWeek,dayGridDay'
             },
         
             eventClick:this.eventclick.bind(this),
             droppable:true,
             selectable: true,
             navLinks:true,
             editable: true,
         
            //  nextDayThreshold: '00:00:00',
             plugins: [ listPlugin,interactionPlugin, dayGridPlugin ],
         
             dateClick: this.handleDateClick.bind(this),
             events:this.Event,
             height:500
         };
       
         console.log(this.Event)
// this.reloadCurrentRoute()

    })
 })
 this.spinner.hide()
 this.inp=document.getElementById('event');
 this.inp.value='';

 this.inp=document.getElementById('time');
 this.inp.value='';
this.headliner=''
this.Url='';
this.desc='';
this.event_name='';
this.lagunaserve.calender_dtls(this.RES_ID,this.check_tab, null).subscribe(data=>{
  console.log(data);
  this.geteve=data;

  for(let i=0;i<this.geteve.msg.length;i++){
    this.Event=this.Event.concat({
      id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,
      event_title:this.geteve.msg[i].event_name,
      title:'',
        
         date:this.geteve.msg[i].event_date,
         Time:this.geteve.msg[i].event_time,
         headliner:this.geteve.msg[i].event_title,
         tkt_url:this.geteve.msg[i].tkt_url,
         description:this.geteve.msg[i].description,
         imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
         backgroundColor:this.geteve.msg[i].approval_flag=='N'?'#c768b7':'#188038',
         approval_flag:this.geteve.msg[i].approval_flag,

         allDay:true
       })
  }
 
    this.calendarOptions= {
         weekends:true,
         eventDurationEditable:true,
         eventStartEditable:true,
         eventBackgroundColor:'red',
         aspectRatio: 3.25,
         initialView: 'dayGridMonth',
         eventDisplay:'list-item',
         displayEventTime:false,
         dayMaxEventRows: true, // for all non-TimeGrid views
views: {
timeGrid: {
dayMaxEventRows: 0 // adjust to 6 only for timeGridWeek/timeGridDay
}
},
         validRange: {
           start: this.today,
         },
         headerToolbar: {
           start: 'prev,next today',
           center: 'title',
           end: 'dayGridMonth,dayGridWeek,dayGridDay'
         },
     
         eventClick:this.eventclick.bind(this),
         droppable:true,
         selectable: true,
         navLinks:true,
         editable: true,
     
        //  nextDayThreshold: '00:00:00',
         plugins: [listPlugin, interactionPlugin, dayGridPlugin ],
     
         dateClick: this.handleDateClick.bind(this),
         events:this.Event,
         height:500
     };
     
  
})
console.log(this.Event,this.calendarOptions);
// this.reloadCurrentRoute()

 }
 change_ref(){
  this.restdiv=document.getElementById('rest');
   if(this.restdiv.checked)
     this.show_rest=true;
  else
     this.show_rest=false;
}
//get the events of calendar done by user
getrestaurantcalendar(event:any,byname:any,val:any){
  console.log({event:event.target.checked,ByName:byname,value:val});
  this.Event.length=0;
  this.check_tab=val;
  console.log(this.check_tab);
  this.lagunaserve.calender_dtls(this.RES_ID,this.check_tab, null).subscribe(data=>{
    // console.log(data);
    console.log(data);
    this.geteve=data;
    this.Event.length=0;
    for(let i=0;i<this.geteve.msg.length;i++){
      this.Event=this.Event.concat({
        id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,
        event_title:this.geteve.msg[i].event_name,
            title:'',
            backgroundColor:this.geteve.msg[i].approval_flag=='N'?'#c768b7':'#188038',
               date:this.geteve.msg[i].event_date,
               Time:this.geteve.msg[i].event_time,
               headliner:this.geteve.msg[i].event_title,
               tkt_url:this.geteve.msg[i].tkt_url,
               description:this.geteve.msg[i].description,
               imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
             approval_flag:this.geteve.msg[i].approval_flag,

               allDay:true
         })
    }
  })
  setInterval(()=>{
    this.calendarOptions= {
         weekends:true,
         eventDurationEditable:true,
         eventStartEditable:true,
         aspectRatio: 3.25,
         eventDisplay:'list-item',
         initialView: 'dayGridMonth',
         dayMaxEventRows: true, 
   views: {
     timeGrid: {
       dayMaxEventRows: 1 
     }
   },
         validRange: {
           start: this.today,
         },
         headerToolbar: {
           start: 'prev,next today',
           center: 'title',
           end: 'dayGridMonth,dayGridWeek,dayGridDay'
         },
         displayEventTime:false,
         eventClick:this.eventclick.bind(this),
         droppable:true,
         selectable: true,
         navLinks:true,
         editable: false,
       
  
         
         plugins: [ interactionPlugin, dayGridPlugin ],
     
         dateClick: this.handleDateClick.bind(this),
         events:this.Event,
         
           height:500
     };
     },500)
}
// approving events added by user
approve_event(){
  var dt={
    "id":this.event_id,
    "approval_flag":'Y',
    "user":"admin@gmail.com"
  }
  this.lagunaserve.approve_calendar(dt).subscribe(data=>{console.log(data);
  this.eventData=data;
  if(this.eventData.suc==1)
  {
    this.lagunaserve.calender_dtls(this.RES_ID,this.check_tab, null).subscribe(data=>{
      // console.log(data);
      console.log(data);
      this.geteve=data;
      this.Event.length=0;
      for(let i=0;i<this.geteve.msg.length;i++){
       this.Event= this.Event.concat({
            id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,
            event_title:this.geteve.msg[i].event_name,
            title:'',
             date:this.geteve.msg[i].event_date,
             Time:this.geteve.msg[i].event_time,
             headliner:this.geteve.msg[i].event_title,
             tkt_url:this.geteve.msg[i].tkt_url,
             description:this.geteve.msg[i].description,
             imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
             approval_flag:this.geteve.msg[i].approval_flag,
             allDay:true,
             backgroundColor:this.geteve.msg[i].approval_flag=='N'?'#c768b7':'#188038',
           })
      }
    })
        setInterval(()=>{
       this.calendarOptions= {
            weekends:true,
            eventDurationEditable:true,
            // eventBackgroundColor:this.cal_flag:'N'? 'red':'blue',
            eventDisplay:'list-item',
            eventStartEditable:true,
            aspectRatio: 3.25,
            initialView: 'dayGridMonth',
            displayEventTime:false,
            dayMaxEventRows: true, // for all non-TimeGrid views
views: {
timeGrid: {
dayMaxEventRows: 0 // adjust to 6 only for timeGridWeek/timeGridDay
}
},
            validRange: {
              start: this.today,
            },
            headerToolbar: {
              start: 'prev,next today',
              center: 'title',
              end: 'dayGridMonth,dayGridWeek,dayGridDay'
            },
        
            eventClick:this.eventclick.bind(this),
            droppable:true,
            selectable: true,
            navLinks:true,
            editable: false,
        
            nextDayThreshold: '00:00:00',
            plugins: [ listPlugin,interactionPlugin, dayGridPlugin ],
        
            dateClick: this.handleDateClick.bind(this),
            events:this.Event,
            height:500
        };
        },500)
      
    this.m="Event approved";
    this.myFunction()
    
  }
  else{
    this.m="Error while approving";
    this.myFunction()
  }
  },error=>{
    this.m="Error while approving";
    this.myFunction()
  })
}
// function to display snackbar
myFunction() {
  this.x = document.getElementById("snackbar");
  this.x.className = "show";
  setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
}
}
