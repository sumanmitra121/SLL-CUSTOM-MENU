import { Component, OnInit } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import tippy from 'tippy.js';
import { url_set } from 'src/app/globalvar';

export interface event{
  id:any,
  title: string;
  date: any;
  Time: any;
  headliner:any,
  tkt_url:any,
  description:any,
  imageUrl:any;
  allDay:boolean,
  event_title:any,
  backgroundColor:any,
  approval_flag: any
}
@Component({
  selector: 'app-user-calendar',
  templateUrl: './user-calendar.component.html',
  styleUrls: ['./user-calendar.component.css',
  '../../../assets/dynemicmenu/css/font-awesome.css',
  '../../../assets/dynemicmenu/css/apps.css',
  '../../../assets/dynemicmenu/css/apps_inner.css',
  '../../../assets/dynemicmenu/css/res.css',
]
})
export class UserCalendarComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService, private activatedRoute:ActivatedRoute, private router:Router, private admin_data:LagunaserviceService) { }
  calendarOptions!: CalendarOptions;
  geteve:any=[];
  gethelpText:any;
  event_img1:any;
  url1=url_set.api_url;
  ev_dt:any;
  geteve1:any=[];
  today=new Date();
  hiddeneventid:any;
  resid:any;
  flag:any;
  olddt:any=1;
  openevent:any;
  template_spinner="<img height='200' width='400' style='margin-top: -30%;' src='/assets/images/openingcalendar.gif'>"
  // template_spinner=''
  l:any;
  ev_dt1:any;
  cal_flag=0;
  bgspinner='rgb(206,72,44)'
  Event1:event[]=[];
  Event:event[]=[
  
    // { title: 'event 1', start: '2021-09-22',end: '2021-09-30'},
    // { title: 'event 2', start: '2021-06-30',end:'2021-07-01' }
  ];
  ngOnInit(): void {
    this.resid=this.activatedRoute.snapshot.params['rid'],
    this.flag=this.activatedRoute.snapshot.params['flag']
    this.spinner.show();
    this.admin_data.calender_dtls(this.resid,this.flag, null).subscribe(data=>{
      // console.log(data);
      console.log(data);
      this.geteve=data;
      for(let i=0;i<this.geteve.msg.length;i++){
        if (this.geteve.msg[i].approval_flag == 'Y') {
          if(this.olddt!=this.geteve.msg[i].event_date){
       this.Event= this.Event.concat({
        id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,
             event_title:this.geteve.msg[i].event_name,
             title:'',
             date:this.geteve.msg[i].event_date,
             Time:this.geteve.msg[i].event_time,
             headliner:this.geteve.msg[i].event_title,
             tkt_url:this.geteve.msg[i].tkt_url,
             description:this.geteve.msg[i].description,
             approval_flag: this.geteve.msg[i].approval_flag,
             imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
             backgroundColor:'#5F9EA0',
             allDay:true
           })
           this.olddt=this.geteve.msg[i].event_date

          }
        }
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
            timeGrid: {
            dayMaxEventRows: 2// adjust to 6 only for timeGridWeek/timeGridDay
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
        
            // nextDayThreshold: '00:00:00',
            plugins: [ interactionPlugin, dayGridPlugin ],
            eventDidMount: (info) => {
              // tippy(info.el, {
               
              //    content: info.event._def.extendedProps.event_title+": "+info.event._def.extendedProps.description,
              // })
           },
            dateClick: this.opendate.bind(this),
            events:this.Event,
            height:700
        };
        },500)
    setInterval(()=>{
      this.spinner.hide()
    },3000)
    
  }
  eventclick(id:any) {
    this.hiddeneventid=id;
    // alert(this.hiddeneventid)
    this.router.navigate(['/user_cal_dtls',this.hiddeneventid,this.resid])

   
    
   }
   handleDateClick(arg:any) {
  
    // console.log('date click! ' +arg);
    //  this.start_date=arg.dateStr;
    // this.mod=document.getElementById('modalbutton');
    //  this.mod.click();
    
     
  }
  opendate(arg:any){
    this.admin_data.get_help_text().subscribe(data=>{console.log(data)
      this.gethelpText=data;
      this.gethelpText=this.gethelpText.msg;
     
      this.event_img1=this.gethelpText[0].event_img
      console.log(this.event_img1)
    })
    this.ev_dt=arg.dateStr;
    // alert(Number(this.ev_dt.split('-')[2])-1)
    this.admin_data.calender_dtls(this.resid,this.cal_flag, this.ev_dt).subscribe(data=>{
      console.log(data);
  // this.Event.length=0;
  this.Event1.length=0
      // this.spinner.hide()
      this.l=Number(this.ev_dt.split('-')[2])-1
     this.ev_dt1=this.ev_dt.replace(this.ev_dt.split('-')[2],this.l.toString())
      console.log(data);
      this.geteve1=data;
      for(let i=0;i<this.geteve1.msg.length;i++){
       
    
        // alert("hello")
        // alert((this.geteve.msg[i].event_date).split('T')[0])
        this.Event1= this.Event1.concat({
          id:this.geteve1.msg[i].id>0?this.geteve1.msg[i].id:0,
               event_title:this.geteve1.msg[i].event_name,
               title:'',
               date:this.geteve1.msg[i].event_date,
               Time:this.geteve1.msg[i].event_time,
               headliner:this.geteve1.msg[i].event_title,
               tkt_url:this.geteve1.msg[i].tkt_url,
               description:this.geteve1.msg[i].description,
               approval_flag: this.geteve1.msg[i].approval_flag,
               imageUrl:this.geteve1.msg[i].img_path ? this.geteve1.msg[i].img_path : this.event_img1,
               backgroundColor:'#188038',
               allDay:true
             })
          console.log(this.Event1)
         
      }
    })
    this.open_ev_dtls()
  }
  back_click(){
    window.history.go(-1);
  }
  open_ev_dtls(){
    this.openevent=document.getElementById('ev_dtls_modal');
    this.openevent.style.display='block'
  }
  close_ev_dtls(){
    this.openevent=document.getElementById('ev_dtls_modal');
    this.openevent.style.display='none'
  }
  go_to_user_cal(){
    this.router.navigate(['/laguna_fun',this.resid])
   //  this.router.navigate(['/user_calendar',this.rid,0])
   
   }
  //  eventclick(id:any) {
  //   // alert("hello")
  //   this.hiddeneventid=id;
  //   // this.router.navigate(['/user_calendar',this.rid,1])
  //   this.router.navigate(['/user_cal_dtls',this.hiddeneventid,this.rid])
  
   
  //  }
}
