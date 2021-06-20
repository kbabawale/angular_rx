import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

interface Link {
  logout?: boolean,
  patients?: boolean,
  add_patient?: boolean
}

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  currentRoute = "/portal/patients";
  showSearch: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentRoute = event.url;
      }
      if (this.currentRoute == '/portal/patients') {
        this.showSearch = true;
        let obj = {
          patients: true,
          add_patient: false
        }
        this.selected_links = { ...this.selected_links, ...obj };
      } else {
        this.showSearch = false;
        let obj = {
          patients: false,
          add_patient: true
        }
        this.selected_links = { ...this.selected_links, ...obj };
      }
    });
  }

  //transfer to store later
  selected_links: Link = {
    logout: true,
    patients: true,
    add_patient: false
  };

  ngOnInit(): void {

  }

  goTo(destination: string) {
    if (this.selected_links.hasOwnProperty(destination)) {

      let obj: Link;

      switch (destination) {
        case 'patients':
          obj = {
            patients: true,
            add_patient: false
          }
          this.selected_links = { ...this.selected_links, ...obj };
          this.router.navigateByUrl('/portal/patients');
          break;
        case 'add_patient':
          obj = {
            patients: false,
            add_patient: true
          }
          this.selected_links = { ...this.selected_links, ...obj };
          this.router.navigateByUrl('/portal/add-patient');
          break;
      }



    }
  }

}
