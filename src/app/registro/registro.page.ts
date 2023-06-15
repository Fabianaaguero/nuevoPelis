import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroUsuario = {
    nombre: '',
    email: '',
    password: ''
  }

  constructor(private authF: AngularFireAuth, private router: Router, private alertButtons: AlertController) { }

  ngOnInit() {
  }

  async registrar() {
    console.log(this.registroUsuario)
    const email = this.registroUsuario.email
    const password = this.registroUsuario.password
    this.authF.createUserWithEmailAndPassword(email, password).then((user)=> {
      this.router.navigate(['/login'])
      console.log(user)
    }).catch((error)=> {
       this.firebaseError((error.code))
    })
  }

  async firebaseError(code: string) {
    if (code == 'auth/email-already-in-use') {
      const alert = await this.alertButtons.create({
        header: 'Error',
        subHeader: 'El email ya está registrado',
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
    } else if (code == 'auth/weak-password') {
      const alert = await this.alertButtons.create({
        header: 'Error',
        subHeader: 'La contraseña debe tener un mínimo de 6 caracteres',
        buttons: ['Aceptar'],
      });
      await alert.present();
    } else if (code == 'auth/missing-password') {
      const alert = await this.alertButtons.create({
        header: 'Error',
        subHeader: 'Debe ingresar una contraseña',
        buttons: ['Aceptar'],
      });
      await alert.present();
    } else {
      const alert = await this.alertButtons.create({
        header: 'Error',
        subHeader: 'Los campos no son válidos',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }


}

