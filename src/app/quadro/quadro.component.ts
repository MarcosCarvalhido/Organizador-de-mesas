import { Component } from '@angular/core';
import { Mesa } from '../const';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent {
  public mesas:Mesa[] = [
    {
      mestre: 'Marcos',
      descricao:{
        aventura:'Ilha dos corvos',
        sistema:'Tagmar'
      }
    },
    {
      mestre: 'Lucas',
      descricao:{
        aventura:'Arado de ouro',
        sistema:'Tagmar'
      }
    },
  ];
}
