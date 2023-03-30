import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataSService {

  public message = new BehaviorSubject<String>("");
  public currentMessage = this.message.asObservable();
 
  public message1 = new BehaviorSubject<String>("");
  public currentMessage1 = this.message1.asObservable();

  constructor() { }

  dataTransfer (data:String) {
    this.message.next(data);
  }

  dataTransfer1 (data1:String) {
    console.log(data1);
    this.message1.next(data1);
  }
}
