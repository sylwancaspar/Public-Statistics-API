import { Component, OnInit } from '@angular/core';
import { HttpscbService } from '../../serv/httpscb.service';

import { Menuscb } from '../../models/menuscb';
import { Variablescb } from '../../models/variablescb';
import { Query } from '../../models/query';
import { Respscb } from '../../models/respSCB';



@Component({
  selector: 'app-callscb',
  templateUrl: './callscb.component.html',
  styleUrls: ['./callscb.component.css']
})
export class CallscbComponent implements OnInit {

  menuSCB:Menuscb[] = new Array<Menuscb>();
  respSCB:Respscb;
  title:string;
  variables:Variablescb[];
  selectedValues:string[];
  query:Query[] = [];
  obj:Object;

  codeToName:Map<string,string> = new Map();

  isButtonVisible:boolean = false;
  btnTableVisible:boolean = true;



  constructor(private MS:HttpscbService) { }

  ngOnInit() {
  }

  getMenu(){  
      
      this.isButtonVisible = false;
      this.MS.getMenuSCB().subscribe(menu => {
      this.menuSCB = menu;
      
      });
  
    }

    
  backOneStep(){
    this.title = '';
    this.variables = [];
    this.isButtonVisible = false;
    this.MS.goBack().subscribe(menu => {  
    if(this.MS.menuLength<=0)
    {
      this.menuSCB = [];
    }
    else
    {
      this.menuSCB = menu;
    }
    });
  }

  variableMenu(menuSCB:Menuscb){ 
      
    if(menuSCB.type=="t"){
     
      this.isButtonVisible = true;
      
      this.menuSCB = [];
      this.MS.getVariables(menuSCB.id).subscribe(menu => {
      
          this.title = menu.title;
          this.variables = menu.variables;
          
      })
      
    }
    else
    {
      this.MS.getNewMenuSCB(menuSCB.id).subscribe(menu => {
      this.menuSCB = menu;
      })
    }
}

loadData(userForm){

   let code:string[] = Object.keys(userForm.value);
   

  for (let index = 0; index < code.length; index++) {
    let values2:string[] = userForm.value[code[index]];
    console.log(values2);
    this.query.push(new Query(code[index],{filter:"item",
    values:values2}));
     
  }
  
  let respForm = {
    format: "json"
  }

  this.obj ={query:this.query, response:respForm}
  
  let objString = JSON.stringify(this.obj);

  this.MS.postReqToSCB( objString);
  this.MS.postReqToSCB( objString).subscribe(respo => {
    this.respSCB = respo; // The post response!
    
})
    this.isButtonVisible = false;
    this.btnTableVisible = false; // prep for next page!

    for(let index=0; index<this.variables.length; index++)
    {
      for(let index2=0; index2<this.variables[index].values.length;index2++)
      {
        this.codeToName.set(this.variables[index].values[index2], this.variables[index].valueTexts[index2]); 
      }
    }
   
    this.query = [];
    this.variables = [];
  
}

}
