import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem } from '@ionic/angular/standalone';
import { IonInput } from "../../../node_modules/@ionic/angular/standalone/directives/input";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.page.html',
  styleUrls: ['./pagina-login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule
]
})
export class PaginaLoginPage implements OnInit {

  constructor() { }

  ngOnInit() {}
}
