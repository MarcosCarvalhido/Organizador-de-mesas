import { Component, OnInit } from '@angular/core';
import { Mesa } from '../const';
import { MesasService } from '../service/mesas.service'

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent  implements OnInit {

  public mesas:Mesa[] =[];
  constructor(
    private _mesaService: MesasService
  ) {}

  ngOnInit(): void {
   this.mesas = this._mesaService.LoadMesas()
  }
}
