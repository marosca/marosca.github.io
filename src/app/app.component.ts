import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marosca-web';

  constructor(
		private _router:Router) { }

	ngOnInit() {}

  goToSection(section: string) {
    this._router.navigate([ "/home"]).then( () => {
      setTimeout(()=> {
        this.scrollTo(section)
      },200);
    });
  }

  scrollTo(elementQuery: string) {
    const element = document.querySelector(elementQuery)
    if (element) {
      element.scrollIntoView({ 
        block: 'start', 
        behavior: 'smooth' 
      })
    }
  }
}
