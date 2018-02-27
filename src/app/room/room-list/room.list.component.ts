import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RoomService } from '../service/room.service';
import { Room } from '../room';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  templateUrl: './room.list.component.html'
}) 
export class RoomListComponent implements OnInit { 
  rooms: Promise<Room[]>;

  currentRoom: string;
  currentNumber: string;

  constructor(		
        private roomService: RoomService,
        private route: ActivatedRoute,
        private router: Router) {}
  ngOnInit() {
      this.rooms = this.roomService.getRooms();
      this.currentRoom = null;
      this.currentNumber = null;
  }	
  goToDetail(n:number, p:string, num:string) {
    
    //Tarkistetaan onko jo jokin huone valittuna, palautetaan siihen punainen
    if (this.currentRoom != null){
      document.getElementById(this.currentRoom).style.fill = '#991F3D';
    }
    // ja numeroon keltainen
    if (this.currentNumber != null){
      document.getElementById(this.currentNumber).style.fill = '#F2A200';
    }

    //valittu huone keltaiseksi
    document.getElementById(p).style.fill = '#F2A200';
    //ja numero punaiseksi
    document.getElementById(num).style.fill = '#991F3D';
    
    // talteen valinta, jotta voidaan palauttaa oikea punaiseksi
    // kun valitaan seuraava huone
    this.currentRoom=p;
    this.currentNumber=num;
    this.router.navigate([ n ], { relativeTo: this.route });
  }
}
    