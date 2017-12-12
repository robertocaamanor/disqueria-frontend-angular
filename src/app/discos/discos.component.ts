import { Component, OnInit } from '@angular/core';
import { Disco } from "../disco.interface";

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.css']
})
export class DiscosComponent implements OnInit {
	discos: Disco[];
  constructor() { }

  ngOnInit() {
  }

}
