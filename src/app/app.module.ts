import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent }  from './app.component';

import { HeaderComponent } from './header/header.component';

import { HomeModule } from './home/home.module';
//import { FeedbackModule }  from './feedback/feedback.module';
import { RoomModule }  from './room/room.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AppRoutingModule }  from './app-routing.module';
import { HomeComponent } from './home/home.component';
//import { FeedbackComponent } from './feedback/feedback.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FooterComponent } from './footer/footer.component';
import { RoomComponent } from './room/room.component';
//import { AddfeedbackComponent } from './feedback/addfeedback/addfeedback.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';

@NgModule({
  imports: [     
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule, 
      MatCheckboxModule,
      MatMenuModule,
      MatIconModule,
      FlexLayoutModule,
      RoomModule,
      AppRoutingModule,
      HomeModule,
      ScheduleModule,
      //FeedbackModule,
      MatPaginatorModule
  ],
  declarations: [
      AppComponent, 
      HeaderComponent,
      //HomeComponent,
      //FeedbackComponent,
      //ScheduleComponent,
      FooterComponent,
      AddfeedbackComponent
      //AddfeedbackComponent 
  ],

  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
