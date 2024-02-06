import { Injectable } from '@angular/core';
import { Mesa } from '../const';

@Injectable({
  providedIn: 'root'
})
export class MesasService {
  public mesas:Mesa[] = [
    {
      mestre: 'Marcos',
      uri: 'mesa-marcos',
      descricao:{
        aventura:'Ilha dos corvos',
        sistema:'Tagmar'
      }
    },
    {
      mestre: 'Lucas',
      uri:'mesa-lucas',
      descricao:{
        aventura:'Arado de ouro',
        sistema:'Tagmar'
      }
    },
  ];
  constructor() { }

  public LoadMesas(): Mesa[] {
    return this.mesas;
  }

  public getMesa(mesaUri: string): Mesa | null {
    const mesa = this.mesas.find(el => el.uri === mesaUri)
    if (mesa) {
      return mesa;
    }
    return null;
  }

}
