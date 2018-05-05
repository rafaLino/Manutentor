import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { FitterService } from '../../../services/fitter.service';

@Injectable()
export class FitterResolverService implements Resolve<any> {

  
  constructor(
    private fitterService: FitterService,
    private activatedRoute: ActivatedRoute
  ) { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var id = +this.activatedRoute.snapshot.paramMap.get('servicetype');
    return this.fitterService.getByServiceType(id).map(fitters => fitters);
  }
}
