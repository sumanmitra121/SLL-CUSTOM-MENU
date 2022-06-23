import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminOrderPageSetUpComponent } from './Laguna_Admin/admin-order-page-set-up/admin-order-page-set-up.component';
import { AdmindashboardComponent } from './Laguna_Admin/admindashboard/admindashboard.component';
import { HomeComponent } from './Laguna_Admin/home/home.component';
import { AdminHeaderComponent } from './Laguna_Admin/Commonforadmin/header/header.component';
import { SidebarComponent } from './Laguna_Admin/Commonforadmin/sidebar/sidebar.component';
import { FooterComponent } from './Laguna_Admin/Commonforadmin/footer/footer.component';
import { RestaurentComponent } from './Laguna_Admin/restaurent/restaurent.component';
import { AdminOrderPageComponent } from './Laguna_Admin/order-page/order-page.component';
import { SalesAgentComponent } from './Laguna_Admin/sales-agent/sales-agent.component';
import { MenuSetUpComponent } from './Laguna_Admin/menu-set-up/menu-set-up.component';

import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MenuComponent } from './Restaurant/menu/menu.component';
import { LogosetupComponent } from './Restaurant/logosetup/logosetup.component';
import { SectionimagesComponent } from './Restaurant/sectionimages/sectionimages.component';
import { DisplaydaytimeComponent } from './Restaurant/displaydaytime/displaydaytime.component';
import { MenudataComponent } from './Restaurant/menudata/menudata.component';
import { ToastrModule } from 'ng6-toastr-notifications';






import { LoginComponent } from './Restaurant/reg_log/login/login.component';
import { RegistrationComponent } from './Restaurant/reg_log/registration/registration.component';
import { ForgotPassComponent } from './Restaurant/reg_log/forgot-pass/forgot-pass.component';
import { PaymentPageComponent } from './Restaurant/reg_log/payment-page/payment-page.component';
import { OrderPageComponent } from './Restaurant/reg_log/order-page/order-page.component';
import { HeaderComponent } from './Restaurant/reg_log/common/header/header.component';
import { SideBarComponent } from './Restaurant/reg_log/common/side-bar/side-bar.component';
import { MenuSetupComponent } from './Restaurant/menu-setup/menu-setup/menu-setup.component';
import { DashboardComponent } from './Restaurant/after_login/dashboard/dashboard.component';
import { ChangepassComponent } from './Restaurant/reg_log/changepass/changepass.component';
import { MenuSetupSidebarComponent } from './common/menu-setup-sidebar/menu-setup-sidebar.component';
import { RestaurantSetupComponent } from './Laguna_Admin/restaurant-setup/restaurant-setup.component';
import { AdminloginComponent } from './Laguna_Admin/adminlogin/adminlogin.component';

