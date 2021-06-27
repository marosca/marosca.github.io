import { Component, OnInit } from '@angular/core';
import { Meta, Title, TransferState } from '@angular/platform-browser';
import { ContenfulService } from 'src/app/contentful/service/contenful.service';
import { ProjectsLanding } from 'src/app/models/projects.model';
import { genericMetas } from './meta-tags';

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
    this.titleService.setTitle(this.title);
    this.metaService.addTags(genericMetas);

    this.landingData = await this.contentfulService.getPageData() 
  }
}
