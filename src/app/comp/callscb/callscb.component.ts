import { Component, OnInit } from '@angular/core';
import { HttpscbService } from '../../serv/httpscb.service';

import { Menuscb } from '../../models/menuscb';
import { Variablescb } from '../../models/variablescb';
import { Query } from '../../models/query';



@Component({
  selector: 'app-callscb',
  templateUrl: './callscb.component.html',
  styleUrls: ['./callscb.component.css']
})
export class CallscbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
