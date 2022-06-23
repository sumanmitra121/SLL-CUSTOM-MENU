import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { NgxSpinnerService } from "ngx-spinner";

export interface event{
  id:any;
  title: string;
  date: any;
  Time: any;
  headliner:any,
  tkt_url:any,
  description:any,
  imageUrl:any;
  allDay:boolean,
  event_title:any,
  backgroundColor:any
}
@Component({
  selector: 'app-user-cal-dtls',
  templateUrl: './user-cal-dtls.component.html',
  styleUrls: ['./user-cal-dtls.component.css']
})
export class UserCalDtlsComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private router:Router, private activatedRoute:ActivatedRoute,private admin_data:LagunaserviceService) { }
  event_id:any;
  calDetails:any;
  eventTitle:any;
  eventName:any;
  eventTime:any;
  eventDate:any;
  eventTKTURL:any;
  eventImg:any;
  eventDesc:any;
  dateDiv:any;
  aboutDiv:any;
  showDate=false;
  rid:any;
  u_type:any;
  gethelpText:any;
  event_img:any;
  template_spinner="<img height='200' width='400' style='margin-top: -40%;' src='/assets/images/calendarfetch.gif'>"
  // template_spinner=''
  bgspinner='rgba(0,0,0,1)'
  eventimageid:any
  Event:event[]=[
  
    // { title: 'event 1', start: '2021-09-22',end: '2021-09-30'},
    // { title: 'event 2', start: '2021-06-30',end:'2021-07-01' }
  ];
  ngOnInit(): void {
this.spinner.show()
    this.event_id=this.activatedRoute.snapshot.params['id'];
    this.rid=this.activatedRoute.snapshot.params['rid'];
    // alert(this.event_id)
// setTimeout(()=>{this.spinner.hide()},5000)
    this.admin_data.get_help_text().subscribe(data=>{console.log(data)
      this.gethelpText=data;
      this.gethelpText=this.gethelpText.msg;
     
      this.event_img=url_set.api_url+'/'+this.gethelpText[0].event_img
  
    })
    this.admin_data.get_cal_dtls(this.event_id).subscribe(data=>{console.log(data)
    this.calDetails=data;
    // setTimeout(()=>{
    this.calDetails=this.calDetails.msg;
    this.eventTitle=this.calDetails[0].event_title;
    this.eventName=this.calDetails[0].event_name;
    this.eventTime=this.calDetails[0].event_time;
    this.eventDate=this.calDetails[0].event_date.split('T')[0];
    this.eventTKTURL=this.calDetails[0].tkt_url;
    this.eventDesc=this.calDetails[0].description
    this.eventImg=this.calDetails[0].img_path!=''?url_set.api_url+'/'+this.calDetails[0].img_path:this.event_img
    this.u_type=this.calDetails[0].user_type;
    this.eventimageid=document.getElementById('eventimageID');
   
    this.eventimageid.onload=this.hide_spinner()
  //  this.spinner.hide()},5000)

  var img = new Image();
  img.src = this.eventImg;
  img.onload = () => {
    // console.log({valu: "this.valu = True  gail || gamail .com"});
    setTimeout(()=>{ this.spinner.hide(); },5000)
   
};
    
    })
    
    this.dateDiv=document.getElementById('defaultOpen_date');
    this.dateDiv.style.background='black';
    this.dateDiv.style.color='white';
    this.aboutDiv=document.getElementById('defaultOpen_about');
    this.aboutDiv.style.background='white'
    this.aboutDiv.style.color='black'
    this.showDate=false;
  }
  hide_spinner(){ //hide spinner
  
    this.spinner.hide()
    // console.log('alert')
  }
openCity(v1:any,v2:any){ //opening tabs for description and time 
  if(v2=='date'){
    this.dateDiv=document.getElementById('defaultOpen_date');
    this.dateDiv.style.background='black';
    this.dateDiv.style.color='white';
    this.aboutDiv=document.getElementById('defaultOpen_about');
    this.aboutDiv.style.background='white'
    this.aboutDiv.style.color='black'
    this.showDate=false;

  }
  else{
    this.dateDiv=document.getElementById('defaultOpen_date');
    this.dateDiv.style.background='white';
    this.dateDiv.style.color='black';
    this.aboutDiv=document.getElementById('defaultOpen_about');
    this.aboutDiv.style.background='black'
    this.aboutDiv.style.color='white'
    this.showDate=true
    
  }
 
}
go_to_user_cal(){ //going back to the calendar
//   if(this.u_type=='U')
//   this.router.navigate(['/user_calendar',this.rid,0])
//  else
//   this.router.navigate([''])
window.history.go(-1);
 }
}
