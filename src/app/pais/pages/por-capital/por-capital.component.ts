import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  err    : boolean;
  paises : Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void { }

  buscar(termino: string) {
    this.err = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe(
        (resp: Country[]) => {
          this.paises = resp; },
        (err) => { 
          this.err=true;
          this.paises = [];
        });
  }

}
