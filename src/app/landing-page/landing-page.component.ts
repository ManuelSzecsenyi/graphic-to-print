import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  modalOpen = false;
  modalText = "";
  modalHeader = "";

  @ViewChild('vid') video: any; 

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.video.nativeElement.muted = true;;
      this.video.nativeElement.play();
  }

  toggleModal(type: string) {
    this.modalOpen = !this.modalOpen

    if(type == "Impressum") {
      this.modalText = impressum;
    } else if(type == "Kontakt") {
      this.modalText = kontakt
    }

    this.modalHeader = type;
  }

}


const impressum = `
Ing. Thomas Soler
graphic to print
Linzerstraße 160/5/7
1140 Wien 

IBAN: DE55 1001 1001 2625 1676 36 
BIC: NTSBDEB1XXX
`

const kontakt = `
Ing. Thomas Soler 
E-mail: <a href="mailto:thomas@graphic-to-print.com">thomas@graphic-to-print.com</a>
Tel.: <a href="tel:+43 660 520 11 65">+43 660 520 11 65</a>
`