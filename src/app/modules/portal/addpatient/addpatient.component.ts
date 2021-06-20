import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddpatientComponent implements OnInit {

  constructor() { }
  height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  stage: number = 1;
  calcHeight: any;

  ngOnInit(): void {
    this.calcHeight = this.height - 70;

  }
  proceed() {
    switch (this.stage) {
      case 1:
        this.stage += 1;
        break;
      case 2:
        this.stage += 1;
        break;
      case 3:
        this.stage += 1;
        break;
    }
  }

  goBack() {
    switch (this.stage) {
      case 2:
        this.stage -= 1;
        break;
      case 4:
        this.stage -= 1;
        break;
      case 3:
        this.stage -= 1;
        break;
    }
  }

}
