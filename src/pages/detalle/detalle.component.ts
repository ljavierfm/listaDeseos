import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases';
import { ListaDeseosService } from '../../app/services/lista-deseos-services';
import { AlertController } from 'ionic-angular';




@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

    idx: number;
    lista: Lista;

    constructor(public navController: NavController, public navParams: NavParams, private _listaDeseos: ListaDeseosService, public alertCtrl: AlertController) {
        this.idx = navParams.data.index;
        this.lista = navParams.data.lista;
    }

    ngOnInit(): void { }

    actualizar(item: ListaItem) {
        item.completado = !item.completado;

        let todosMarcados=true;

        for(let item of this.lista.items){
            if(!item.completado){
                todosMarcados=false;
                break;
            }
        }

        this.lista.terminada=todosMarcados;

        this._listaDeseos.actualizarData();
        console.log(this.lista.terminada?"lista terminada":"lista no terminada");
    }

    borrarLista() {
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: 'Seguro que quieres borrar la lista?',
            buttons: ["Cancelar",
                {
                    text: 'Eliminar',
                    handler: () => {
                        this._listaDeseos.eliminarLista(this.idx);
                        this.navController.pop();
                    }
                }
            ]
        });
        confirm.present();
    }
}
