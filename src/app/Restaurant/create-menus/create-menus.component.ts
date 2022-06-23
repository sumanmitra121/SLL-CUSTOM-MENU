import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { log } from 'console';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-create-menus',
  templateUrl: './create-menus.component.html',
  styleUrls: ['./create-menus.component.css']
})
export class CreateMenusComponent implements OnInit {
  res_name:any=localStorage.getItem('Restaurant_name');
  displayedColumns: string[] = ['id', 'Menu_name', 'Option'];
  dataSource=new  MatTableDataSource();
  create_menu:any='';
  Menu_id:any;
  get_unlimited:any=[];
  x:any;
  show_create_menu_only:boolean=true;
  row_id:any;
  check:any=[];
  show_add_update_button:boolean=false;
  constructor(private lagunaserve:LagunaserviceService) { 
    
  }
  ngOnInit(): void {
    this.fetchdata();
    this.lagunaserve.checkactivity(localStorage.getItem('Restaurant_id')).subscribe(data=>{console.log(data);
    this.check=data;
    if(this.check.msg[0].approval_flag=='U'){
      // this.show_toast=true;
      this.show_create_menu_only=true;
      // this.create_menu='';
    }
    else{
      this.show_create_menu_only=false;
    }
  })
  }
// fetching the datatable
fetchdata(){

  this.lagunaserve.get_createmenu(localStorage.getItem('Restaurant_id')).subscribe(data=>{
    console.log(data);
    this.get_unlimited=data;
    this.putdata(this.get_unlimited.msg);
  })

}

putdata(v:any){
  this.dataSource=new MatTableDataSource(v);
}
// adding menus, a maximum of 6
  addmenu(){
    this.lagunaserve.get_createmenu(localStorage.getItem('Restaurant_id')).subscribe(data=>{
      console.log(data);
      this.get_unlimited=data;
       if(this.get_unlimited.msg.length<6){
         
        var dt={
          "res_id":localStorage.getItem('Restaurant_id'),
          "menu_name":this.create_menu,
          "user":localStorage.getItem('Restaurant_id'),
          "id":0
        }
        this.lagunaserve.post_createmenu(dt).subscribe(data=>{
          console.log(data);
          this.myFunction_submit();
          // this.show_add_update_button=true;
          this.create_menu='';
          this.fetchdata();
        })
       }
       else{
              this.myFunction();
       }
    })
 

  }
// check whether the input text is empty, if yes, disable the button
  check_empty(){
    if(this.create_menu==''){
      this.show_add_update_button=false;
    }
  }
  // update the created menu
  updatemenu(){
    var dt={
      "res_id":localStorage.getItem('Restaurant_id'),
      "menu_name":this.create_menu,
      "user":localStorage.getItem('Restaurant_id'),
      "id":this.Menu_id
    }
    this.lagunaserve.post_createmenu(dt).subscribe(data=>{
      console.log(data);
      this.myFunction_submit();
      this.fetchdata();
      
    })
  }
   // snackbar
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  // snackbar
  myFunction_submit() {
    this.x = document.getElementById("snackbar1");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  
// scroll to top when clicking on the row to edit
  get_sec_id(menu_id:any,menu_description:any){

    this.lagunaserve.checkactivity(localStorage.getItem('Restaurant_id')).subscribe(data=>{console.log(data);
      this.check=data;
      if(this.check.msg[0].approval_flag=='U'){
        this.show_create_menu_only=true;
        this.Menu_id=menu_id;
        this.create_menu=menu_description;
      this.show_add_update_button=true;
        window.scrollTo(0, 0)

      }
      else{
        // this.show_create_menu_only=false;
      }
    })
     
  }
  // assigning row id before deletion
  getrow_id(id:any){
     this.row_id=id;
  }
  
  delete_item(){ 
    // delete additional menus that are created
    this.lagunaserve.delete_menu(this.row_id).subscribe(data=>{
      console.log(data);
      this.fetchdata();
      this.create_menu='';
      this.show_add_update_button=false;
    })
  }
  
}


