import { Injectable } from '@angular/core';

import      { Room } from '../room';

const ROOMS = [
  new Room(1, '1 room', 'Lobby', 'Cloakroom open 10:00-22:00', '#9932cc'),
  new Room(2, '2 room', 'Lobby', 'Cloakroom open 10:00-22:00 \n Lost and Found (puh. 010101010)', '#00f'),  
	new Room(3, '3 room', 'Helsinki hall', 'klo 12:00-13:00 Show abc \n klo 15:00-16:00 Show 123', '#dc143c'),
	new Room(4, '4 room', 'Lobby', '', '#3090C7'),
	new Room(5, '5 room', 'Orcester lobby', '', '#9932cc'),
  new Room(6, '6 room', 'Exit F', '', '#00f'),  
	new Room(7, '7 room', 'Stage', '', '#dc143c'),
	new Room(8, '8 room', 'Finlandia hall', 'klo 13:30-14:00 Discourse: Matti Meikäläinen \n klo 18:00-20:00 Orcester', '#3090C7'),
	new Room(9, '9 room', 'Piazza', 'klo 10:00-14:00 Buffet: Bruch \n klo 17:00-20:00 Buffet: Pizza-buffet', '#9932cc'),
  new Room(10, '10 room', 'Piazza', 'Juicebar open klo 11:00-21:00', '#00f'),  
	new Room(11, '11 room', 'Piazza', '', '#dc143c'),
	new Room(12, '12 room', 'Piazza', 'klo 10:00-14:00 Buffet: Brunch \n klo 17:00-20:00 Buffet: Salad-buffet', '#3090C7'),
	new Room(13, '13 room', 'Kitchen', '', '#9932cc'),
  new Room(14, '14 room', 'Piazza', 'klo 15:00 Lottery \n 16:00-20:30 Onnenpyörä Game', '#00f'),  
	new Room(15, '15 room', 'Piazza', 'klo 10:00-11:00 Bingo \n klo 17:00-18:00 Bingo', '#dc143c'),
	new Room(16, '16 room', 'Piazza', 'Info', '#3090C7'),
	new Room(17, '17 room', 'Kahvila', 'Cafe open 11:00-17:00', '#9932cc'),
  new Room(18, '19 room', 'Baari', 'Vichy-bar open 17:00-21:00 ', '#00f'), 

];
/*
const ROOMSFI = [
  new Room(1, '1 huone', 'Aulatila', 'Narikkapalvelu avoinna klo 10:00-22:00', '#9932cc'),
  new Room(2, '2 huone', 'Aulatila', 'Narikkapalvelu avoinna klo 10:00-22:00 \n Lost and Found (puh. 010101010)', '#00f'),  
	new Room(3, '3 huone', 'Helsinkisali', 'klo 12:00-13:00 Esitys abc \n klo 15:00-16:00 Esitys 123', '#dc143c'),
	new Room(4, '4 huone', 'Sisääntuloaula', '', '#3090C7'),
	new Room(5, '5 huone', 'Orkesteri lämpiö', '', '#9932cc'),
  new Room(6, '6 huone', 'Uloskäynti F', '', '#00f'),  
	new Room(7, '7 huone', 'Lava', '', '#dc143c'),
	new Room(8, '8 huone', 'Finlandiasali', 'klo 13:30-14:00 Puheenvuoro: Matti Meikäläinen \n klo 18:00-20:00 Orkesteri', '#3090C7'),
	new Room(9, '9 huone', 'Piazza', 'klo 10:00-14:00 Buffet: Brunssi \n klo 17:00-20:00 Buffet: Pizza-buffet', '#9932cc'),
  new Room(10, '10 huone', 'Piazza', 'Mehubaari avoinna klo 11:00-21:00', '#00f'),  
	new Room(11, '11 huone', 'Piazza', '', '#dc143c'),
	new Room(12, '12 huone', 'Piazza', 'klo 10:00-14:00 Buffet: Brunssi \n klo 17:00-20:00 Buffet: Salaatti-buffet', '#3090C7'),
	new Room(13, '13 huone', 'Keittiö', '', '#9932cc'),
  new Room(14, '14 huone', 'Piazza', 'klo 15:00 Arvonta \n klo 16:00-20:30 Onnenpyöräpeli', '#00f'),  
	new Room(15, '15 huone', 'Piazza', 'klo 10:00-11:00 Bingo \n klo 17:00-18:00 Bingo', '#dc143c'),
	new Room(16, '16 huone', 'Piazza', 'Tapahtuma-info', '#3090C7'),
	new Room(17, '17 huone', 'Kahvila', 'Kahvio avoinna klo 11:00-17:00', '#9932cc'),
  new Room(18, '19 huone', 'Baari', 'Vichy-baari avoinna klo 17:00-21:00 ', '#00f'), 


];*/
let roomsPromise = Promise.resolve(ROOMS);

@Injectable()
export class RoomService { 
	getRooms(): Promise<Room[]> {
	    return roomsPromise;
	}
	getRoom(id: number): Promise<Room> {
        return this.getRooms()
            .then(rooms => rooms.find(room => room.roomId === id));
    }	
    updateRoom(room: Room): Promise<Room> {
		return this.getRooms()
		  .then(rooms => {
		        let roomObj = rooms.find(ob => ob.roomId === room.roomId);
						roomObj = room;
				return roomObj;
			}
		  );
    }	
}