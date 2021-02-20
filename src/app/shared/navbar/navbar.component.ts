import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import * as bodymovin from 'bodymovin';
import { Output } from '@angular/core';

@Component({
	selector: 'marosca-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	@ViewChild('navBar', { static: false })
  navBar!: ElementRef;

	@Output()
  onGoSection: EventEmitter<string> = new EventEmitter()

	private lampara:any;
	private maletin:any;
	private telefono:any;

	isOpen = false

	constructor() {}

	toogleNavBar(isNavBarOpen: boolean) {
		this.isOpen = isNavBarOpen
		if (isNavBarOpen) {
			this.openNavBar()
		} else {
			this.closeNavBar()
		}
	}

	closeNavBar() {
		this.navBar.nativeElement.classList.remove('abrir')
		this.navBar.nativeElement.classList.add('cerrar')
	}

	openNavBar() {
		this.navBar.nativeElement.classList.remove('cerrar')
		this.navBar.nativeElement.classList.add('abrir')
	}

	playSvg(icon:string){

		switch( icon ) {
			case 'lampara':
				this.lampara.play();
				break;
			case 'maletin':
				this.maletin.play();
				break;
			case 'telefono':
				this.telefono.play();
				break;
		}
	}

	stopSvg(icon:string){

		switch( icon ){
			case 'lampara':
				this.lampara.stop();
				break;
			case 'maletin':
				this.maletin.stop();
				break;
			case 'telefono':
				this.telefono.stop();
				break;
		}
	}

	ngOnInit() {
		this.lampara = bodymovin.loadAnimation({
			container: document.getElementById('lampara'),
			renderer: 'svg',
			loop: true,
			autoplay: false,
			path: 'assets/icons/lampara/lampara_ani.json'
		});
		this.maletin = bodymovin.loadAnimation({
			container: document.getElementById('maletin'),
			renderer: 'svg',
			loop: true,
			autoplay: false,
			path: 'assets/icons/maletin/maletin_ani.json'
		});
		this.telefono = bodymovin.loadAnimation({
			container: document.getElementById('telefono'),
			renderer: 'svg',
			loop: true,
			autoplay: false,
			path: 'assets/icons/telefono/telefono_ani.json'
		});
	}
}
