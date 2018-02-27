import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { RoomComponent }  from './room.component';
import { RoomListComponent }  from './room-list/room.list.component';
import { RoomDetailComponent }  from './room-list/detail/room.detail.component';
import { RoomService } from './service/room.service';
import { RoomRoutingModule }  from './room-routing.module';

@NgModule({
  imports: [     
        CommonModule,
		ReactiveFormsModule,
		RoomRoutingModule
  ], 
  declarations: [
		RoomComponent,
		RoomListComponent,
		RoomDetailComponent
  ],
  providers: [ RoomService ]
})
export class RoomModule { }
