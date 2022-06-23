import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private admin_data:LagunaserviceService,private router:Router) { }
  logData:any;
  x:any;
  message=''
  ngOnInit(): void {
  }
  logSubmit(v:any){
    this.spinner.show()
    // this.confirm_modal.style.display='block';
    console.log(v);
    this.admin_data.submit_log(v).subscribe(data=>{
      console.log(data);
      this.logData=data;
     
      if(this.logData.suc>0) {
        this.spinner.hide();
        // alert('succesful,password has been changed.')
        localStorage.setItem('admin_rest_id',v.uname);
        this.router.navigate(['/adminhome'])

      }
      else{
        this.spinner.hide()
        this.message="Failed to log in. Please check your ID and Password"
        this.myFunction()
      }
    },error=>{
      this.spinner.hide()
      this.message="An error occurred"
      this.myFunction()})
  }
  myFunction() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    this.x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 5000);
  } 
}
