import { Injectable } from '@angular/core';
import { PROYECTOS } from '../data/proyectos.data';


@Injectable()
export class ProyectosService {

	proyectos:any[] = [];
	proyecto:any;

	constructor() {
		this.proyectos = PROYECTOS.slice(0);
	}

	getProyectos(){
		return this.proyectos;
	}

	getDetalleProyecto( url:string ){
		this.proyecto = this.getProjectByUrl(url)
		return this.proyecto;
	}

	getProjectByUrl(url: string) {
		return this.proyectos.find(p => p.url === url)
	}

}
