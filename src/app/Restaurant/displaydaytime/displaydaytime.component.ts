import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydaytime',
  templateUrl: './displaydaytime.component.html',
  styleUrls: ['./displaydaytime.component.css']
})
export class DisplaydaytimeComponent implements OnInit {
   tab1:boolean=false;
   tab2:boolean=true;
   tab3:boolean=true;
   tab4:boolean=true;
   tab5:boolean=true;
constructor() { }

  ngOnInit(): void {
  }

  openCity(e:any){

  }
  clickon(e:any){
    if(e=='London'){
      console.log("LOndon");
      this.tab1=true;
      this.tab2=false;
      this.tab3=true;
      this.tab4=true;
      this.tab5=true;
    }
    else if(e=='Paris'){
      console.log("LOndon");
      this.tab1=true;
      this.tab2=true;
      this.tab3=false;
      this.tab4=true;
      this.tab5=true;
    }
    else if(e=='Tokyo'){
      console.log("Tokyo");
      this.tab1=true;
      this.tab2=true;
      this.tab3=true;
      this.tab4=false;
      this.tab5=true;
    }
    else if(e=='Laguna'){
      console.log("Laguna");
      this.tab1=true;
      this.tab2=true;
      this.tab3=true;
      this.tab4=true;
      this.tab5=false;
    }
  
}


}
