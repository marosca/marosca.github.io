import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'marosca-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input()
  contact!: string
  constructor() { }

  ngOnInit() {
  }

}
