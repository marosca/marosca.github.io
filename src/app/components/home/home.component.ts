import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { normalizeProjectsLanding } from 'src/app/contentful/helpers/contentful.helpers';
import { ContenfulService } from 'src/app/contentful/service/contenful.service';
import { ProjectsLanding } from 'src/app/models/projects.model';

@Component({
  selector: 'marosca-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  landingData!: ProjectsLanding
  title = 'Mariola Moreno. Frontend Software engineer and develover'
  constructor(
    private contentfulService: ContenfulService,
    private titleService: Title,
    private metaService: Meta) { }
  async ngOnInit() {
    this.landingData = await this.contentfulService.getPageData()
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'frontend, javascript, Mariola Moreno, angular,vue, react, SSR, programador, developer, engineer'},
      { name: 'description', content: 'Porfolio personal de Mariola Moreno. Desarrolladora y diseñadora de software'},
      { name: 'robots', content: 'index, follow'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);
  }
}
