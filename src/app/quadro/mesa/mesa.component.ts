import { Component, Input } from '@angular/core';
import { Mesa } from '../../const';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent {
  @Input() mesa : Mesa|null = null; 
}
