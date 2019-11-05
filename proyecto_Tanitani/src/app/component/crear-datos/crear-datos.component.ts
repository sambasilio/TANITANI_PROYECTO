import { Component, OnInit, OnDestroy } from '@angular/core';
import {FloresService} from '../../services/flores.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { escapeRegExp } from '@angular/compiler/src/util';

@Component({
  selector: 'app-crear-datos',
  templateUrl: './crear-datos.component.html',
  styleUrls: ['./crear-datos.component.css']
})
export class CrearDatosComponent implements OnInit , OnDestroy{
  
  suscriptor:Subscription;
  //sin ID para por que automaticamente mi mockapi agrega el ID
  objFlores={
    Apellido:'',
    Nombre:'',
    email:'',
    edad:''
  }

  constructor(private _flores:FloresService,private _sRoute:Router) { }

  ngOnInit() {

  }
  ngOnDestroy(){
    try{
      this.suscriptor.unsubscribe()
    }catch(error){
      
    }
  }
  agregarProducto(){
    Swal.fire({
      title:'Espere',
      text:'Porfavorcito',
      type:'info',
      allowOutsideClick:false,
      showConfirmButton:false

    })
    this.suscriptor=this._flores.post(this.objFlores).subscribe((rpta)=>{
      if(rpta.id){
        Swal.fire({
          title:'Exitocito',
          text:'Porfavorcito',
          type:'success',
          allowOutsideClick:false,
          confirmButtonText:'Ir a mi bello formulario'
        }).then((result)=>{
          if(result.value)
          {
            this._sRoute.navigate(['formulario']);
          }
        })
      }
    })
  }


}
