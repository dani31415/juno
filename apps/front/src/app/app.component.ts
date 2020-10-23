import { Component } from '@angular/core';
import { Router, ActivationEnd, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'juno-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  text = 'text';
  title = 'front';
  public rootPath : string;

  constructor(private router: Router) {
    // Retrieve root path
    this.router.events.subscribe((event: ActivationEnd) => {
      if (event.snapshot && event.snapshot.routeConfig) {
        let snapshot: ActivatedRouteSnapshot;
        snapshot = event.snapshot;
        while (snapshot.parent.routeConfig!=null) {
          snapshot = snapshot.parent;
        }
        this.rootPath = snapshot.routeConfig.path;
      }
    });
  }
}
