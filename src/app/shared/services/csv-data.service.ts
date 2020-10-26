import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CsvDataService {
  csvData: Array<Array<string>> = [];
  emitData$ = new Subject<Array<Array<string>>>();
  constructor(
    private http: HttpClient,
    private papa: Papa) {
    this.loadCSV();
  }
  public loadCSV() {
    this.http
      .get('./assets/csv/horizontal.csv', {
        responseType: 'text'
      })
      .subscribe(
        data => this.extractData(data),
        err => console.log('something went wrong: ', err)
      );
  }
  private extractData(response) {
    let csvData = response || '';
    //return
    this.papa.parse(csvData, {
      complete: parsedData => {
        // this.headerRow = parsedData.data.splice(0, 1)[0];
         //console.log(this.csvData);
        this.csvData = parsedData.data;
        //this.csvData = this.clearData(parsedData.data)
        this.emitData$.next(this.csvData);
        /* setTimeout(() => { // TEST 2nd emission 
          this.emitData$.next(this.csvData);
        }, 3000); */
      }
    });
  }
  /* clearData(csvArr) {
    //const clearArray =  csvArr.filter(arr => arr.length);
    //return clearArray;
    //REMOVE empty array from Array 
    let filteredData = csvArr.filter( el => { //return
      return (el != null && el != "");
    });
    return filteredData;
  } */
}