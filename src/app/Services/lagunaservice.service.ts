import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global_url_test } from '../global_url';
import { url_set } from '../globalvar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LagunaserviceService {
  url_reg = url_set.api_url;
  Url=global_url_test.URL+'package';
  _Url=global_url_test.URL+'promo';
  __url=global_url_test.URL+'holder_cling';
  holder_Url=global_url_test.URL+'holder_cling';
  constructor(private http:HttpClient,private router:Router){ }
  postpackagedata(v:any){//For Package Api In Admin order setup Page 
    console.log(v);
       return this.http.post(this.Url,v)
  }
  //api for admin login
  submit_log(v: any) {
    return this.http.post(url_set.api_url + '/login', v)
  }
 logout_service(){
    localStorage.clear();
    this.router.navigate(['/admin'])
  }
  getpackagedata(id:any){//For Package Api Get in Admin Order setup Page
    return this.http.get(this.Url + '?res_id=' + id);
  }
  PostPromoCalendar(dt:any){//For Promocalendar Api Get in Admin Order setup Page
     return this.http.post(this._Url,dt);
  }
  GetPromoCalendar(id:any){//For Promocalendar Api Get in Admin Order setup Page
    return this.http.get(this._Url + '?res_id=' + id);
 }
 Postsignupholder(dt:any){//For signUp  Api Post in Admin Order setup Page
  return this.http.post(this.__url,dt);
}
Getsignupholder(id:any){//For signup Api Get in Admin Order setup Page
 return this.http.get(this.__url+ '?res_id=' + id);
}
PostWIndowCling(dt:any){//For windowcling Api Post in Admin Order setup Page
  return this.http.post(this.holder_Url,dt);
}
GetWindowCling(id:any){//For windowcling Api get in Admin Order setup Page
  return this.http.get(this.holder_Url+ '?res_id=' + id);
}
// get_menu_urls(res_id:any, m_id: any){
//   var menu_id = m_id > 0 ? m_id : '';
//   return this.http.get(url_set.api_url+'/section_image?id='+res_id + '&menu_id=' + menu_id)
// }
get_menu_urls(res_id:any, m_id: any, v_id:any){//api to retireve urls for cover and top urls
  var menu_id = m_id > 0 ? m_id : '',
  venue = v_id > 0 ? '&venue_id='+v_id : '';
  return this.http.get(url_set.api_url+'/menu_setup?id='+res_id + '&menu_id=' + menu_id + venue)
}
//api to retrieve section urls
get_sec_url(menu_id:any,res_id:any){
  return this.http.get(url_set.api_url+'/section_image?id='+res_id + '&menu_id=' + menu_id)
}
//api to retrieve date and time value
get_set_time(menu_id:any,res_id:any){
  return this.http.get(url_set.api_url+'/date_time?id='+res_id + '&menu_id=' + menu_id)

}
//api to retrieve about us
get_about_us(res_id:any){
  return this.http.get(url_set.api_url+'/aboutus?id='+res_id)
}
//for fetching about us text
post_about_us(about_txt:any,res_id:any){
  var dt={
    restaurant_id:res_id,
    aboutus:about_txt
  }

 return this.http.post(url_set.api_url+'/aboutus',dt);
}

//posting date and time
post_date_time(dt:any){
  return this.http.post(url_set.api_url+'/date_time',dt);
}
//create section
// post_section_create(dt:any,file:any){
//   const formdata=new FormData();
//   formdata.append('restaurant_id',dt.restaurant_id);
//   formdata.append('menu_id',dt.menu_id);
//   formdata.append('sec_name',dt.sec_name);
//   formdata.append('sec_img',file);
//   formdata.append('id',dt.id > 0 ? dt.id : 0);
//   return this.http.post(url_set.api_url+'/section',formdata);
// }
//for submitting data for creating a section
post_section_create(dt:any,file:any,filename:any){
  const formdata=new FormData();
  console.log(dt.menu_id,file);
  
  formdata.append('restaurant_id',dt.restaurant_id);
  formdata.append('menu_id',dt.menu_id);
  formdata.append('sec_name',dt.sec_name);
  formdata.append('sec_img',file);
  formdata.append('id',dt.id > 0 ? dt.id :0);
  formdata.append('filename',filename);
  formdata.append("venue_id",dt.venue_id)
  return this.http.post(url_set.api_url+'/section',formdata);
}
//for fetching the data that make up the section
get_section_data(res_id:any,menu_id:any){
  
  return this.http.get(url_set.api_url+'/section?id='+res_id + '&menu_id=' + menu_id)
}

