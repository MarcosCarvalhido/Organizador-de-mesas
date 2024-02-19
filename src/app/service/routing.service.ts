import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Navigation {
  url: string;
  route: string[];
  navigate: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private _router: Router
    ) { }

  public getMesaNavigation(args: {
    mesaUri: string;
  }): Navigation {
    return this._buildNavigation('info',[
      args.mesaUri
    ]);
  }
  private _buildNavigation(space: string, parts: string[]): Navigation {
    const route = [
      '/' + space,
      ...parts
    ];
    return {
      route,
      url: `/${space}/` + parts.map(el => encodeURIComponent(el)).join('/'),
      navigate: () => this._router.navigate(route)
    };
  }
}
