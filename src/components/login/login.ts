import { Component} from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { loginservice } from '../../services/login';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
public user : User;
public mostrarlogin : boolean;
public guardarenlocal : boolean =true;
public mesajeerror : string;


  constructor(private toastCtrl: ToastController, public alertctrl:AlertController, public _loginservice:loginservice) {
  this.user = new User ('','','','');
  this.guardarenlocal = true;
  this._loginservice.conectado_fun().subscribe(usuarioconectado => {
  if  (!usuarioconectado.conectado) {
    this.mostrarlogin = true;

  }else {
    this.mostrarlogin = false;
    this.user= usuarioconectado.user;
    this.presentToast('Bienvenid@ nuevamente ' + this.user.nombre);
  };
  });

  }

  loginfuncion(){
      this._loginservice.signup(this.user).subscribe(
          (data:any) => {
            this.user = data.message
            this._loginservice.guardarconeccion(this.guardarenlocal,this.user)
            this.presentToast('Bienvenid@ nuevamente ' + this.user.nombre);
          },
          error => {
            var errormensaje = <any>error;
            if (errormensaje.error.message != null) {
              this.alerta(errormensaje.error.message);
            }else {
              this.alerta('Error al conectar servidor api');
            }

            }

        );
  }
  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      this.mostrarlogin = false
    });

    toast.present();
  }

  alerta (mensaje){

  let alertita = this.alertctrl.create({
    title :'Alerta',
    message: mensaje,
    buttons: ['OK']

  });
  alertita.present();
}
}