post_item_data(dt:any){//submitting item data
  return this.http.post(url_set.api_url+"/items",dt)
}
get_item_data(res_id:any,menu_id:any,section_id:any){ //for retrieving item data
  return this.http.get(url_set.api_url+'/items?id='+res_id + '&menu_id=' + menu_id+'&sec_id='+section_id)
  
}
get_item_data_desc(v:any,mid:any,secid:any,iid:any){ //for fetching item price and description
  return this.http.get(url_set.api_url+'/item_price?id='+v+'&menu_id='+mid+'&sec_id='+secid+'&item_id='+iid)
}
post_item_data_desc(dt:any){ //for submitting item price and description
  return this.http.post(url_set.api_url+"/item_price",dt)
}
get_special(v:any,d1:any){ //for fetching data for special notes
  var v1 = d1 > 0 ? d1 : '';
  return this.http.get(url_set.api_url+'/notice?id='+v + '&menu_id=' +v1);
}
post_special(dt:any){ //for submitting data for special notes
  return this.http.post(url_set.api_url+'/notice',dt);
}
getrestaurant_check_menu_setup(v:any){
  return this.http.get(url_set.api_url+ '/check_menu_setup?id='+v);
}
get_admin_dashboard(){ //for retrieving data for restaurant records
  return this.http.get(url_set.api_url+'/res_dtls?id=')
}
get_admin_dashboard_custom(id:any){
  var res_id = id > 0 ? id : 0;
  return this.http.get(url_set.api_url+'/res_dtls_custom?id='+res_id)
}
get_specific_admin_dashboard(v:any){ //for retrieving data for a specific records
  return this.http.get(url_set.api_url+'/res_details?id='+v)
}

//menu_url
get_menu_url(v:any,vid:any){
   return this.http.get(url_set.api_url+'/get_url?id='+v+'&venue_id='+vid)
}
get_qrcode(v:any){ //for generating qr code
  return this.http.post(url_set.api_url+'/generate_qr', v)

}


//view menu depending on the menuid
// get_menu_by_time(dt:any){
//   return this.http.get(url_set.api_url+'/preview_menu?id='+ dt.id + '&st_time=' + dt.st_time + '&end_time=' + dt.end_time);
// }
post_approve_menu(dt:any){  //for approving menu by the restaurant
  // const formdata=new FormData();
  // formdata.append(""dt);
  return this.http.post(url_set.api_url+'/approve_menu',dt)

}
send_admin_mail(v:any){ //for sending menu amendment email by admin
  return this.http.get(url_set.api_url+'/approve_menu?id='+v);
 
 }

 get_approval(v1:any,v2:any){ 
  return this.http.get(url_set.api_url+'/update_approval?flag='+v1+'&res_id='+v2)
}
get_menu_on_choice(v:any){ //fetch the menu that a particular restaurant has chosen
  return this.http.get(url_set.api_url+'/res_menu?id='+v)
}

// postimage(){
//   return this.http.post(url_set.api_url+'/testing',formdata)
// }

// update_logo_service(id:any,name:any,url:any,img_file:any){
//   const formdata=new FormData();
//   formdata.append('restaurant_id',id);
//   formdata.append('restaurant_name',name);
//   formdata.append('logo',url)
//   formdata.append('logo_img',img_file)
//   return this.http.post(url_set.api_url+'/logo',formdata)
// }

update_logo_service(id:any,name:any,url:any,img_file:any,filename:any,venueid:any){ //for submitting the restaurant logo
  const formdata=new FormData();
  formdata.append('restaurant_id',id);
  formdata.append('restaurant_name',name);
  formdata.append('logo',url)
  formdata.append('logo_img',img_file);
  formdata.append('filename',filename);
  formdata.append('venue_id',venueid)
  return this.http.post(url_set.api_url+'/logo',formdata)
}

update_cover_service(menuid:any,vmenu:any,name:any,restaurantid:any,coverfile:any,url:any,filename:any,venueid:any){ //for submitting the cover image for a particular menu of a particular restaurant
  const formdata=new FormData();
  formdata.append('id',menuid);
  formdata.append('menu_id',vmenu)
  formdata.append('restaurant_id',restaurantid);
  formdata.append('restaurant_name',name);
  formdata.append('cov_url',url)
  formdata.append('cov_img',coverfile);
  formdata.append('filename',filename)
  formdata.append('venue_id',venueid)
  return this.http.post(url_set.api_url+'/cover_save',formdata)
 }
