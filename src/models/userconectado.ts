export class Userconectado
{
  user: any;
	constructor(
    conectado: boolean,
    user: {
		nombre : String,
		email : String,
		password : String,
		role : String,
    }
		){}
}
