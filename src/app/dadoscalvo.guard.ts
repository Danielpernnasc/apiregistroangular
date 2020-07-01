import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BancocalvoService } from './api';

@Injectable ({
    providedIn: 'root'
})

export class DadosCalvo implements CanActivate{
    constructor(private bancocalvoservice: BancocalvoService, private router: Router) {}
canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const routeurl: string = state.url;
    return this.isLogin(routeurl)
    }

    isLogin(routeurl: string) {
    if (this.bancocalvoservice.isLoggedIn()) {
    return true;
    }

    this.bancocalvoservice.redirectUrl = routeurl;
    this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
    }
}