// update_cover_service(menuid:any,vmenu:any,name:any,restaurantid:any,coverfile:any,url:any){
//  const formdata=new FormData();
//  formdata.append('id',menuid);
//  formdata.append('menu_id',vmenu)
//  formdata.append('restaurant_id',restaurantid);
//  formdata.append('restaurant_name',name);
//  formdata.append('cov_url',url)
//  formdata.append('cov_img',coverfile)
//  return this.http.post(url_set.api_url+'/cover_save',formdata)
// }

update_top_service(menuid:any,vmenu:any,name:any,restaurantid:any,topfile:any,url:any,filename:any,venueid:any){ //for uploading top image 
  const formdata=new FormData();
 formdata.append('id',menuid);
 formdata.append('menu_id',vmenu)
 formdata.append('restaurant_id',restaurantid);
 formdata.append('restaurant_name',name);
 formdata.append('top_url',url)
 formdata.append('top_img',topfile);
 formdata.append('filename',filename)
 formdata.append('venue_id',venueid)
 return this.http.post(url_set.api_url+'/top_save',formdata)
}
// update_top_service(menuid:any,vmenu:any,name:any,restaurantid:any,topfile:any,url:any){
//   const formdata=new FormData();
//  formdata.append('id',menuid);
//  formdata.append('menu_id',vmenu)
//  formdata.append('restaurant_id',restaurantid);
//  formdata.append('restaurant_name',name);
//  formdata.append('top_url',url)
//  formdata.append('top_img',topfile)
//  return this.http.post(url_set.api_url+'/top_save',formdata)
// }

//For check whether the setup mode is on or not?
checkactivity(v:any){
  return this.http.get(url_set.api_url+'/check_activity?id='+v)

}
get_menu_by_time(dt:any){ //for fetching the static menus in preview
  return this.http.get(url_set.api_url+'/preview_menu?id='+ dt.id + '&st_time=' + dt.st_time + '&end_time=' + dt.end_time+'&menu_id='+dt.menu_id);
}

check_menu_overlap(dt:any){ //to check whether multiple menus are coinciding
  return this.http.get(url_set.api_url+'/check_menu?id='+ dt.id + '&st_time=' + dt.st_time + '&end_time=' + dt.end_time+'&menu_id='+dt.menu_id+'&flag='+dt.flag);

}
get_menu(v:any){ //fetching dynamic menus
  return this.http.get(url_set.api_url+'/menu_data?id='+ v);

}

// For deleting Menu pdf permanently 
delete_file(e:any,e1:any){
  const formdata=new FormData();
  formdata.append('res_id',e);
  formdata.append('id',e1);
  return this.http.get(url_set.api_url+'/del_menu?id=' + e1 + '&res_id=' + e)
}
// For deleting section pdf permanently 
delete_file_section(e:any,e1:any){
  const formdata=new FormData();
  formdata.append('res_id',e);
  formdata.append('id',e1);
  return this.http.get(url_set.api_url+'/del_sec?id=' + e1 + '&res_id=' + e)
}
//For Retriving data in order page
get_selectedd_order(dt:any){
  return this.http.get(url_set.api_url+'/order_dtls?id=' +dt);
}

pay_email(res_id:any,encode_data:any){ //fired when order has been placed
  // const formdata=new FormData();
  // formdata.append('restaurant_id',res_id);
  // formdata.append('en_dt',encode_data);
  return this.http.get(url_set.api_url+'/pay_email?id=' +res_id +'&en_dt=' +encode_data);
}
downloadsection(restid:any,menuid:any){ //download section data
  console.log(restid+" "+menuid)
  return this.http.get(url_set.api_url+'/download_section?id='+restid+'&menu_id='+menuid,{responseType:'arraybuffer'})
}
downloadlogotopcover(restid:any){ //download all
  return this.http.get(url_set.api_url+'/download_cov?id='+restid,{responseType:'arraybuffer'})

}

//For getting Category Id
get_category_list(){
  return this.http.get(url_set.api_url+'/category_list');
}
get_promo_category_list(){ //for fetching the category list for promotions
  return this.http.get(url_set.api_url+'/get_promo_cat_dtls');

}

