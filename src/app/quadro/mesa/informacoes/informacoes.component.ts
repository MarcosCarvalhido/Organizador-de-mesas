import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mesa } from 'src/app/const';
import { MesasService } from 'src/app/service/mesas.service';

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [],
  templateUrl: './informacoes.component.html',
  styleUrl: './informacoes.component.css'
})
export class InformacoesComponent implements OnInit {

  public static routeParamKey = 'mesaURI';
  public mesa:Mesa|null = null;

  public mesaURI:string|null = null;
  constructor(
    activatedRoute: ActivatedRoute,
    private _mesaService: MesasService
  ) {
    const activatedRouteSnapshot = activatedRoute.snapshot;
    this.mesaURI = decodeURI(activatedRouteSnapshot.params[InformacoesComponent.routeParamKey])
  }

  ngOnInit(): void {
    if(!this.mesaURI){
      return;
    }
    
    this.mesa = this._mesaService.getMesa(this.mesaURI);
  }
}
