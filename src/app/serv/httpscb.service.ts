import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Menuscb } from '../models/menuscb';

@Injectable({
  providedIn: 'root'
})
export class HttpscbService {

  MenuSCBUrl:string = 'https://api.scb.se/OV0104/v1/doris/sv/ssd';
  addChoice:string = "";
  menuLength:number;


  constructor(private http:HttpClient) { }

  getMenuSCB():Observable<Menuscb[]>{
    this.addChoice="";
    return this.http.get<Menuscb[]>(`${this.MenuSCBUrl}`);
  }

  getNewMenuSCB(addChoice:string):Observable<Menuscb[]>{

    if(this.addChoice.substr(this.addChoice.lastIndexOf("/") +1 )==addChoice)
    {
      return this.http.get<Menuscb[]>(`${this.MenuSCBUrl}${this.addChoice}`);
    }
    this.addChoice = this.addChoice + "/" + addChoice;
    return this.http.get<Menuscb[]>(`${this.MenuSCBUrl}${this.addChoice}`);

  }

  getVariables(addChoice:string):any{

    if(this.addChoice.substr(this.addChoice.lastIndexOf("/") +1 )==addChoice)
    {
      return this.http.get(`${this.MenuSCBUrl}${this.addChoice}`);
    }
    else
    {
    this.addChoice = this.addChoice + "/" + addChoice;
    return this.http.get(`${this.MenuSCBUrl}${this.addChoice}`);
    }
  }

  goBack():Observable<Menuscb[]>{

 this.menuLength = this.addChoice.length; 
 this.addChoice = this.addChoice.substr(0,this.addChoice.lastIndexOf("/"));
 

  return this.http.get<Menuscb[]>(`${this.MenuSCBUrl}${this.addChoice}`);
  }

   postReqToSCB( req:Object):Observable<any>{
  
  return this.http.post( `${this.MenuSCBUrl}${this.addChoice}`, req);
    }



}
