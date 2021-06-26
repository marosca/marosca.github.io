import { Component, ElementRef, EventEmitter, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import * as lottie from 'lottie-web/build/player/lottie'
import { Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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

	isBrowser = isPlatformBrowser(this.platformId)

	private lampara:any;
	private maletin:any;
	private telefono:any;

	isOpen = false

	constructor(@Inject(PLATFORM_ID) public platformId: Object) {
	}

	ngOnInit() {
		if (!this.isBrowser) return
			this.lampara = lottie.default.loadAnimation({
			container: document.getElementById('lampara') as HTMLElement,
			renderer: 'svg',
			loop: true,
			autoplay: false,
			path: 'assets/icons/lampara/lampara_ani.json'
			});
			this.maletin = lottie.default.loadAnimation({
				container: document.getElementById('maletin') as HTMLElement,
				renderer: 'svg',
				loop: true,
				autoplay: false,
				path: 'assets/icons/maletin/maletin_ani.json'
			});
			this.telefono = lottie.default.loadAnimation({
				container: document.getElementById('telefono') as HTMLElement,
				renderer: 'svg',
				loop: true,
				autoplay: false,
				path: 'assets/icons/telefono/telefono_ani.json'
			});
	}

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
		this.isOpen = false
	}

	openNavBar() {
		this.navBar.nativeElement.classList.remove('cerrar')
		this.navBar.nativeElement.classList.add('abrir')
		this.isOpen = true
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

	goToSection(section: string) {
		this.onGoSection.emit(section);
		this.	closeNavBar()
	}
}
