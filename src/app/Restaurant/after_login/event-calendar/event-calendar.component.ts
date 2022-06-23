import { Component, OnInit } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';

import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid';
// import dayGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { url_set } from 'src/app/globalvar';
import tippy from 'tippy.js';
import { ToastrManager } from 'ng6-toastr-notifications';

export interface event{
  id:any,
  title: string;
  date: any;
  Time: any;
  headliner:any,
  event_title:any,
  tkt_url:any,
  description:any,
  imageUrl:any;
  allDay:boolean,
  approval_flag:any
  backgroundColor:any
}
@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {
  img_hide:boolean=true;
  eventData:any=[];
  imageFile:any;
  crop_width:any;
  crop_height:any;
  openstockimages:any;
  img_cover:any;
  logo_file1:any;
  scale=1;
  transform: ImageTransform = {};
  showCropper = false;
  hide=false;
  valu = true;
  start_time:any;
  end_time:any;
  is_event:any;
  show_event_img=true
  Zoomout = true;
  spstockImg:any;
  ZoomIn = true;
  img_prop:any;
  modal = true;
  croppedImage:any ;
  Modal:any;
   el:any;
   moddo:any;
   logoname:any;
   img_file:any;
   img_cover1: any;
   modal_close_oncrop:any;
  mod:any;
  // moddo:any;
  title = 'myproject';
  start_date:any;
  inp:any
  event_name:any='';
  desc:any='';
  Url:any='';
  headliner:any='';
  today=new Date();
  hiddeneventid:any;
  m:any;
  fileDiv:any;
  time:any;
  RES_ID:any=localStorage.getItem('Restaurant_id');
  geteve:any=[];
  event_id:any;
  role:any=0;
  cal_flag:any;
  // Event:any=[]
  x:any;

  
  Event:event[]=[

    // { title: 'event 1', start: '2021-09-22',end: '2021-09-30'},
    // { title: 'event 2', start: '2021-06-30',end:'2021-07-01' }
  ];
  check_tab:any=1;
  image:boolean=true;
  calendarOptions!: CalendarOptions;
  constructor(public toastr: ToastrManager,private lagunaserve:LagunaserviceService) { 
    const name = Calendar.name;

  }

  ngOnInit(): void {   
  // fetching data in calendar
    this.lagunaserve.calender_dtls(this.RES_ID,this.check_tab, null).subscribe(data=>{
  // console.log(data);
  console.log(data);
  this.geteve=data;
  this.Event.length=0;
  for(let i=0;i<this.geteve.msg.length;i++){
    this.Event=this.Event.concat({
      id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,
             title:'',
             event_title:this.geteve.msg[i].event_name,
             date:this.geteve.msg[i].event_date,
             Time:this.geteve.msg[i].event_time,
             headliner:this.geteve.msg[i].event_title,
             tkt_url:this.geteve.msg[i].tkt_url,
             description:this.geteve.msg[i].description,
             imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
             allDay:true,
             approval_flag:this.geteve.msg[i].approval_flag,
             backgroundColor:this.geteve.msg[i].approval_flag=='N'?'#c768b7':'#188038',
        })
  }
})
 
    setInterval(()=>{
   this.calendarOptions= {
        weekends:true,
        eventDurationEditable:true,
        eventStartEditable:true,
        aspectRatio: 3.25,
        initialView: 'dayGridMonth',
        eventDisplay:'list-item',
        // displayEventTime:false,
        dayMaxEventRows: true, // for all non-TimeGrid views
  views: {
    dayGrid: {
      dayMaxEventRows: 1 // adjust to 6 only for dayGridWeek/dayGridDay
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
        eventDidMount: (info) => {
          tippy(info.el, {
           
             content: info.event._def.extendedProps.event_title+": "+info.event._def.extendedProps.description,
          })
       },
        dateClick: this.handleDateClick.bind(this),
        events:this.Event,
       
          height:500
    };
    
    },500)
  }
  // event triggered when an event is clicked
  eventclick(arg:any) {
    this.mod=document.getElementById('myfile');
    this.mod.value=''
    console.log(arg);
    this.mod=document.getElementById('modalbutton');
    this.mod.click();
    this.event_name=arg.event._def.extendedProps.event_title;
    console.log(this.event_name);
    this.start_date=arg.event.startStr.split("T")[0];
    console.log(this.start_date);
    console.log(arg.event.startStr);
    this.mod=document.getElementById('date');
    this.mod.value=arg.event.startStr.split("T")[0];
    this.headliner=arg.event._def.extendedProps.headliner;
    this.Url=arg.event._def.extendedProps.tkt_url;
    this.desc=arg.event._def.extendedProps.description;
     this.role=arg.event._def.extendedProps.description.length
     this.mod=document.getElementById('time');
     this.mod.value=arg.event._def.extendedProps.Time;
    this.time=arg.event._def.extendedProps.Time;
    this.cal_flag=arg.event._def.extendedProps.approval_flag;
    console.log(this.cal_flag)
    this.img_prop = document.getElementById('imgeve');
    console.log({img_prop: this.img_prop});
    if(this.img_prop){
      this.show_event_img=true
      this.img_prop.src=url_set.api_url+'/'+arg.event._def.extendedProps.imageUrl
    }    
    this.show_event_img=arg.event._def.extendedProps.imageUrl!=''?true:false
    // this.hiddeneventid=document.getElementById('eventid');
    // this.hiddeneventid.value=arg.event._def.publicId;
    this.event_id=arg.event._def.publicId;
 
   }
  //  event triggered when a date is clicked
   handleDateClick(arg:any) {
     console.log(this.check_tab);
     
     if(this.check_tab==0){

     }
     else{
   
    console.log(arg);
    this.is_event = document.getElementById('event');
    this.event_id= this.is_event.value != '' ? arg.event._def.publicId : 0;
  this.show_event_img=false
   this.start_date=arg.dateStr;
     this.role=0;
    this.mod=document.getElementById('modalbutton');
     this.mod.click();
        
    }
     
  }


   changedatetime(event:any){
     console.log(event.target.value);
     this.time=event.target.value;
   }
  //  resetting the modal when a date is clicked in order to add event
   resetall(){
    this.inp=document.getElementById('event');
    this.inp.value='';
    this.inp=document.getElementById('time');
    this.inp.value='';
   this.headliner=''
   this.Url='';
   this.desc='';
   this.event_name='';
  this.time='';
  if(this.img_prop)
  this.img_prop.src=''
  this.fileDiv=document.getElementById('myfile');
  this.fileDiv.value=null;
  this.show_event_img=true
   }
// add event 
   addevent(v2:any){
    this.start_date=this.start_date.split("T")[0];
    this.Event.length=0;
    console.log(this.event_name+" "+v2+ " "+this.start_date,this.Event+" "+this.headliner+" "+this.Url+" "+this.desc +""+this.img_file);
  var dt={
      "event_name":this.event_name,
      "event_date":this.start_date,
      "event_time":this.time,
      "event_title":this.headliner,
      "tkt_url":this.Url,
      "description":this.desc,
      "res_id":this.RES_ID,
      "user":"admin@gmail.com",
      "id":this.event_id,
      "user_type":this.check_tab > 0? 'R' : 'U',
      "approval_flag":this.cal_flag != '' && this.cal_flag != null && this.cal_flag != undefined ? this.cal_flag : 'Y'
    }
    console.log(this.imageFile);
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
            title:'',
            event_title:this.geteve.msg[i].event_name,
            date:this.geteve.msg[i].event_date,
            Time:this.geteve.msg[i].event_time,
            headliner:this.geteve.msg[i].event_title,
            tkt_url:this.geteve.msg[i].tkt_url,
            description:this.geteve.msg[i].description,
            imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
            allDay:true,
            approval_flag:this.geteve.msg[i].approval_flag,
              backgroundColor:this.geteve.msg[i].approval_flag=='N'?'#c768b7':'#188038',

             })
}
          this.calendarOptions= {
               weekends:true,
               eventDurationEditable:true,
               eventStartEditable:true,
               aspectRatio: 3.25,
               initialView: 'dayGridMonth',
               displayEventTime:false,
               dayMaxEventRows: true, // for all non-TimeGrid views
                eventDisplay:'list-item',
               
               views: {
                 dayGrid: {
                   dayMaxEventRows: 1 // adjust to 6 only for dayGridWeek/dayGridDay
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
           
              
               plugins: [ interactionPlugin, dayGridPlugin ],
           
               dateClick: this.handleDateClick.bind(this),
               events:[this.Event],
            
           
                 height:500
           };
      })      
    })

  
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
    this.Event.push({
      id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,
      title:'',
      event_title:this.geteve.msg[i].event_name,
      date:this.geteve.msg[i].event_date,
      Time:this.geteve.msg[i].event_time,
      headliner:this.geteve.msg[i].event_title,
      tkt_url:this.geteve.msg[i].tkt_url,
      description:this.geteve.msg[i].description,
      imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
      allDay:true,
      approval_flag:this.geteve.msg[i].approval_flag,
        backgroundColor:this.geteve.msg[i].approval_flag=='N'?'#c768b7':'#188038',

    
    })
  }
  // setInterval(()=>{
    this.calendarOptions= {
         weekends:true,
         eventDurationEditable:true,
         eventStartEditable:true,
         aspectRatio: 3.25,
         initialView: 'dayGridMonth',
         displayEventTime:false,
        eventDisplay:'list-item',

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
         dayMaxEventRows: true, // for all non-TimeGrid views
         views: {
         dayGrid: {
         dayMaxEventRows: 1 // adjust to 6 only for dayGridWeek/dayGridDay
         }
         }, 
        
         plugins: [ interactionPlugin, dayGridPlugin ],
     
         dateClick: this.handleDateClick.bind(this),
         events:this.Event,
           height:500,
          // eventBackgroundColor:this.Event[this.Event.length].backgroundColor

     };
    //  },500)
  
})
this.toastr.successToastr('Event Saved','',{position:'bottom-center',animate:'slideFromBottom'})

   }
  //  restricting the number of characters of description
   getdescription(event:any){
    this.role=event.target.value.length;
   }
 
 openstockmodal(){
    this.openstockimages=document.getElementById('id02');
    this.openstockimages.style.display='block'
  }
   //  open modal for cropping
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
// event triggered when the image to be cropped is loaded
imageLoaded() {
console.log("image loaded")
this.showCropper = true;
this.modal = false;
this.hide = false;
this.valu = false;
this.Zoomout = false;
this.ZoomIn = false;
}
// event triggered when the image is cropped
imageCropped(event: ImageCroppedEvent) {
console.log('imagecropped');
console.log("width:" + event.width);
console.log("height:" + event.height)
this.croppedImage = event.base64;
}
cropperReady(sourceImageDimensions: Dimensions) {
console.log('Cropper ready', sourceImageDimensions);
console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
}
loadImageFailed() {
console.log('Load failed');
}
// saving the cropped image
click_it(){
// this.cover_change=true;
  this.img_hide=false;
  this.valu = true;
  this.img_cover=this.croppedImage;
  // this.img_prop = document.getElementById('imgeve');
  // if(this.img_prop)
  // this.img_prop.src=this.img_cover
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
this.show_event_img=true;

  this.mod=document.getElementById('imgeve');
  console.log(this.mod);
  
  // this.mod.src=this.croppedImage;
  // this.dinnercoverimage=this.img_brunch_cover;
  // this.Brunch_cover_preview=false;
}
// closing the cropper
close_it(){
this.valu=true;
this.Modal=document.getElementById('myfile');
this.Modal.value=null;

}
close_modal_on_crop(){
this.modal_close_oncrop=document.getElementById('id01');
this.modal_close_oncrop.style.display='none';
// this.img_cover='';
// this.show_event_img=true;
}
// changing the image format
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
// fetch the calendar where events are added by the restaurant
getrestaurantcalendar(event:any,byname:any,val:any){
  this.Event.length=0;
  console.log({event:event.target.checked,ByName:byname,value:val});
  this.check_tab=val;
  console.log(this.check_tab);
  this.lagunaserve.calender_dtls(this.RES_ID,this.check_tab, null).subscribe(data=>{
    // console.log(data);
    console.log(data);
    this.geteve=data;
 
for(let i=0;i<this.geteve.msg.length;i++){
     console.log("EVENT");
     this.Event=this.Event.concat({
        id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,
               title:'',
               event_title:this.geteve.msg[i].event_name,
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
          
        }

setInterval(()=>{
          this.calendarOptions= {
               weekends:true,
               eventDurationEditable:true,
               eventStartEditable:true,
               aspectRatio: 3.25,
               initialView: 'dayGridMonth',
               dayMaxEventRows: true,
        eventDisplay:'list-item',

         views: {
           dayGrid: {
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

  })


  
}
// approve events added by the user
approve_event(){
  console.log(this.event_id);

  var dt={
    "id":this.event_id,
    "approval_flag":'Y',
    "user":localStorage.getItem('Restaurant_id')
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
             title:'',
             event_title:this.geteve.msg[i].event_name,
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
      }
    })
        setInterval(()=>{
       this.calendarOptions= {
            weekends:true,
            eventDurationEditable:true,
            eventStartEditable:true,
            aspectRatio: 3.25,
            initialView: 'dayGridMonth',
            displayEventTime:false,
        eventDisplay:'list-item',

            dayMaxEventRows: true, // for all non-TimeGrid views
views: {
dayGrid: {
dayMaxEventRows: 1 // adjust to 6 only for dayGridWeek/dayGridDay
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
            plugins: [ interactionPlugin, dayGridPlugin ],
        
            dateClick: this.handleDateClick.bind(this),
            events:this.Event,
            height:500,
          
        };
        },500)
      
    this.m="Event approved";
    this.toastr.successToastr(this.m,'',{position:'bottom-center',animate:'slideFromBottom'})

    this.myFunction()
    
  }
  else{
    this.m="Error while approving";
    this.toastr.errorToastr(this.m,'',{position:'bottom-center',animate:'slideFromBottom'})

    this.myFunction()
  }
  },error=>{
    this.m="Error while approving";
    this.toastr.errorToastr(this.m,'',{position:'bottom-center',animate:'slideFromBottom'})

    this.myFunction()
  })
}
// show snackbar
myFunction(){
  this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
}

}



