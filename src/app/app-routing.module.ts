import { NgModule } from '@angular/core';

// import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Laguna_Admin/home/home.component';
import { AdminOrderPageComponent } from './Laguna_Admin/order-page/order-page.component';
import { RestaurentComponent } from './Laguna_Admin/restaurent/restaurent.component';
import { SalesAgentComponent } from './Laguna_Admin/sales-agent/sales-agent.component';

import { FormArray } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Restaurant/after_login/dashboard/dashboard.component';
import { MenuSetupComponent } from './Restaurant/menu-setup/menu-setup/menu-setup.component';
import { ChangepassComponent } from './Restaurant/reg_log/changepass/changepass.component';
import { ForgotPassComponent } from './Restaurant/reg_log/forgot-pass/forgot-pass.component';
import { LoginComponent } from './Restaurant/reg_log/login/login.component';
import { OrderPageComponent } from './Restaurant/reg_log/order-page/order-page.component';
import { PaymentPageComponent } from './Restaurant/reg_log/payment-page/payment-page.component';
import { RegistrationComponent } from './Restaurant/reg_log/registration/registration.component';
import { RestaurantSetupComponent } from './Laguna_Admin/restaurant-setup/restaurant-setup.component';
import { AdminloginComponent } from './Laguna_Admin/adminlogin/adminlogin.component';
import { MenudataComponent } from './Restaurant/menudata/menudata.component';
import { LogosetupComponent } from './Restaurant/logosetup/logosetup.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { UserMenuComponent } from './user/user-menu/user-menu.component';
import { ConfirmationmailComponent } from './Restaurant/confirmationmail/confirmationmail.component';
import { EventCalendarComponent } from './Restaurant/after_login/event-calendar/event-calendar.component';
import { EventsRestaurantlistComponent } from './Laguna_Admin/events-restaurantlist/events-restaurantlist.component';
import { EventcalendarComponent } from './Laguna_Admin/event-calendar/event-calendar.component';
import { PromotionComponent } from './Restaurant/after_login/promotion/promotion.component';
import { AccountComponent } from './Restaurant/after_login/account/account.component';
import { RestPromoComponent } from './Laguna_Admin/rest-promo/rest-promo.component';
import { CreateMenusComponent } from './Restaurant/create-menus/create-menus.component';
import { AdditionalproductComponent } from './Restaurant/after_login/additionalproduct/additionalproduct.component';
import { PaysaveComponent } from './Restaurant/after_login/paysave/paysave.component';
import { UserCalendarComponent } from './user/user-calendar/user-calendar.component';
import { UserCalDtlsComponent } from './user/user-cal-dtls/user-cal-dtls.component';
import { NoLinkComponent } from './Restaurant/reg_log/no-link/no-link.component';
import { LagunaFunComponent } from './user/laguna-fun/laguna-fun.component';
import { LagunafunRestComponent } from './user/lagunafun-rest/lagunafun-rest.component';
import { LagunafunBarComponent } from './user/lagunafun-bar/lagunafun-bar.component';
import { ConfirmedPayComponent } from './Restaurant/reg_log/confirmed-pay/confirmed-pay.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomMenuDatatableComponent } from './Laguna_Admin/custom-menu-datatable/custom-menu-datatable.component';
import { OrderSetupNewComponent } from './Laguna_Admin/order-setup-new/order-setup-new.component';


const routes: Routes = [
  {
    component:LandingPageComponent,
    path:''
  },
  {
    path:'adminhome',

    component:HomeComponent
  },
  {
    path:'admin/restaurent',
    component:RestaurentComponent
  },
  {
     path:'admin',
     component:AdminloginComponent
  },
  {
    path:'admin/restaurant_setup/:id',
    component:RestaurantSetupComponent
  },
  {
    path:'admin/OrderPagesertup/:id',
    component:AdminOrderPageComponent
  },
  {
    path:'admin/salesagent',
    component:SalesAgentComponent
  },
  {
   path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'forgot-password',
    component:ForgotPassComponent
  },
  {
    path:'order/:id',
    component:OrderPageComponent
},
  {
    path:'payment/:id/:flag',
    component:PaymentPageComponent
  },
  {
    path:'confirmed_payment/:id',
    component:ConfirmedPayComponent
  },
  {
    path:'menu_setup',
    component:MenuSetupComponent
  },
  
  // {
  //   path:'dashboard',
  //   component:DashboardComponent
  // },
  {
    path:'changepass',
    component:ChangepassComponent
  },
  {
    path:'menudata',
    component:MenudataComponent
  },
{
  path:'logo-setup',
  component:LogosetupComponent
},
{
  path:'thankyou',
  component:ThankyoupageComponent
},
  {
    path:'menu/:rname/:rid',
    component:UserMenuComponent
  },
  {
    path:'confirmation/:id',
    component:ConfirmationmailComponent
  },
  {
    path:'restaurant/dashboard/:id',
    component:DashboardComponent
  },
 {
   path:'EventCalendar',
   component:EventCalendarComponent
 },
 {
  path:'restarauranteventlist',
  component:EventsRestaurantlistComponent
},
{
  path:'eventcalendar/:id',
  component:EventcalendarComponent
},
{
  path:'promotion',
  component:PromotionComponent
},
{
  path:'account',
  component:AccountComponent
},
{
  path:'rest_promo',
  component:RestPromoComponent
},
{
  path:'CreateMenus',
  component:CreateMenusComponent
},
{
  path:'additionalproduct',
  component:AdditionalproductComponent
},
{
  path:'additionalpayment',
  component:PaysaveComponent
},
{
  path:'user_calendar/:rid/:flag',
  component:UserCalendarComponent
},
{
  path:'user_cal_dtls/:id/:rid',
  component:UserCalDtlsComponent
},
{
  path:'no_link',
  component:NoLinkComponent
},
{
  path:'laguna_fun/:id',
  component:LagunaFunComponent
},
{
  path:'laguna_fun_rest/:id',
  component:LagunafunRestComponent
},
{
  path:'laguna_fun_bar/:id',
  component:LagunafunBarComponent
},
{
  path:'custom_table',
  component:CustomMenuDatatableComponent
},
{
  path:'order_setup',
  component:OrderSetupNewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
