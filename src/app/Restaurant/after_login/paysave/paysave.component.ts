import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-paysave',
  templateUrl: './paysave.component.html',
  styleUrls: ['./paysave.component.css']
})
export class PaysaveComponent implements OnInit {

  constructor(private router:Router,private laguna:LagunaserviceService) { }

  ngOnInit(): void {
  }
  // go to login page when payment is successful
  go_to_login(){
     this.laguna.additional_payment(localStorage.getItem('Restaurant_id')).subscribe(data=>{
       console.log(data);
      this.router.navigate(['/']);    
     })
     
  }
}
