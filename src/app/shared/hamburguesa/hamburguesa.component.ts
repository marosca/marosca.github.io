import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
@Component({
  selector: 'marosca-hamburguesa',
  templateUrl: './hamburguesa.component.html',
  styleUrls: ['./hamburguesa.component.css']
})
export class HamburguesaComponent implements OnInit , OnChanges {
  @ViewChild('openCloseIcon', { static: false })
  openCloseIcon!: ElementRef;

  @Input()
  isNavBarOpen = false

  @Output()
  onChangeStatus: EventEmitter<boolean> = new EventEmitter()

  isOpen = false
  constructor() { }

  ngOnInit() {}

  ngOnChanges({ isNavBarOpen }: SimpleChanges) {
    if (!isNavBarOpen.currentValue) {
      this.closeHamburger()
    }
  }

  toobleNavBar() {
    this.isOpen = !this.isOpen 
    if (this.isOpen) {
      this.openHamburger()
    } else {
      this.closeHamburger()
    }
  }

  openHamburger() {
    this.openCloseIcon.nativeElement.classList.add('open')
    this.onChangeStatus.emit(true)
  }

  closeHamburger() {
    this.openCloseIcon.nativeElement.classList.remove('open')
    this.onChangeStatus.emit(false)
  }
}
