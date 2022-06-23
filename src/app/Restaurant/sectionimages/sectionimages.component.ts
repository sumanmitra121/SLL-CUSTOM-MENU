import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { menuplatform } from '../menu';

@Component({
  selector: 'app-sectionimages',
  templateUrl: './sectionimages.component.html',
  styleUrls: ['./sectionimages.component.css']
})
export class SectionimagesComponent implements OnInit {

  removeiputfield:boolean=true;
  counter=0;
  col:any;
  row:any;
  id='Breakfast';
  images:any;
  public addressForm!: FormGroup;
   Menuurl:any=[];
   nu:menuplatform[]=[]

   raw:any;
   values = [{value:""}];
  constructor() { }

  ngOnInit(): void {
    this.values.length=0;
  }

  changeBreakmenubreak(event:any){
  console.log(event);
  // this.
  this.Menuurl.push(event.target.files[0].name);
  console.log(this.Menuurl)
  }

  changeBreakmenubreak1(event:any){
    this.images=event.target.files[0];
  }

  //for submit the values
  opennextab(e:any){
    console.log(e,this.values);
       
        for(let i=0;i<this.values.length;i++){
          this.nu.push({'name_url': this.values[i].value,'image':this.Menuurl[i],'menu_name':this.id})
        }
        this.nu.push({'name_url': this.row,'image':this.images,'menu_name':this.id});

        console.log(this.nu);
      }

  add(v:any){
   
    // this.nu.concat(v);
    // this.Menuurl.push(v);
    // this.Menuurl.concat(v);
    // console.log(this.Menuurl);
    // this.col=document.querySelector('.secDifer')?.appendChild(this.row);
    // this.row = document.createElement('div');  
    //   this.row.className = 'row';
    //   this.row.innerHTML = `
    //   <br>
    //   <div class="col-6">
    //   <label class="titleCustom"><strong>MENU:</strong></label>
    //   Upload a PDF file of your Breakfast menu.<br>
    //   Please be sure to include your Kids, Desert and Beverage menus, if you have one.<br>

    //   <label for="menuImg"> <strong>File (you can add multiple files)</strong></label><br>
    //   <input type="file" id="myfile" name="myfile" multiple
    //       (change)="changeBreakmenubreak($event)"><br><br>
    //    </div>
    //   <div class="col-6">
    //   <br>
    //   <label for="menuImg"> <strong>Your Web Site Address/URL:</strong></label><br>
    //   Or, please provide a web site address/url where we can collect your menu content:
    //   <form>
    //       <label for="url">Enter the url:</label>
    //       <input type="text" id="url" name="url" class="uuuu" size="28" #MENUURL>
    //   </form>
      
    // </div>
     
    // <hr class="mt-1">`;
      // this.col=document.querySelector('.secDifer')?.appendChild(this.row);
      // console.log(this.col);
      // var list=document.getElementById('input_url');
      // list?.removeChild(list.childNodes[0]);
           
       

       }
       
 
       removevalue(i:any){
         console.log(i)
        this.values.splice(i,1);
      }
    
      addvalue(e:any){
        this.row=e;
        console.log(this.values)
        this.removeiputfield=false;
        this.values.push({"value": ""});

      }
      
      
      detectchange(e:any){
       if(e=='B'){
          this.id="BreakFast";
        }
        else if(e=='L'){
          this.id="Launch"
        }
        else if(e=='D'){
          this.id="Dinner";
        }
        else{
          this.id="Brunch"
        }
        this.values.length=0;
      }
}
