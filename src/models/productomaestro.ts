export class Productomaestro
{
  titulo: String;
  producto: import("/Users/rodolfoleiva/Documents/prg/laraapp2/src/models/producto").Producto;

	constructor(
    accion : String,
		titulo : String,
		producto : {
			    codigo :String,
			    categoria : String,
			    color : String,
			    tamano : String,
			    observaciones : String,
			    creadoel : Date,
			    creadopor : String,
			    editadoel : Date,
			    estatus : boolean,
			    talla : String,
			    foto : String ,
			    estadistica : Number,
	  		}
		){}
}
