import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos-services';
import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html'
})
export class TerminadosComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseosService, private navControler: NavController) { }

    ngOnInit(): void { }
    verDetalle(lista, index: number) {
        this.navControler.push(DetalleComponent, { lista, index });
    }
}
