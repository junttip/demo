import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { RoomService } from '../../service/room.service';
import { Room } from '../../room';

@Component({
    templateUrl: './room.detail.component.html', 
    styleUrls: ['./room.detail.component.css']
  })  
export class RoomDetailComponent implements OnInit { 
    room: Room;
	constructor(
		private roomService: RoomService,
		private route: ActivatedRoute,
        private router: Router) { }
		
    ngOnInit() {
       this.route.params
        .switchMap((params: Params) => this.roomService.getRoom(+params['id']))
        .subscribe(room => {
		            this.room = room;
				}
		 );
    }
}