// get_category_list() {
//   return this.http.get(url_set.api_url + '/category_list')
// }
uploadStockImage(id: any, file: any, filename: any) { //for uploading the stock images depending on the cateogory
  const formdata = new FormData();
  formdata.append('stock_img', file);
  formdata.append('stock_filename', filename);
  formdata.append('cat_id', id);
  return this.http.post(url_set.api_url + "/stock_img", formdata);

}
getStockImages(v: any) {//for fetching the stock image category while uploading
  return this.http.get(url_set.api_url + "/stock_img?cat_id=" + v);

}
deleteStockImages(v: any) { //for deleting stock images
  return this.http.get(url_set.api_url + '/del_stock_img?id=' + v)
}

submit_special_data(v:any){ //for submitting special menu date and time
  return this.http.post(url_set.api_url+'/special_date_time',v);
}
//Check whether the package is exist or not
check_package_exist(v:any,v2:any){
  return this.http.get(url_set.api_url+'/check_menu_special?id='+v +'&menu_id='+v2);
}
//getting selected stock image 
get_stock_iamge(v:any,v2:any){
  return this.http.get(url_set.api_url+'/get_special_data?id='+v +'&menu_id='+v2);
}
// For gettimg time for checked package
get_date_time(dt:any){
 return  this.http.post(url_set.api_url+'/special_start_end',dt);
}
get_sp_desc(v1:any,v2:any){ //for fetching special menu and the image
  return this.http.get(url_set.api_url+'/get_special_data?id='+v1+'&menu_id='+v2)
}
 post_sp_desc(v:any){  //for submitting special menu and the image
  return this.http.post(url_set.api_url+'/get_special_data',v)
 } 

 //getting selected stock image 
// get_stock_iamge(v:any,v2:any){
//   return this.http.get(url_set.api_url+'/get_special_data?id='+v +'&menu_id='+v2);
// }


//For Getting special Image
// getspecial_image(cat_id:any){
//   var id = cat_id ? cat_id : '';
//   return this.http.get(url_set.api_url+'/stock_img?cat_id=' +id);
// }
//For Getting special Image
getspecial_image(cat_id:any){ //fetching special image in restaurant
  var id = cat_id ? cat_id : '';
  return this.http.get(url_set.api_url+'/stock_img?cat_id=' +id);
}
//For Getting promo Image
getpromo_image(cat_id:any){ //fetching promotional image in restaurant
  var id = cat_id ? cat_id : '';
  return this.http.get(url_set.api_url+'/promo_stock_img?cat_id=' +id);
}
//For checking payment is done or not
checkpayment(res_id:any){
  return this.http.get(url_set.api_url+'/pay_check?id='+res_id)
}

Check_active_status(res_id:any){ //to check whether there is setup mode or not
  return this.http.get(url_set.api_url+'/check_active_status?id='+res_id)
}
get_overlap_with_special(v:any){ //to check whether there is overlap of a menu with a special menu
  return this.http.get(url_set.api_url+'/check_special_overlap?id='+v)
}

//Check whether the restaurant select the event/Calendar or not
check_calender(res_id:any){
  return this.http.get(url_set.api_url+'/check_calender?id='+res_id);
}
//For getting the events in Calendar 
calender_dtls(res_id:any, flag:any, date:any){
  var date_flag = date ? `&date=${date}` : '';
  return this.http.get(url_set.api_url+'/calender_dtls?id='+res_id+'&flag='+flag + date_flag);
}
//Posting events
post_calender_dtls(dt:any,img:any){
  const formdata=new FormData();
  formdata.append('img',img)
  formdata.append('event_name',dt.event_name);
  formdata.append('event_date',dt.event_date);
  formdata.append('event_time',dt.event_time);
  formdata.append('event_title',dt.event_title);
  formdata.append('tkt_url',dt.tkt_url);
  formdata.append('description',dt.description);
  formdata.append('res_id',dt.res_id);
  formdata.append('user',dt.user);
  formdata.append('id',dt.id);
  formdata.append('approval_flag',dt.approval_flag);
  formdata.append('user_type',dt.user_type)
  return this.http.post(url_set.api_url+'/calender_dtls',formdata);
}

get_event_dashboard(){ //fetching event records for restaurants
  return this.http.get(url_set.api_url + '/get_res_dtls?id=')
}

//Get data from admin promotions
 get_admin_promotion(){
   return this.http.get(url_set.api_url +'/adm_promo_dt');
 }
 //Get restaurant promotion data
 get_restaurant_promotion(res_id:any){
  return this.http.get(url_set.api_url +'/res_promo_dt?id=' +res_id);
}
//Posting promotion introduction
post_promo_intro(dt:any){
 return this.http.post(url_set.api_url +'/intro_save',dt);
}
//Posting promotion confirmation mail
post_promo_conf(dt:any){
  return this.http.post(url_set.api_url +'/conf_email_save',dt);
 }