import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { ConfirmationmailComponent } from './Restaurant/confirmationmail/confirmationmail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user/user-menu/user-menu.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImageCropperModule } from 'ngx-image-cropper';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SidebarpaymentComponent } from './Restaurant/reg_log/common/sidebarpayment/sidebarpayment.component';
import { AfterloginsidebarComponent } from './Restaurant/after_login/commonafterlogin/afterloginsidebar/afterloginsidebar.component';
import { AfterloginheaderComponent } from './Restaurant/after_login/commonafterlogin/afterloginheader/afterloginheader.component';
import { EventCalendarComponent } from './Restaurant/after_login/event-calendar/event-calendar.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { EventsRestaurantlistComponent } from './Laguna_Admin/events-restaurantlist/events-restaurantlist.component';
import { EventcalendarComponent } from './Laguna_Admin/event-calendar/event-calendar.component';
import {MatMenuModule} from '@angular/material/menu';
import { PromotionComponent } from './Restaurant/after_login/promotion/promotion.component';
import { AccountComponent } from './Restaurant/after_login/account/account.component';
import { RestPromoComponent } from './Laguna_Admin/rest-promo/rest-promo.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { CreateMenusComponent } from './Restaurant/create-menus/create-menus.component';
import { AdditionalproductComponent } from './Restaurant/after_login/additionalproduct/additionalproduct.component';
import { PaysaveComponent } from './Restaurant/after_login/paysave/paysave.component';
import {MatButtonModule} from '@angular/material/button';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UserCalendarComponent } from './user/user-calendar/user-calendar.component';
import { UserCalDtlsComponent } from './user/user-cal-dtls/user-cal-dtls.component';
import { NoLinkComponent } from './Restaurant/reg_log/no-link/no-link.component';
import {ConnectionServiceModule} from 'ngx-connection-service';
import { LagunaFunComponent } from './user/laguna-fun/laguna-fun.component';
import { CommonSectionComponent } from './user/common-section/common-section.component';
import { LagunafunRestaurantComponent } from './lagunafun-restaurant/lagunafun-restaurant.component';
import { LagunafunRestComponent } from './user/lagunafun-rest/lagunafun-rest.component';
import { LagunafunBarComponent } from './user/lagunafun-bar/lagunafun-bar.component';
import { ConfirmedPayComponent } from './Restaurant/reg_log/confirmed-pay/confirmed-pay.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomMenuDatatableComponent } from './Laguna_Admin/custom-menu-datatable/custom-menu-datatable.component';
import { OrderSetupNewComponent } from './Laguna_Admin/order-setup-new/order-setup-new.component';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  // timeGridPlugin,
  // listPlugin,


]);
@NgModule({
  declarations: [
    AppComponent,
    EventsRestaurantlistComponent,
    EventcalendarComponent,
    AdminOrderPageSetUpComponent,
    AdmindashboardComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RestaurentComponent,
    OrderPageComponent,
    SalesAgentComponent,
    MenuSetUpComponent,
    AdminHeaderComponent,
    AdminOrderPageComponent,
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPassComponent,
    PaymentPageComponent,
    OrderPageComponent,
    HeaderComponent,
    SideBarComponent,
    MenuSetupComponent,
    DashboardComponent,
    ChangepassComponent,
    MenuSetupSidebarComponent,
    RestaurantSetupComponent,
    AdminloginComponent,
    AdminHeaderComponent,
    AdminOrderPageComponent,
    AppComponent,
    LoginComponent,
    // RegistrationComponent,
    ForgotPassComponent,
    PaymentPageComponent,
    OrderPageComponent,
    HeaderComponent,
    SideBarComponent,
    MenuSetupComponent,
    DashboardComponent,
    ChangepassComponent,
    MenuSetupSidebarComponent,
    MenuComponent,
    LogosetupComponent,
    SectionimagesComponent,
    DisplaydaytimeComponent,
    MenudataComponent,
    RestaurantSetupComponent,
    ThankyoupageComponent,
    ConfirmationmailComponent,
    UserMenuComponent,
    SidebarpaymentComponent,
    AfterloginsidebarComponent,
    AfterloginheaderComponent,
    EventCalendarComponent,
    PromotionComponent,
    AccountComponent,
    RestPromoComponent,
    CreateMenusComponent,
    AdditionalproductComponent,
    PaysaveComponent,
    UserCalendarComponent,
    UserCalDtlsComponent,
    NoLinkComponent,
    LagunaFunComponent,
    CommonSectionComponent,
    LagunafunRestaurantComponent,
    LagunafunRestComponent,
    LagunafunBarComponent,
    ConfirmedPayComponent,
    LandingPageComponent,
    CustomMenuDatatableComponent,
    OrderSetupNewComponent

  ],


  //********** */

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    AngularEditorModule,
    HttpClientModule,
    MatSlideToggleModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MatMenuModule,
    MatTooltipModule,
    ImageCropperModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule ,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatTableExporterModule,
    MatButtonModule,
    ConnectionServiceModule
  ],
  exports:[CommonModule],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})

export class AppModule { }



