import { Component, OnInit, OnDestroy } from '@angular/core';
import {FloresService} from '../../services/flores.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit , OnDestroy{

  formulario;
  suscripcion:Subscription;
  filterPost = '';
  //no edito el id solo lo muestro 
  objFlores={
    id:'',
    Apellido:'',
    Nombre:'',
    email:'',
    edad:''
  }
  constructor( private _flores:FloresService,private _sRoute:Router) { }

  ngOnInit() {
    this.Traerflores();
  }

  Traerflores() {
      this.suscripcion = this._flores.recibidor()
        .subscribe((resultado) => {
          this.formulario = resultado;
        });
        
    }
  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
  CrearProducto()
  {
    this._sRoute.navigate(['formulario','crearDatos']);
  }

  eliminar(id) {
    Swal.fire({
      title: 'Estas Segur@ Papito?',
      text: 'No voy a volver por ti!',
      type: 'warning',
      confirmButtonText: 'Sí, borrame!',
      showCancelButton: true,
      cancelButtonText: 'No, perdoname!',
    }).then((result) => {
      if (result.value) {
        this._flores.delete(id).subscribe((rpta) => {
          if (rpta.id) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Haz sido eliminado de mi corazon',
              showConfirmButton: false,
              timer: 1500
            });
            this.Traerflores();
          }
        })
      }
    })
  }

  abrirModalEditar(id){
    Swal.fire({
      title:'Espere',
      text:'Porfavorcito',
      type:'info',
      allowOutsideClick:false,
      showConfirmButton:false

    });
    this._flores.getById(id).subscribe((rpta)=>{
      Swal.close();
      if(rpta.id){
        this.objFlores=rpta;
        $("#modalEditar").modal("show");
      }
    })

  }
  guardarCambios() {
    // consumir el servicio para editar la factura
    this._flores.putById(this.objFlores).subscribe((rpta) => {
      if (rpta.id) {
        // factura correctamente editada
        this.Traerflores();
        $("#modalEditar").modal("hide");

      }
    })
  }

}

