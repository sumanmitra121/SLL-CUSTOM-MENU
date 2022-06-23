import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  constructor(private _data:DataserviceService) { }
  email_data:any
  invalid_data=true;
  show_msg=false;
  ngOnInit(): void {
  }
  // function to send the data for retrieval of password
  send_email(v:any){
    console.log(v)
  }
  // function to check whether the email exists, if it doesn't the flow won't work
  check_mail(e:any){
    console.log(e.target.value);
    if(e.target.value!=''){
    this._data.check_existing_email(e.target.value).subscribe(data=>{console.log(data)
    this.email_data=data;
    if(this.email_data.suc==1)
   { this.invalid_data=true; this.show_msg=true;}
    else if(this.email_data.suc==2)
   {  this.invalid_data=false; this.show_msg=false;}
    else
    {}
    
    })
  }
  else
  {
    this.show_msg=false;
  }
}
}
