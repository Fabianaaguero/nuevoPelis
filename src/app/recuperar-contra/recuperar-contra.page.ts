import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  recuperar = {
    email: ''
  }

  constructor(
    private authF: AngularFireAuth, 
    private router: Router, 
    private alertButtons: AlertController
    ) { }

  ngOnInit() {
  }

  recuperarContra() {
    const emailRec = this.recuperar.email

    this.authF.sendPasswordResetEmail(emailRec).then(()=> {
      this.fireValid()
      this.router.navigate(['/login'])
    }).catch((error)=>{
      this.fireError((error.code))
    })
  }

  async fireValid() {
    const alert = await this.alertButtons.create({
      subHeader: 'Revise su correo para cambiar la contraseña',
      buttons: ['Aceptar'],
    });
    await alert.present();
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