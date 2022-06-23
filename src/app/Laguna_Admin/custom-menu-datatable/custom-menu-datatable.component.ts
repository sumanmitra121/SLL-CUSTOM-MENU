import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-custom-menu-datatable',
  templateUrl: './custom-menu-datatable.component.html',
  styleUrls: ['./custom-menu-datatable.component.css']
})
export class CustomMenuDatatableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'restaurant_name', 'date_enquiry','phone_no', 'manage' ,'edit', 'delete'];
  // dataSource = ELEMENT_DATA;
  userData: any;
  del_id: any;
  modeData: any;
  divid: any;
  flag: any;
  show_edit = false;
  setupmode: any;
  x: any;
  m = '';
  delData:any;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  constructor(private spinner: NgxSpinnerService, private admin_data: LagunaserviceService, private router: Router) { }
  show_spinner = false;
  ngOnInit(): void {
    this.spinner.show()
    this.fetchdata();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
  }
  myFunction() { //function to display the snackbar
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(() => { this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  go_details(v: any) { //route to the particular restaurant on clicking on the edit option
    // alert(v);
    this.router.navigate(['/admin/OrderPagesertup', btoa(v)])
  }
  fetchdata() { //fetching the restaurant record
    //Call APi
    this.admin_data.get_admin_dashboard_custom(null).subscribe(data => {
      console.log(data)
      this.userData = data
      // this.userData = this.userData.msg;
      // this.show_spinner=true;
      this.spinner.hide();
      this.putdata(this.userData.msg)
    })
  }
  putdata(v: any) { //assign pagination and sort header to datatable
    this.dataSource = new MatTableDataSource(v);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
    for (let i = 0; i < v.length; i++) {
      console.log('setup' + (i + 1));
      // this.divid=document.getElementById('setup'+(i+1));
      // console.log(this.divid)
      // this.divid.style.display='none'

    }

  }
  applyFilter(event: Event) { //search input
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  click_setup(v: any, id: any) { //to change mode to either setup, pending or approval
    console.log(id)
    this.setupmode = document.getElementById('setupmodeid' + id);
    console.log("checked:" + v.checked);
    this.divid = document.getElementById('setup' + id);
    if (v.checked) {
      this.flag = 'S'
      this.m = 'Setup Mode: On'
    }
    else {
      this.flag = 'U'
      this.m = 'Setup Mode: Off'
    }
    this.admin_data.get_approval(this.flag, id).subscribe(data => {
      console.log(data)
      this.modeData = data;
      if (this.modeData.suc == 1) {

        this.fetchdata();
        this.myFunction()
      }
      else {
        this.m = "Error! Cannot change support mode. Please try again later!"

        this.fetchdata()
        this.myFunction()

      }

    }, error => { 
      this.m = "Error! Cannot change support mode. Please try again later!"
      this.fetchdata()
      this.myFunction()

    })

  }
  del_res(v: any) { //to assign the restaurant ID
    console.log(v);
    this.del_id = v;
  }
  delete_restaurant() { //function for deletin a restaurant
    this.admin_data.del_rest(this.del_id).subscribe(data=>{console.log(data)
    this.delData=data;
    if(this.delData.suc==1){
      this.fetchdata()
      this.m="Delete successful!"
      this.myFunction();
      
    }
    else{
      this.m="Delete failed!";
      this.myFunction()
    }
    },error=>{ this.m="Delete failed!";
    this.myFunction()})
  }

}
