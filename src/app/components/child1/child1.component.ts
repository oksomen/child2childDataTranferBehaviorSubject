import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSService } from 'src/app/services/data-s.service';

@Component({
  selector: 'app-child1',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  public receiveChild2message: String = "";

  constructor(private dataS: DataSService){ 

    
  }

  ngOnInit(){
    this.dataS.currentMessage1.subscribe((res:any)=>{
      console.log(res);
      this.receiveChild2message = res;
    })
  }
  
  sendMessage(data:any){
    this.dataS.dataTransfer(data.value);
  }

}
