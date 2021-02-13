import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
