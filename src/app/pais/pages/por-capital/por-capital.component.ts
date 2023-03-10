import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino   : string      = '';
  hayError  : boolean     = false;
  paises    : Country[]   = [];
  mostrarSugerencias: Boolean = false;
  paisesSugeridos: Country[] = [];
  constructor( private paisService: PaisService ) { }

  buscar ( termino: string ): void {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarCapital(this.termino).subscribe({
      next: (listadoPaises) => { this.paises = listadoPaises },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    })
  }
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarCapital( termino )
      .subscribe ( {
        next:  (paises => this.paisesSugeridos = paises.splice( 0,3 )),
        error: (err => this.paisesSugeridos = [])
      });

  }

  buscarSugerido( termino:string ) {
    this.mostrarSugerencias = false;
    this.buscar(termino);
  }

  ngOnInit(): void {
  }

}
