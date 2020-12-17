import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) myViewPort: CdkVirtualScrollViewport;

  items = Array(500).fill(0);


  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

  irFinal(): void {
    this.myViewPort.scrollToIndex(this.items.length);
  }

  irInicio(): void {
    this.myViewPort.scrollToIndex(0);
  }

  irMedio(): void {
    this.myViewPort.scrollToIndex(this.items.length / 2);
  }

}
