import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'marosca-proyecto',
	templateUrl: './proyecto.component.html',
	styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

	proyecto:any;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _proyectosService:ProyectosService) { }

		ngOnInit() {
			this._activatedRoute.params.subscribe( params => {
				this.proyecto = this._proyectosService.getDetalleProyecto(params.url);
			});

			window.scroll({top: 0});
		}
	}
