import { Component, Input } from '@angular/core';
import { ChildFormComponent } from "../child-form/child-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-lista',
  standalone: true,
  imports: [ChildFormComponent, CommonModule],
  templateUrl: './parent-lista.component.html',
  styleUrl: './parent-lista.component.css'
})
export class ParentListaComponent {

  lista: any[] = [];

  recibirInfo(datos: any) { 
    console.log(datos);

    this.lista.push(datos);
  }

}
