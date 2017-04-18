import { ICricketList } from './../interface/cricketer-list';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cricketers-list',
  templateUrl: './cricketers-list.component.html',
  styleUrls: ['./cricketers-list.component.css']
})
export class CricketerComponent implements OnInit {

  /**Get the cricketerDetail from cricketer-app  */
  @Input() criketerDetail;

  criketerList: ICricketList;

  constructor() { }

  ngOnInit() {}

}
