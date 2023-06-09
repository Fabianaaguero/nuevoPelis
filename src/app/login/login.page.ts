import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario = {
    email: '',
    password: ''
  }

  constructor(private authF: AngularFireAuth, private router: Router, private alertButtons: AlertController) { }

  ngOnInit() {
  }

  ingresar() {
    const email = this.loginUsuario.email
    const password = this.loginUsuario.password
    console.log(this.loginUsuario)

    this.authF.signInWithEmailAndPassword(email, password).then((user)=> {
      console.log(user)
      this.router.navigate(['/home'])
    }).catch((error)=> {
      this.fireError((error.code))
    })
  }

  async fireError(code: string) {
    if (code == 'auth/user-not-found') {
      const alert = await this.alertButtons.create({
        header: 'Error',
        subHeader: 'El email no está registrado',
        buttons: ['Aceptar'],
      });
      await alert.present();
    } else if (code == 'auth/invalid-email') {
      const alert = await this.alertButtons.create({
        header: 'Error',
        subHeader: 'El email ingresado no es válido',
        buttons: ['Aceptar'],
      });
      await alert.present();
    } else if (code == 'auth/wrong-password') {
      const alert = await this.alertButtons.create({
        header: 'Error',
        subHeader: 'La contraseña es incorrecta',
        buttons: ['Aceptar'],
      });
      await alert.present();
    } else {
      const alert = await this.alertButtons.create({
        header: 'Error',
        subHeader: 'Compruebe su conexion a internet',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }

}


// auth/invalid-email
// auth/user-not-found
// auth/wrong-password