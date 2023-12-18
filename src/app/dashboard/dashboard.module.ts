import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';


import { TimelineComponent } from '../timeline/timeline.component';
import { MatButton } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DashboardComponent,
        TimelineComponent,
        FooterComponent,
        NavbarComponent,
        TimelineComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonModule,
        MatIconModule,
        NzPopoverModule,
        MatButtonModule,
        MatRippleModule,
        MatButtonModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatMenuModule,
        RouterModule
    ],
    exports: [
        DashboardComponent
    ]

})
export class DashboardModule { }
