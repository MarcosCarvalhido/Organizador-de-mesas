import { Component, Input } from '@angular/core';
import { Mesa } from '../../const';
import { Router } from '@angular/router'
import { RoutingService } from 'src/app/service/routing.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',

  styleUrls: ['./mesa.component.css']
})
export class MesaComponent {
  @Input() mesa : Mesa | null = null;

  constructor(
    private router: Router,
    private _routingService: RoutingService
    ) {}
  public abrirInformacoes(){
    if(!this.mesa){
      return;
    }
    this._routingService.getMesaNavigation({mesaUri: this.mesa.uri}).navigate();
  }
}
