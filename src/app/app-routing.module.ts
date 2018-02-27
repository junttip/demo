import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FeedbackComponent } from './feedback/feedback.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RoomModule } from './room/room.module';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room/room-list/room.list.component';
import { RoomDetailComponent } from './room/room-list/detail/room.detail.component';

const routes: Routes=[
	{path:'feedback',component:AddfeedbackComponent},
	{path: '', component: HomeComponent},
	{path: 'schedule', component: ScheduleComponent},
	{path: 'room',
      component: RoomComponent,
	  children: [ 
	    {
		    path: '',
		    component: RoomListComponent,
		    children: [
		       {
			       path: ':id',
		           component: RoomDetailComponent
			   }
		    ]			
		}
	  ]},
	{path:'**',redirectTo: '' }
	  ];
	  
	  	  /* {path:'feedback',component:FeedbackComponent},
	{path: '', component: HomeComponent},
	{path: 'map', loadChildren: 'app/room/room.module#RoomModule'},
	{path: 'schedule', component: ScheduleComponent},
	{path:'**',redirectTo: '' }
	  ];
	  */

      /*
const routes: Routes = [
	{
	   path: 'info',
	   component: InfoComponent,
	   
	},

	{
	   path: 'room',
       loadChildren: 'app/room/room.module#RoomModule',
       data: { preload: true }
	},	
	{
	   path: '',
	   redirectTo: '/room',
	   pathMatch: 'full'
	},
    {
	   path: '**',
	   redirectTo: '' 
    }	
];
*/
@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 