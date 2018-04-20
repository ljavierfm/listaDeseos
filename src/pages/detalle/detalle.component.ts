import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases';
import { ListaDeseosService } from '../../app/services/lista-deseos-services';



@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

    idx:number;
    lista:Lista;

    constructor(public navController: NavController, public navParams: NavParams, private _listaDeseos: ListaDeseosService) {
        this.idx=navParams.data.index;
        this.lista=navParams.data.lista;
     }

    ngOnInit(): void { }

    actualizar(item:ListaItem){
        item.completado=!item.completado;
        this._listaDeseos.actualizarData();
    }
}
