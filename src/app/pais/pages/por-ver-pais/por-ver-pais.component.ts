import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-ver-pais',
  templateUrl: './por-ver-pais.component.html',
  styles: [
  ]
})
export class PorVerPaisComponent implements OnInit {

  pais: Country[]   = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,

    ) { }

  ngOnInit(): void {

  this.activatedRoute.params
    .pipe(
      switchMap(( { id } )=> {return this.paisService.getPaisPorAlpha( id )}),
      tap( (resp ) => console.log ( resp))
    )
    .subscribe({
      next: (( res ) =>  {
        this.pais = res;
        console.log(this.pais)
      } )
    })

    //   this.activatedRoute.params
  //     .subscribe({
  //       next: ({ id }) => {
  //           console.log(id);

  //           this.paisService.getPaisPorAlpha( id )
  //               .subscribe({
  //                 next: (pais) => { console.log(pais)}
  //               })

  //       }
  //     })


  }

}
