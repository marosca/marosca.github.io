import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenfulService } from 'src/app/contentful/service/contenful.service';

@Component({
	selector: 'marosca-project',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
	
	project:any;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private contentfulService: ContenfulService,
		private router: Router
		) { }

		async ngOnInit() {
			this._activatedRoute.params.subscribe( async params => {
				
				this.project = await this.contentfulService.getProjectDetail(params.url)
				
				if (!this.project) {
					this.router.navigate(['home'])
				}
			});

			window.scroll({top: 0});
		}
	}
