import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { CricketerService } from 'app/services/cricketer.service';
import { ICricketList } from './interface/cricketer-list';
import { IPlayerType } from 'app/interface/player-type';
import { CriketerDropDownService } from 'app/services/criketer-drop-down.service';

@Component({
  selector: 'app-root',
  templateUrl: './cricketer-app.component.html',
  styleUrls: ['./cricketer-app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [CricketerService]
})

export class AppComponent implements OnInit {
  /**Public variable */
  cricketersArray: ICricketList[] = []
  playerType: IPlayerType[] = [];

  firstName: string;
  lastName: string;
  favShot: string;
  batmanBowler: string;
  cricketerDetail: ICricketList;

  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _cricketService: CricketerService, private _cricketerDropDown: CriketerDropDownService) { }

  ngOnInit() {
    this.playerType = this._cricketerDropDown.getPlayerType();
  }

  /**Add a cricket */
  addCricketer(first, last, shot, batsmanBowler) {

    this.cricketerDetail = {
      firstName: first,
      lastName: last,
      favShot: shot,
      batsmanBowler: batsmanBowler
    };

    /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    this.cricketersArray = this._cricketService.getCricket();
  }

}
