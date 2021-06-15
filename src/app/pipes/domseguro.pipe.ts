import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

	constructor( private _domSanitizer:DomSanitizer ) {}

	transform(value: any, url?: string): any {
		if (url) {
			return this._domSanitizer.bypassSecurityTrustResourceUrl( url + value );
		} else {
			return this._domSanitizer.bypassSecurityTrustHtml( value );
		}
	}

}
