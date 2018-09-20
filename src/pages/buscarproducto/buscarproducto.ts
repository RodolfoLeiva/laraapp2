import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MostrarproductoComponent } from '../components/mostrarproducto/mostrarproducto';
import { Producto } from '../../models/producto';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';
import { productoservice } from '../../services/producto';
import { opcionProducto } from '../../models/opcionproducto';
/**
 * Generated class for the BuscarproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscarproducto',
  templateUrl: 'buscarproducto.html',
  animations: [
    trigger('animacion', [
      state('inactive',
      style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
         style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
         style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})

            ),
      state('active',
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0})

          ),
      transition('inactive => active', animate('100ms')),
      transition('active => inactive', animate('100ms'))
    ])

  ]
})
export class BuscarproductoPage {
public producto : Producto ;
public categoria : opcionProducto[] ;
public color : opcionProducto[] ;
public tamano : opcionProducto[] ;
public talla : opcionProducto[] ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public _productoservice:productoservice) {
    this.opcionesfuncion();
    this.producto = new Producto;
    this.producto.codigo = "12345678912345";
    this.producto.categoria = "01 Vestidos";
    this.producto.color = "01 Blanco";
    this.producto.tamano = "1 Corto";
    this.producto.observaciones = "";
    this.producto.creadoel = Date.now();
    this.producto.creadopor = "rodolfoleiva@gmail.com";
    this.producto.editadoel = Date.now();
    this.producto.estatus = true;
    this.producto.talla = "45";
  }

  ionViewDidLoad() {
    console.log(this.producto.codigo);
  }
  opcionesfuncion(){
        this._productoservice.traeopcion('color').subscribe((data:any) => {
             this.color = data.opcionproducto
           console.log(this.color)
         });
        this._productoservice.traeopcion('categoria').subscribe((data:any) => {
               this.categoria = data.opcionproducto});
        this._productoservice.traeopcion('tamano').subscribe((data:any) => {
              this.tamano = data.opcionproducto});
        this._productoservice.traeopcion('talla').subscribe((data:any) => {
              this.talla = data.opcionproducto});

}

}
