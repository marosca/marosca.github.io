import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'marosca-hamburguesa',
  templateUrl: './hamburguesa.component.html',
  styleUrls: ['./hamburguesa.component.css']
})
export class HamburguesaComponent implements OnInit {
  @ViewChild('openCloseIcon', { static: false })
  openCloseIcon!: ElementRef;

  @Output()
  onChangeStatus: EventEmitter<boolean> = new EventEmitter()

  isOpen = false
  constructor() { }

  ngOnInit() {}

  toobleNavBar() {
    this.isOpen = !this.isOpen 
    if (this.isOpen) {
      this.openCloseIcon.nativeElement.classList.add('open')
      this.onChangeStatus.emit(true)
    } else {
      this.openCloseIcon.nativeElement.classList.remove('open')
      this.onChangeStatus.emit(false)
    }
  }
}
