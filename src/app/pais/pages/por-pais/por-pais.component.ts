import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  err    : boolean;
  paises : Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.err = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe(
        (resp: Country[]) => {
          this.paises = resp; },
        (err) => { 
          this.err=true;
          this.paises = [];
        });
  }

  sugerencias(termino: string){
    this.err = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
    (err) => this.paisesSugeridos = []);
  }

  buscarSugerido(termino) {
    this.buscar(termino);
  }

}
