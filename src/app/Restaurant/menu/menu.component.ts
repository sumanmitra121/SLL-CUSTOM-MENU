import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { menuplatform } from '../menu';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // i:number=1;
  removeiputfield: boolean = true;
  counter = 0;
  col: any;
  row: any;
  images: any;
  id = 'Breakfast';
  public addressForm!: FormGroup;
  Menuurl: any = [];
  nu:menuplatform[]=[];
  val: any;
  raw: any;
  values = [{ value: "" }];
  constructor( private Data: DataserviceService) { }

  ngOnInit(): void {
    this.values.length = 0;
  }

  changeBreakmenubreak(event: any) {
    console.log(event);

    this.images=event.target.files[0];
    this.Menuurl.push(event.target.files[0]);
    console.log(this.Menuurl)
  }
  //SUbmit all data
  opennextab(e: any) {
    console.log(e,this.values);
    console.log(this.Menuurl);
       this.Data.submit_menu_setup(this.Menuurl).subscribe(data=>{
         console.log(data);
       })
    for(let i=0;i<this.values.length;i++){
      this.nu.push({'name_url': this.values[i].value,'image':this.Menuurl[i],'menu_name':this.id})
    }
    this.nu.push({'name_url': this.row,'image':this.images,'menu_name':this.id});

    console.log(this.nu);

  }

  add(v: any) {

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

  //For Removing Row
  removevalue(i: any) {
    console.log(i)
    this.values.splice(i, 1);
  }
  //For Adding  Row
  addvalue() {
    console.log(this.values)
    this.values.push({ "value": "" });
   }

   //For Selecting Breakfast launch Brunch or dinner
  detectchange(e: any) {
    if (e == 'B') {
      this.id = "BreakFast";
    }
    else if (e == 'L') {
      this.id = "Launch"
    }
    else if (e == 'D') {
      this.id = "Dinner";
    }
    else {
      this.id = "Brunch"
    }
    this.values.length = 0;

  }
  changeBreakmenubreak1(event:any){
    this.Menuurl.push(event.target.files[0]);
  }
}
