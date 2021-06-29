import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import {filter, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

const withoutHeaderStates = ['notFound']
@UntilDestroy()
@Component({
  selector: 'mbg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHeaderShow: boolean = true;
  constructor(private router: Router) {
    this.router.events.pipe(
      untilDestroyed(this),
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      tap((e: NavigationEnd) => this.isHeaderShow = !withoutHeaderStates.includes(e.url)),
    ).subscribe();
  }
}
