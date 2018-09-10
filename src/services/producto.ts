import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GLOBAL} from './global';
import { Producto } from '../models/producto';
import { opcionProducto } from '../models/opcionproducto';
import { Productomaestro } from '../models/productomaestro';
@Injectable ()
export class productoservice {
  public url:string;
  public producto:Producto;
  public opcionproducto:opcionProducto;
  public productomaestro :Productomaestro;
  constructor (private http: HttpClient){
    this.url = GLOBAL.url
    this.producto = new Producto("","","","","","01/01/2017","","01/01/2017",true,"","",0) ;
    this.producto.codigo = "(Autogenerado)";
    this.producto.estatus = true;
    this.opcionproducto =  new opcionProducto ;
    this.productomaestro = new  Productomaestro("", "", this.producto);
    this.productomaestro.accion = "nuevo";
    this.productomaestro.titulo = "Producto Nuevo";
    this.productomaestro.producto = this.producto
  }

  traeopcion(tipo):Observable<any>{
    return this.http.post(this.url+'/getopcionesp',
        {
        tipo :tipo
        })
  }
  grabarproducto(producto):Observable<any>{
    return this.http.post(this.url+'//crearproducto',
        producto)
  }


}
