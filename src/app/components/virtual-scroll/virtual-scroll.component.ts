import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  items = Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

}
