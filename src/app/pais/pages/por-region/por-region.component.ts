import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'australia'];
  regionActiva : string = '';
  paises: Country[] = [];
  region: string ="";
  hayError: boolean = false;

  constructor( private paisService: PaisService  ) { }

  getClaseCSS( region: string): string{
    return (region=== this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion ( region: string ){
    if ( region === this.regionActiva) { return }
    this.regionActiva = region;
    this.paises= [];
    //TODO hacer la carga del servicio
  }

  buscar ( region: string): void {
    if ( region === this.regionActiva) { return }
    this.region = region;
    this.paisService.buscarregion(this.region).subscribe({
      next: ( paisList =>{
        this.hayError = false;
        this.paises = paisList;
        console.log(this.paises)
      }),
      error: ( err => {
        this.hayError = true
      })
    })

  }

  ngOnInit(): void {
  }

}
