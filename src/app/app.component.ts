import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildFormComponent } from "../components/child-form/child-form.component";
import { ParentListaComponent } from "../components/parent-lista/parent-lista.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildFormComponent, ParentListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
}
