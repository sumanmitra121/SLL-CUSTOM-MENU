import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { url_set } from 'src/app/globalvar';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url_reg = url_set.api_url + '/registration';

  // url_reg='http://localhost:3000/reg';
  constructor(private http: HttpClient) { }
  //submitting registration data
  submit_reg(v: any) {
    console.log(v);
    console.log({ res: this.http.post(this.url_reg, v) })
    return this.http.post(this.url_reg, v, { responseType: 'text' });
  }
  //checking existing emails
  check_existing_email(v_email: any) {
    return this.http.get(url_set.api_url + '/email_check?Email=' + v_email)
  }
  //country API
  getCountries() {
    return this.http.get(url_set.api_url + '/country');
  }
  //retrieving package data for order
  getPackage(id:any) {
    return this.http.get(url_set.api_url + '/package?res_id='+id)
  }
  //retrieving promo data for order
  getPromo(id:any) {
    return this.http.get(url_set.api_url + '/promo?res_id='+id)
  }
  //retrieving holder data for order
  getHoldercling(id:any) {
    return this.http.get(url_set.api_url + '/holder_cling?res_id='+id)
  }
  // sending order data
  sendOrderData(dt: any) {
    console.log(dt);
    return this.http.post(url_set.api_url + '/order', dt)
  }
  //sending payment data after order_page
  sendPaymentData(v: any) {
    console.log(v);
    return this.http.post(url_set.api_url + '/pay', v);
  }
  //for login
  submit_log(v: any) {
    return this.http.post(url_set.api_url + '/login', v)
  }

  submit_breakfast_menu_setup(dt:any) {
    return this.http.post(url_set.api_url + '/menu_setup', dt
    )
  }

  //TESTING PURPOSE
  submit_breakfast_menu(v3:any) {
    const formdata=new FormData();
    formdata.append('files', v3);
    // console.log(v3);
    return this.http.post(url_set.api_url + '/testing',v3)
  }
  //For Menu Images in Restaurant
  submit_menu_setup(dt:any) {
    const formdata=new FormData();
    formdata.append('File',dt);
    return this.http.post(url_set.api_url+'/upload',dt);
  }

  logosubmit(dt:any,dt1:any,dt2:any,dt3:any,dt4:any,dt5:any){
    // var data = {logo: dt, restaurant_id: dt2, };
    const formdata=new FormData();
    formdata.append('logo',dt);
    formdata.append('logo_img',dt1);
    formdata.append('restaurant_id',dt2);
    formdata.append('restaurant_name',dt3);
    formdata.append('filename',dt4);
    formdata.append('venue_id',dt5);


    console.log(formdata.getAll)
    return this.http.post(url_set.api_url+'/logo',formdata);
  }
  // fetching about us data
  Aboutus(dt:any,dt1:any){
    var data = {aboutus: dt, restaurant_id: dt1};
    // const formdata=new FormData();
    // formdata.append('logo',dt);
    // formdata.append('File',dt1);
    // formdata.append('restaurant_id',dt2);
    // console.log(formdata.getAll)
    return this.http.post(url_set.api_url+'/aboutus',data);
  }
  // submit notice content
  Notice(v1:any,v2:any,v3:any,v4:any,v5:any,v6:any,v7:any,v8:any,v9:any){
    var data = {menu:v1,notice_flag: v8, position: v2,headertitle:v3,fontcolor:v4,back_color:v5,notice:v6,restaurant_id:v7,venue_id:v9};
    // const formdata=new FormData();
    // formdata.append('logo',dt);
    // formdata.append('File',dt1);
    // formdata.append('restaurant_id',dt2);
    // console.log(formdata.getAll)
    console.log(data)
    return this.http.post(url_set.api_url+'/notice',data);
  }
  //For Check Mobile existing or not
  getmobile(v:any){
    console.log(v);
    return this.http.get(url_set.api_url + '/mobile_check?no=' + v);
  }
  // fetching the timezone
  gettimezone(){
    return this.http.get(url_set.api_url+'/get_timezone');
  }
  send_pay_email(dt:any){
    return this.http.post(url_set.api_url+'/send_pay_email', dt)
  }
  //POSTING PROMO DETAILS

}
