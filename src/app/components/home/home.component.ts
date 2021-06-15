import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenfulService } from 'src/app/contentful/service/contenful.service';
import { ProjectsLanding } from 'src/app/models/projects.model';

@Component({
  selector: 'marosca-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  landingData!: ProjectsLanding

  constructor(private contentfulService: ContenfulService) { }
  async ngOnInit() {
    this.landingData = await this.contentfulService.getProjects()
  }
}
