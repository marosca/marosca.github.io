import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, Proyecto } from 'src/app/data/proyectos.data';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
	selector: 'marosca-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

	projects!: Project[];

	constructor(private _proyectosService:ProyectosService) { }

	ngOnInit() {
		this.projects = this._proyectosService.proyectos;
	}

	getRoute(project: Project) {
		return ['/proyecto', `${project.url}` ]
	}

}
