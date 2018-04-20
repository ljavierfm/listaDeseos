import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

    listas: Lista[] = [];

    constructor() {
        this.cargarData();
        console.log('ListaDeseosService corriendo');
    }

    actualizarData() {
        localStorage.setItem("data", JSON.stringify(this.listas));
    }

    cargarData() {
        //si no se comprueba y esta vacio devolverá null y al agregar una lista por primer vez no hará el push de un null
        if (localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }

    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.actualizarData();
    }
}