import { Component, OnInit, Input ,EventEmitter, Output } from '@angular/core';

import { Menuscb } from 'src/app/models/menuscb';

@Component({
  selector: 'app-menu-scb-item',
  templateUrl: './menu-scb-item.component.html',
  styleUrls: ['./menu-scb-item.component.css']
})
export class MenuScbItemComponent implements OnInit {

  @Input() menuSCB:Menuscb;
  @Output() deleteMenu: EventEmitter<Menuscb> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  newMenu(menuSCB:Menuscb)
  {
      
      this.deleteMenu.emit(menuSCB);
  }

}