//posting promotion popup
 post_promo_popup(dt:any){
  return this.http.post(url_set.api_url +'/pop_save',dt);
 }
//posting promotion questions
 post_promo_qn(dt:any){
   return this.http.post(url_set.api_url +'/qn_save',dt)
 }
 //posting promotion questions
 post_promo_email(dt:any){
  return this.http.post(url_set.api_url +'/mailing_email_save',dt)
}
post_promo_img(dt:any){ //submit promotional image
  return this.http.post(url_set.api_url +'/img_save',dt)

}
post_promo_status(dt:any){ //fetch promo status for enabling and disabling them
  return this.http.post(url_set.api_url +'/status_save',dt)
}
//For Getting Customer database data
Get_promotion_dt(res_id:any){
  console.log(res_id);
  
  return this.http.get(url_set.api_url +'/get_promotion_dt?id='+res_id)
}
post_promo_dt(dt:any){ //submit all promotional data
  return this.http.post(url_set.api_url+'/promo_save',dt)
}
get_admin_promo(){ //fetch promotional data in admin
  return this.http.get(url_set.api_url+'/adm_promo_dt')
}
post_promo_mail(dt:any){ //submit promotional body text from mailing mail
  return this.http.post(url_set.api_url+'/mailing_email_save',dt)
}

get_prormo_dt(res_id:any,frm_date:any,to_date:any){  //fetching promo data
  return this.http.get(url_set.api_url+'/get_promo_dt?id='+res_id+'&frm_dt='+frm_date+'&to_dt='+to_date)
}

//Unlimited Menu
post_createmenu(dt:any){ 
  return this.http.post(url_set.api_url+'/add_menu',dt);
}
//Unlimited Menu
get_createmenu(res_id:any){
  return this.http.get(url_set.api_url+'/add_menu?res_id='+res_id);
}
delete_menu(id:any){ //deleting the menu that has been creating while creating unlimited menu
  return this.http.get(url_set.api_url+'/delete_menu?id=' +id);
}
afterlogin_update_packege(dt:any){ //additional products update package
  return this.http.post(url_set.api_url+'/update_pack',dt);
}
afterlogin_update_window(dt:any){ //additional products update facility
  return this.http.post(url_set.api_url+'/update_prod',dt);
}
additional_payment(res_id:any){ //payment for additional products
  var dt={
    "res_id":res_id}
  return this.http.post(url_set.api_url+'/update_pay',dt)
}
//posting restaurant details
post_res_details(dt:any){
  return this.http.post(url_set.api_url+'/update_user',dt)
}
//posting password
post_change_password(dt:any){
  return this.http.post(url_set.api_url+'/update_password',dt)
}
//getting restaurant details
get_res_details(res_id:any){
  return this.http.get(url_set.api_url+'/res_details?res_id='+res_id)
}
//getting password
get_password(res_id:any){
  return this.http.get(url_set.api_url+'/get_pass?res_id=',res_id)
}
delete_section_serv(v:any){ //deleting a section in the item (admin/restaurant-restaurant setup)
  return this.http.get(url_set.api_url+'/delete_sec?id='+v)
}
delete_item_serv(v:any){ //deleting a record in the item (admin/restaurant-restaurant setup)
  return this.http.get(url_set.api_url+'/delete_item?id='+v)
}
delete_price_desc(v:any){ //deleting a record in the item price and description section (admin/restaurant-restaurant setup)
  return this.http.get(url_set.api_url+'/delete_price_desc?id='+v)
}

