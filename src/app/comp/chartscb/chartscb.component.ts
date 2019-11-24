import { Component, OnInit, Input } from '@angular/core';

import { Chart } from 'chart.js';

import { Respscb } from '../../models/respscb';
import { ChartModel } from '../../models/chartModel';

@Component({
  selector: 'app-chartscb',
  templateUrl: './chartscb.component.html',
  styleUrls: ['./chartscb.component.css']
})
export class ChartscbComponent implements OnInit {
  @Input() respSCB:Respscb;
  @Input() title:string;
  @Input() codeToName:Map<string,string>;

  chartModel:ChartModel[] = [];
  chartModel2:ChartModel[] = [];
  variablesName:string[] = [];
  timeVariable:string[] = [];
  variableValues:number[][] = new Array();
  variableValues2:number[][] = new Array();
  labelNames:string[] = new Array();
  secondGraph:boolean = false;
  btnGraphVisible:boolean = true;

  constructor() { }

  ngOnInit() {
  }
  createData(){

    this.btnGraphVisible =false;
    let dataVar:number = 0;
    let indexOfTime:number = -1;
    this.secondGraph = (this.respSCB.data[0].values.length>1);
    console.log(this.secondGraph);
    for (let index = 0; index < this.respSCB.columns.length; index++) {

      if(this.respSCB.columns[index].type==='t')
      {
          indexOfTime = index;
      }
     
    }
      // Unique timeStamp!
      this.respSCB.data.forEach(time => {
          this.timeVariable.push(time.key[indexOfTime]);
     });

     let tempName = new Set(this.timeVariable);
     this.timeVariable = [];
     tempName.forEach(time => {
       this.timeVariable.push(time);
     })


     let varLength = (this.respSCB.data.length) / this.timeVariable.length;
     let index:number = 0;
     let tempValue:number[] = new Array();
     let tempValue2:number[] = new Array();
     let tempKeyNames:string[] = new Array();
    

     // Geting all the variable names!
     for(let n=0; n< this.respSCB.data.length;)
     {
       for(let j=0; j<this.respSCB.data[n].key.length-1;j++)
       {
          tempKeyNames.push(this.codeToName.get(this.respSCB.data[n].key[j]))
       }

       this.labelNames.push(tempKeyNames.join(", "));
       tempKeyNames = [];
       n = n+this.timeVariable.length;
     }
     
     for(let i=0; i<varLength; i++)
     {
       for(let ii=0; ii<this.timeVariable.length; ii++)
       {
         tempValue.push(this.respSCB.data[index].values[0]);
         tempValue2.push(this.respSCB.data[index].values[1]);
                
         index++;// makes sure every group and timestamp gets a value!
       }
       
       this.variableValues.push(tempValue);
       this.variableValues2.push(tempValue2);
       tempValue = [];
       tempValue2 =[];
       
       
     }
     


     let colors:string[] = ['white','blue','green','red','yellow','orange','grey','black','HotPink','OrangeRed','gold','lavender'];
     
     for(let jj=0;jj<this.variableValues.length;jj++)
     {
       this.chartModel.push( new ChartModel(this.labelNames[jj], this.variableValues[jj],colors[jj],colors[jj],false)  )
       this.chartModel2.push( new ChartModel(this.labelNames[jj], this.variableValues2[jj],colors[jj],colors[jj],false))
     }

     let lineChar1 = new Chart('canvas',{type:'line', data: {
      labels: this.timeVariable, datasets:this.chartModel}});
     
    if(this.secondGraph)
    {     
     let lineChar2 = new Chart('canvas2',{type:'line', data: {
        labels: this.timeVariable, datasets:this.chartModel2}});
    }   
    
  }


}
