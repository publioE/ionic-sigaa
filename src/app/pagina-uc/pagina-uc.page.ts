import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-pagina-uc',
  templateUrl: './pagina-uc.page.html',
  styleUrls: ['./pagina-uc.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule
]
})
export class PaginaUcPage implements OnInit {

  constructor() { }

  ngOnInit() {}
}
