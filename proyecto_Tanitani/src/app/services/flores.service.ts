import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {miurl} from './../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
//este es mi clase
export class FloresService {
  constructor( private _http:HttpClient) { }
  //este recibidor es mi get 
  recibidor():Observable<any>{
    return this._http.get(`${miurl}/florearia_datas`);
  }
  //este es mi post 
  post(objFlores):Observable<any>{
    let objFloresString=JSON.stringify(objFlores);
    let misHeaders=new HttpHeaders().set("Content-Type","application/json");
    return this._http.post(`${miurl}/florearia_datas/`,objFloresString,{headers:misHeaders});
  }
  //PARA BORRAR creo mi funcion 
  delete(id):Observable<any>{
    return this._http.delete(`${miurl}/florearia_datas/${id}`);
  }
  getById(id):Observable<any>{
    return this._http.get(`${miurl}/florearia_datas/${id}`); 
  }
  //para agregar
  putById(objFlores):Observable<any>{
    let objFloresString=JSON.stringify(objFlores);
    let misHeaders=new HttpHeaders().set("Content-Type","application/json");
    return this._http.put(`${miurl}/florearia_datas/${objFlores.id}`,objFloresString,{headers:misHeaders});
  }
}
