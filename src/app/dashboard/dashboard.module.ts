import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { TimelineComponent } from '../timeline/timeline.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        DashboardComponent,
        TimelineComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
    ]
})
export class DashboardModule { }