import { Injectable } from '@angular/core';
import { FitterService } from '../../../services/fitter.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class TabelaFitterResolverService implements Resolve<any> {

  
  constructor(private fitterService: FitterService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.fitterService.getList().map(fitters => fitters);
  }
}
