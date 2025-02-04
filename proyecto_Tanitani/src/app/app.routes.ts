import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {FormularioComponent} from './component/formulario/formulario.component';
import { CrearDatosComponent } from './component/crear-datos/crear-datos.component';
import { PromocionesComponent } from './component/promociones/promociones.component';


const caminos:Routes=[
    {path:' ', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'formulario', component:FormularioComponent},
    {path:'formulario/crearDatos',component:CrearDatosComponent},
    {path:'promociones',component:PromocionesComponent},
]
 export const RUTAS=RouterModule.forRoot(caminos);
