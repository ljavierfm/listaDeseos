import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos-services';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {

    constructor(private _listaDeseos: ListaDeseosService, private navControler: NavController) {

     }

    ngOnInit(): void { }

    irAgregar(){
        this.navControler.push(AgregarComponent);
    }

    verDetalle(lista,index:number){
        this.navControler.push(DetalleComponent,{lista,index});
    }
}
