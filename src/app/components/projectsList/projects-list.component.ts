import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/proyectos.data';

@Component({
	selector: 'marosca-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
	@Input()
	projects!: Project[];

	constructor() { }

	ngOnInit() {
	}

	getRoute(project: Project) {
		return ['/proyecto', `${project.url}` ]
	}

}
