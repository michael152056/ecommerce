import { Injectable, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TimeService } from '../services/time.service';

@Injectable({
  providedIn: 'root'
})
export class TimeGuardGuard implements CanActivate {

  constructor(private _timeService: TimeService) {
   
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  
}
