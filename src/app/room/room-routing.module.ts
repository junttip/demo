import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomComponent }  from './room.component';
import { RoomListComponent }  from './room-list/room.list.component';
import { RoomDetailComponent }  from './room-list/detail/room.detail.component';

const roomRoutes: Routes = [
	{ 
	  path: 'room',
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
	  ]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(roomRoutes) ],
  exports: [ RouterModule ]
})
export class RoomRoutingModule{ }
