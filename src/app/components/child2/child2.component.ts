import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSService } from 'src/app/services/data-s.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child2',
  // standalone: true,
  // imports: [CommonModule,FormsModule],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  public receiveChild1message : String = "";
  public inputData : String = "";
  constructor(private dataS : DataSService){
   }

  ngOnInit() {
    this.dataS.currentMessage.subscribe((res:any)=>{
      // console.log(res);
      this.receiveChild1message = res;
    })
  }

  sendMessage1(data:any){
    console.log(data.value)
    this.dataS.dataTransfer1(data.value)
  }
}
