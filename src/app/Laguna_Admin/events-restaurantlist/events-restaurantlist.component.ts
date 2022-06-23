import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-events-restaurantlist',
  templateUrl: './events-restaurantlist.component.html',
  styleUrls: ['./events-restaurantlist.component.css']
})
export class EventsRestaurantlistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'restaurant_name', 'phone_no', 'contact_name','edit'];
  // dataSource = ELEMENT_DATA;
  userData:any;
  modeData:any;
  divid:any;
  flag:any;
  show_edit=false;
  setupmode:any;
  x:any;
  m='';
  dataSource= new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  constructor(private spinner: NgxSpinnerService,private admin_data:LagunaserviceService,private router:Router) { }
  show_spinner=false;
  ngOnInit(): void {
    this.spinner.show()
    this.fetchdata();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
  }
  myFunction() { //function to display snackbar
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  } 
  
  go_details(v:any){//on clicking the action button, the control is routed to the calendar of that restaurant
    // alert(v);
    this.router.navigate(['/eventcalendar',btoa(v)])
  }
  fetchdata(){  //fetching the records of the restaurant
    //Call APi
    this.admin_data.get_event_dashboard().subscribe(data=>{console.log(data)
    this.userData=data
    // this.show_spinner=true;
    this.spinner.hide();
     this.putdata(this.userData.msg)
    })
  }
  putdata(v:any){
    this.dataSource= new MatTableDataSource(v);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.matsort;
    for(let i=0;i<v.length;i++){
      console.log('setup'+(i+1));
      // this.divid=document.getElementById('setup'+(i+1));
      // console.log(this.divid)
      // this.divid.style.display='none'
  
    }
    
  }
  applyFilter(event: Event) { //input filter for searching in the datatable
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
click_setup(v:any,id:any){ //not needed
  console.log(id)
  this.setupmode=document.getElementById('setupmodeid'+id);
  console.log("checked:"+v.checked);
  this.divid=document.getElementById('setup'+id);
  if(v.checked)
  {this.flag='S'
  this.m='Setup Mode: On'}
  else
  {
  this.flag='U'
  this.m='Setup Mode: Off'}
  this.admin_data.get_approval(this.flag,id).subscribe(data=>{console.log(data)
  this.modeData=data;
  if(this.modeData.suc==1){
   
    this.fetchdata();
    this.myFunction()
  }
  else{
    this.m="Error! Cannot change support mode. Please try again later!"
    
    this.fetchdata()
    this.myFunction()

  }
  
  },error=>{
    this.m="Error! Cannot change support mode. Please try again later!"
    this.fetchdata()
    this.myFunction()

  })
   
}

}
