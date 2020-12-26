import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises = [];

  constructor(private countriesService: PaisesService) { }

  ngOnInit(): void {

    this.countriesService.getCountries()
            .subscribe(resp => {
              console.log(resp);
              this.paises = resp;
            });
  }


  drop(evento: CdkDragDrop<any>): void {
    console.log(evento);

    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }

}