approve_calendar(dt:any){ //approing calendar events added by the user (admin/restaurant-promotions)
  return this.http.post(url_set.api_url+'/approve_cal',dt)
}
get_email_body(v:any){ //fetching mail body according to different types of mail type (admin-order setup)
  return this.http.get(url_set.api_url+'/email_body?id='+v)
}
post_email(dt:any){ //submitting mail body according to different types of mail type (admin-order setup)
  return this.http.post(url_set.api_url+'/email_body',dt);
}
get_all_menu(id:any){ //fetching menu instructions for all the menus (admin-order setup)
  return this.http.get(url_set.api_url+'/get_menu_dtls?id='+id)
}
get_email_type(){ //for submitting different mail body texts for order confirmation, login credentials and order placements(admin-order setup)
  return this.http.get(url_set.api_url+'/get_email_type')
}
post_menu_ins(dt:any){ //for submitting data for menu instructions in the menu setup page (admin-order setup)
  return this.http.post(url_set.api_url+'/get_menu_dtls',dt)

}
post_config_menu(dt:any){ //for submitting data for footer color, navbar color and greetings color as well as the footer text (user-user menu)
  return this.http.post(url_set.api_url+'/config_menu',dt)

}
get_config_menu(){ //fetching data for footer color,navbar color and greetings color as well as the footer text (user-user menu)
  return this.http.get(url_set.api_url+'/config_menu')

}
get_cal_dtls(v:any){ //for fetching the details of an event from a date in calendar (user-user-cal-dtls)
  return this.http.get(url_set.api_url+'/get_cal?id='+v)

}
del_rest(v:any){ //for deleting a restaurant entry from the datatable containing restaurants in the restaurant page in admin
  return this.http.get(url_set.api_url+'/del_res?id='+v)
}
post_priv_auth_col(dt:any){ //for submitting the privacy text in the birthday/anniversary modals (admin-promotions)
  return this.http.post(url_set.api_url+'/promo_other_save',dt)
}
post_help_text(dt:any){ //for submitting the text in the help section in the menu setup (admin-order setup)
  return this.http.post(url_set.api_url+'/help_text',dt);
}
get_help_text(){ //for fetching the text concerning the help section in the menu setup (admin-order setup)
  return this.http.get(url_set.api_url+'/help_text');
}
post_ev_ins(dt:any){ //for uploading events for instruction concerning birthdays and events (admin-order setup)
  return this.http.post(url_set.api_url+'/other_text',dt);
}
uploadEventImage(file: any, filename: any) { //for uploading a default image for event calendar (admin-order setup)
  const formdata = new FormData();
  formdata.append('dif_img', file);
  formdata.append('filename', filename);
  formdata.append('user', 'admin@gmail.com');
  return this.http.post(url_set.api_url + "/dif_img_save", formdata);

}
save_other_qr(file:any,res_id:any,flag:any,venueid:any,compose_url:any,bitly:any){ //for uploading qr-codes for vcard and laguna fun directory (admin-restaurant setup)
  const formdata = new FormData();
  formdata.append('img',file);
  formdata.append('flag',flag);
  formdata.append('res_id',res_id);
  formdata.append('venue_id',venueid);
  formdata.append("menu_url",compose_url);
  formdata.append("bitly_url",bitly)
  return this.http.post(url_set.api_url + "/save_other_qr", formdata);



}
create_bitly_url(url:any,res_id:any){ //for generating bitly url (admin-restaurant setup)
  var dt={
    "url": url,
    "res_id":res_id
  }
  return this.http.post(url_set.api_url+'/create_bitly_url',dt)
}
post_order_conf(dt:any){ //for submitting order confimation email body text (admin-order setup)
  return this.http.post(url_set.api_url+'/order_conf',dt)
}
post_cov_img(file:any,filename:any){ //for uploading the default cover image (admin-order setup)
  const formdata = new FormData();
  formdata.append('cover_img', file);
  formdata.append('cover_filename', filename);
 
  return this.http.post(url_set.api_url + "/dif_cov_img_save", formdata);
}
get_order_breakup(id:any){
  return this.http.get(url_set.api_url+'/order_price?id='+id)
}
confirm_order(dt:any){
  return this.http.post(url_set.api_url+'/confirm_order',dt)
}
submit_venue(dt:any){
  return this.http.post(url_set.api_url+'/venue',dt)
}
get_venue(id:any){
  return this.http.get(url_set.api_url+'/venue?res_id='+id)

}
delete_venue(id:any){
  return this.http.get(url_set.api_url+'/del_venue?id='+id)
}
submit_menu(dt:any){
  return this.http.post(url_set.api_url+'/venue_menu',dt)
}
get_venue_menu(res_id:any, id:any, vid:any){
  var tb_id = id > 0 ? id : '';
  var v_id = vid > 0 ? vid : 0;
  return this.http.get(url_set.api_url+'/venue_menu?res_id=' + res_id + '&id=' + tb_id + '&venu_id=' + v_id)
}
delete_venue_menu(id:any){
  return this.http.get(url_set.api_url+'/del_venue_menu?id='+id)
}
amend_proposal(dt:any){
  return this.http.post(url_set.api_url+'/approve_proposal',dt);
}
}
