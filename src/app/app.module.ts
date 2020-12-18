import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { DragComponent } from './components/drag/drag.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PaisesComponent } from './components/paises/paises.component';


@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
