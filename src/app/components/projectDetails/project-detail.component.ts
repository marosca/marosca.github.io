import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenfulService } from 'src/app/contentful/service/contenful.service';
import { isPlatformBrowser } from '@angular/common';
import { GlobalRefService } from 'src/app/services/global-ref.service';

@Component({
	selector: 'marosca-project',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
	
	project:any;
	isBrowser = isPlatformBrowser(this.platformId)

	constructor(
		private _activatedRoute: ActivatedRoute,
		private contentfulService: ContenfulService,
		private router: Router,
		@Inject(PLATFORM_ID) public platformId: Object,
		private globalRefService: GlobalRefService
		) { }

		async ngOnInit() {
			this._activatedRoute.params.subscribe( async params => {
				
				this.project = await this.contentfulService.getProjectDetail(params.url)
				
				if (!this.project) {
					this.router.navigate(['home'])
				}
			});

			if(this.isBrowser) {
				this.globalRefService.nativeGlobal.scroll({top: 0});
			}
		}
	}
