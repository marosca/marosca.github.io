import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/data/proyectos.data';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
	selector: 'marosca-proyectos',
	templateUrl: './proyectos.component.html',
	styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

	proyectos!: Proyecto[];

	constructor(private _proyectosService:ProyectosService) { }

	ngOnInit() {
		this.proyectos = this._proyectosService.proyectos;
	}

	getRoute(proyecto: Proyecto) {
		return ['/proyecto', `${proyecto.url}` ]
	}

}
