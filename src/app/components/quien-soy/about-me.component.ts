import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'marosca-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  @Input()
  aboutMe!: string

  @Input()
  pdf!: string

  constructor() { }

  ngOnInit() {
  }

}
