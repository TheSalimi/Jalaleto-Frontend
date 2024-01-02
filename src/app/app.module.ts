import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SignupModule } from './sign-up/sign-up.module';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddNewEventReminderComponent } from './timeline/add-new-event-reminder/add-new-event-reminder.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { AboutUsModule } from './about-us/about-us.module';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from "./shared/persion-date.adapter";
import { CreateGroupDialogComponent } from './create-group-dialog/create-group-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr'
import { ContactUsModule } from './contact-us/contact-us.module';
import { RulesModule } from './rules/rules.module';
import { WorkWithUsModule } from './work-with-us/work-with-us.module';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { NzListModule } from 'ng-zorro-antd/list';





@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    NewPasswordComponent,
    LoginComponent,
    AddNewEventReminderComponent,
    CreateGroupDialogComponent,
    GroupsPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    DashboardModule,
    MatDialogModule,
    MatChipsModule,
    NgxMatTimepickerModule,
    MatMenuModule,
    SignupModule,
    ProfileModule,
    MatDialogModule,
    MatChipsModule,
    NgxMatTimepickerModule,
    MatIconModule,
    ToastrModule.forRoot(),
    AboutUsModule,
    ContactUsModule,
    RulesModule,
    WorkWithUsModule,
    NzListModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DatePipe,
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
