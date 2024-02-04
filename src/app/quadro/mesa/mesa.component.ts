import { Component, Input } from '@angular/core';
import { Mesa } from '../../const';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent {
  @Input() mesa : Mesa|null = null; 

  constructor(private router: Router) {}
  public abrirInformacoes(){
    if(!this.mesa){
      return;
    }
    console.log('/info/' + this.mesa.uri)
    const uri = '/info:' + 
    this.router.navigate(['/info:' + this.mesa.uri]);
  }
}
