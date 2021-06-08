import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'marosca-project',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

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
