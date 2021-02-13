import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
  // 2da forma
  this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais);

    // 1ra forma
    /* this.activatedRoute.params
    .subscribe(({id}) => {
      console.log(id);
      this.paisService.getPaisPorAlpha(id)
        .subscribe((resp) => {
          console.log(resp);
          
        });
    }); */
  }

}
