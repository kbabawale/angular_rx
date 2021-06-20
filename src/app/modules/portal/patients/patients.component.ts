import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PatientsService } from 'src/app/services/patients.service';
import { Patient } from 'src/app/util/model/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients$: Observable<Patient[]> = of([]);
  errorMsg: string = '';
  dataSource: Array<Patient> = [];
  dataColumns: Array<any> = [' ', 'Name', 'Gender', 'Age', 'PhoneNumber', 'Address', '&'];

  constructor(private patientService: PatientsService) { }


  ngOnInit(): void {
    this.fetchPatients();

  }

  fetchPatients() {
    this.patientService.fetchData().pipe(
      catchError(error => {
        this.errorMsg = error.message;
        return of([]);
      })
    ).subscribe(res => {
      this.patients$ = of(res);
      this.dataSource = res;
    });
  }

}
